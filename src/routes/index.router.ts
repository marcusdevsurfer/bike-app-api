import { Router, Request, Response } from 'express';
const router = Router();

router.get('/', (req:Request, res:Response) => {
    res.status(200).json({message:'Hola'})
});
router.get('/:algoId', (req:Request, res:Response) => {
    res.status(200).json({message:'Hola'})
});
router.post('/', (req:Request, res:Response) => {
    res.status(200).json({message:'Hola'})
});
router.put('/:algoId', (req:Request, res:Response) => {
    res.status(200).json({message:'Hola'})
});
router.delete('/:algoId', (req:Request, res:Response) => {
    res.status(200).json({message:'Hola'})
});

export default router;
