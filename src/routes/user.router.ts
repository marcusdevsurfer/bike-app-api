import { Router } from 'express';
import { UsersController } from '../controllers/user.controller';

const router = Router();

// Obtener todos los usuarios
router.get('/', UsersController.getAllUsers);

// Obtener un usuario por ID
router.get('/:id', UsersController.getUserById);

// Crear un nuevo usuario
router.post('/', UsersController.createUser);

// Actualizar un usuario
router.put('/:id', UsersController.updateUser);

// Eliminar un usuario
router.delete('/:id', UsersController.deleteUser);

export default router;
