import { Router } from 'express';
import { BikesController } from '../controllers/bike.controller';

const router = Router();

// Obtener todos los usuarios
router.get('/', BikesController.getAllBikes);

// Obtener un usuario por bikeId
router.get('/:bikeId', BikesController.getBikeById);

// Crear un nuevo usuario
router.post('/', BikesController.createBike);

// Actualizar un usuario
router.put('/:bikeId', BikesController.updateBike);

// Eliminar un usuario
router.delete('/:bikeId', BikesController.deleteBike);

export default router;
