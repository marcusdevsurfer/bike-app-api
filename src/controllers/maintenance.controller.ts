import { Request, Response } from 'express';
import Maintenance from '../models/Maintenance';
export class MaintenanceController {

    static async getAllMaintenance(req: Request, res: Response) {
        Maintenance.find().then((result)=>{
            return res.json(result);
        }).catch((err)=>{
            return res.status(500).json({ message: err.message });
        });
    }

    static async getMaintenanceById (req: Request, res: Response) {
        const id = req.params.id;
        Maintenance.findById(id).then((result)=>{
            if (!result) return res.status(404).json({ message: 'Maintenance not found' });
            return res.status(200).json(result);
        }).catch(err => {
            res.status(500).json({ message: err.message });
        });
    }       



    static async createMaintenance(req: Request, res: Response) {
        const maintenance = new Maintenance({
            bike: req.body.bike,
            maintenanceDate: req.body.maintenanceDate,
            description: req.body.description,
            performedBy: req.body.performedBy,
            cost: req.body.cost,
        });
        
        try {
            const newMaintenance = await maintenance.save();
            res.status(201).json(newMaintenance);
        } catch (err: any) {
            res.status(400).json({ message: err.message });
        }
    }

    static async updateMaintenance(req: Request, res: Response) {
        Maintenance.findByIdAndUpdate(req.params.id, req.body, { new: true }).then(result =>{
            if (!result) return res.status(404).json({ message: 'Maintenance not found'});
            return res.status(200).json(result);
        }).catch(err =>{
            res.status(500).json({ message: err.message });
        })
    }

    static async deleteMaintenance(req: Request, res: Response)  {
        Maintenance.findByIdAndDelete(req.params.id).then(result =>{
            if (!result) return res.status(404).json({ message: 'Maintenance not found'});
            return res.status(200).json({ message: 'Maintenance deleted successfully' });
        }).catch(err =>{
            res.status(500).json({ message: err.message });
        })
    }
}
