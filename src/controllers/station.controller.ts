import { Request, Response } from 'express';
import Station from '../models/Station';
export class StationsController {

    static async getAllStations(req: Request, res: Response) {
        Station.find().then((result)=>{
            return res.json(result);
        }).catch((err)=>{
            return res.status(500).json({ message: err.message });
        });
    }

    static async getStationById (req: Request, res: Response) {
        const stationId = req.params.stationId;
        Station.findById(stationId).then((result)=>{
            if (!result) return res.status(404).json({ message: 'Station not found' });
            return res.status(200).json(result);
        }).catch(err => {
            res.status(500).json({ message: err.message });
        });
    }



    static async createStation(req: Request, res: Response) {
        const station = new Station({
            name: req.body.name,
            location: req.body.location
        });
        
        try {
            const newStation = await station.save();
            res.status(201).json(newStation);
        } catch (err:any) {
            res.status(400).json({ message: err.message });
        }
    }

    static async updateStation(req: Request, res: Response) {
        const stationId = req.params.stationId;
        Station.findByIdAndUpdate(stationId, req.body, { new: true }).then(result =>{
            if (!result) return res.status(404).json({ message: 'Station not found'});
            return res.status(200).json(result);
        }).catch(err =>{
            res.status(500).json({ message: err.message });
        })
    }

    static async deleteStation(req: Request, res: Response)  {
        const stationId = req.params.stationId;
        Station.findByIdAndDelete(stationId).then(result =>{
            if (!result) return res.status(404).json({ message: 'Station not found'});
            return res.status(200).json({ message: 'Station deleted successfully' });
        }).catch(err =>{
            res.status(500).json({ message: err.message });
        })
    }
}
