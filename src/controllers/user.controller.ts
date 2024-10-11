import { Request, Response } from 'express';
import User from '../models/User';
export class UsersController {

    static async getAllUsers(req: Request, res: Response) {
        User.find().then((result)=>{
            return res.json(result);
        }).catch((err)=>{
            return res.status(500).json({ message: err.message });
        });
    }

    static async getUserById (req: Request, res: Response) {
        const id = req.params.id;
        User.findById(id).then((result)=>{
            if (!result) return res.status(404).json({ message: 'User not found' });
            return res.status(200).json(result);
        }).catch(err => {
            res.status(500).json({ message: err.message });
        });
    }



    static async createUser(req: Request, res: Response) {
        const user = new User({
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            membershipStatus: req.body.membershipStatus,
        });
        
        try {
            const newUser = await user.save();
            res.status(201).json(newUser);
        } catch (err:any) {
            res.status(400).json({ message: err.message });
        }
    }

    static async updateUser(req: Request, res: Response) {
        User.findByIdAndUpdate(req.params.id, req.body, { new: true }).then(result =>{
            if (!result) return res.status(404).json({ message: 'User not found'});
            return res.status(200).json(result);
        }).catch(err =>{
            res.status(500).json({ message: err.message });
        })
    }

    static async deleteUser(req: Request, res: Response)  {
        User.findByIdAndDelete(req.params.id).then(result =>{
            if (!result) return res.status(404).json({ message: 'User not found'});
            return res.status(200).json({ message: 'User deleted successfully' });
        }).catch(err =>{
            res.status(500).json({ message: err.message });
        })
    }
}
