import { Router } from 'express';
import { BikesController } from '../controllers/bike.controller';

const router = Router();

// Obtener todos los usuarios
router.get('/', BikesController.getAllBikes);

// Obtener un usuario por userId
router.get('/:userId', BikesController.getBikeById);

// Crear un nuevo usuario
router.post('/', BikesController.createBike);

// Actualizar un usuario
router.put('/:userId', BikesController.updateBike);

// Eliminar un usuario
router.delete('/:userId', BikesController.deleteBike);

export default router;
