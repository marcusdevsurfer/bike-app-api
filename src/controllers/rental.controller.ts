import { Request, Response } from "express";
import Rental from "../models/Rental";

export class RentalController {


    static async getAllRental(req: Request, res: Response) {
        Rental.find().then((result) => {
            return res.json(result);
        }).catch((err) => {
            return res.status(500).json({ message: err.message });
        });
    }

    static async getRentalById(req: Request, res: Response) {
        const id = req.params.id;
        Rental.findById(id).then((result) => {
            if (!result) return res.status(404).json({ message: 'Rental not found' });
            return res.status(200).json(result);
        }).catch(err => {
            res.status(500).json({ message: err.message });
        });
    }

    static async createRental(req: Request, res: Response) {
        const rental = new Rental({
            user: req.body.use,
            bike: req.body.bike,
            rentalStartTime: req.body.rentalStartTime,
            stationStart: req.body.stationStart,
            stationEnd: req.body.stationEnd,
        });


        try {
            const newRental = await rental.save();
            res.status(201).json(newRental);
        } catch (err: any) {
            res.status(400).json({ message: err.message });
        }
    }

    static async updateRental(req: Request, res: Response) {
        Rental.findByIdAndUpdate(req.param.bind, req.body, { new: true }).then(result => {
            if (!result) return res.status(404).json({
                message: 'Rental not found'
            });
            return res.status(200).json(result);
        }).catch(err => {
            res.status(500).json({ mensage: err.message });
        })
    }

    static async deleteRental(req: Request, res: Response) {
        Rental.findByIdAndDelete(req.params.id).then(result => {
            if (!result) return res.status(404).json({
                message: 'Rental not found'
            });
            return res.status(200).json({ message: 'Rental deleted successfully' });
        }).catch(err => {
            res.status(500).json({ message: err.message });
        })
    }
}
