import { Router } from 'express';
import { UsersController } from '../controllers/user.controller';

const router = Router();

// Obtener todos los usuarios
router.get('/', UsersController.getAllUsers);

// Obtener un usuario por userId
router.get('/:userId', UsersController.getUserById);

// Crear un nuevo usuario
router.post('/', UsersController.createUser);

// Actualizar un usuario
router.put('/:userId', UsersController.updateUser);

// Eliminar un usuario
router.delete('/:userId', UsersController.deleteUser);

export default router;
