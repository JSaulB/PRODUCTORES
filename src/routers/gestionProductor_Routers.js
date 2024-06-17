import { Router } from "express";
import { crearProductoController,actualizarProductoController,eliminarProductoController,verTodosProductosController,verProductoController } from "../controllers/gestionProductor_Controller.js";
import { verifyToken } from "../middlewares/auth.js";


const router = Router()


router.post('/nuevos/producto', crearProductoController) // ruta privadas
router.get('/productos/:id', verProductoController)
router.get('/productos/todos', verTodosProductosController)
router.put('/productos/:id',verifyToken, actualizarProductoController) // ruta privada
router.delete('/productos/:id',verifyToken, eliminarProductoController) // ruta privada

export default router