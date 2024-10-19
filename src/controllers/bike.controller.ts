import { Request, Response } from 'express';
import Bike from '../models/Bike';
export class BikesController {

    static async getAllBikes(req: Request, res: Response) {
        Bike.find().then((result)=>{
            return res.json(result);
        }).catch((err)=>{
            return res.status(500).json({ message: err.message });
        });
    }
    
    static async getAllBikesByStationId(req: Request, res: Response) {
        Bike.find({station:req.params.stationId}).then((result)=>{
            return res.json(result);
        }).catch((err)=>{
            return res.status(500).json({ message: err.message });
        });
    }

    static async getBikeById (req: Request, res: Response) {
        const bikeId = req.params.bikeId;
        Bike.findById(bikeId).then((result)=>{
            if (!result) return res.status(404).json({ message: 'Bike not found' });
            return res.status(200).json(result);
        }).catch(err => {
            res.status(500).json({ message: err.message });
        });
    }



    static async createBike(req: Request, res: Response) {
        const bike = new Bike({
            serialNumber: req.body.serialNumber,
            status: req.body.status,
            model: req.body.model,
            station: req.body.station

        });
        
        try {
            const newBike = await bike.save();
            res.status(201).json(newBike);
        } catch (err:any) {
            res.status(400).json({ message: err.message });
        }
    }

    static async updateBike(req: Request, res: Response) {
        const bikeId = req.params.bikeId;
        Bike.findByIdAndUpdate(bikeId, req.body, { new: true }).then(result =>{
            if (!result) return res.status(404).json({ message: 'Bike not found'});
            return res.status(200).json(result);
        }).catch(err =>{
            res.status(500).json({ message: err.message });
        })
    }

    static async deleteBike(req: Request, res: Response)  {
        const bikeId = req.params.bikeId;
        Bike.findByIdAndDelete(bikeId).then(result =>{
            if (!result) return res.status(404).json({ message: 'Bike not found'});
            return res.status(200).json({ message: 'Bike deleted successfully' });
        }).catch(err =>{
            res.status(500).json({ message: err.message });
        })
    }
}
