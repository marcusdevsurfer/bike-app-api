import { Router } from 'express';
import { StationsController } from '../controllers/station.controller';
import { BikesController } from '../controllers/bike.controller';

const router = Router();

// Obtener todos los usuarios
router.get('/', StationsController.getAllStations);
router.get('/:stationId/bikes', BikesController.getAllBikesByStationId);
// Obtener un usuario por ID
router.get('/:stationId', StationsController.getStationById);
// router.post('/:stationId/maintenance', UsersController.getUserById);

// Crear un nuevo usuario
router.post('/', StationsController.createStation);

// Actualizar un usuario
router.put('/:stationId', StationsController.updateStation);

// Eliminar un usuario
router.delete('/:stationId', StationsController.deleteStation);

export default router;
