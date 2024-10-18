import { Router } from 'express';
import { StationController } from '../controllers/station.controller';

const router = Router();

// Obtener todos los station
router.get('/', StationController.getAllStation);

// Obtener un station por ID
router.get('/:id', StationController.getStationById);

// Crear un nuevo station
router.post('/', StationController.createStation);

// Actualizar un station
router.put('/:id', StationController.updateStation);

// Eliminar un station
router.delete('/:id', StationController.deleteStation);

export default router;