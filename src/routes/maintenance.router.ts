import {Router} from 'express';
import {MaintenanceController} from '../controllers/maintenance.controller';

const router = Router();

// Obtener todos los mantenimientos
router.get('/', MaintenanceController.getAllMaintenance);

// Obtener un mantenimiento por ID
router.get('/:id', MaintenanceController.getMaintenanceById);

//crear un nuevo Mantenimineto}
router.post('/', MaintenanceController.createMaintenance);

// Actualizar un mantenimiento
router.put('/:id', MaintenanceController.updateMaintenance);

// Eliminar un mantenimiento    
router.delete('/:id', MaintenanceController.deleteMaintenance);

export default router;