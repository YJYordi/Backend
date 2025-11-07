import { Router } from 'express';
import { ejecutarFuncion, obtenerFunciones } from '../controllers/talleres.controller.js';

const router = Router();

// Ruta para obtener lista de funciones disponibles
router.get('/', obtenerFunciones);

// Ruta para ejecutar cualquier función
router.post('/ejecutar', ejecutarFuncion);

export default router;

