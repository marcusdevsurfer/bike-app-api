import { Router } from "express";
import { RentalController } from '../controllers/rental.controller'

const router = Router();

// Obtener todos los rentals
router.get('/', RentalController.getAllRental);

// Obtener un rental por ID
router.get('/:id', RentalController.getRentalById);

// Crear un nuevo rental
router.post('/', RentalController.createRental);

// Actualizar un rental
router.put('/:id', RentalController.updateRental);

// Eliminar un rental
router.delete('/:id', RentalController.deleteRental);

export default router;