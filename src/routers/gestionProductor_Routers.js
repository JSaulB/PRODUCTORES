import { Router } from "express";
import { crearProductoController,actualizarProductoController,eliminarProductoController,verTodosProductosController,verProductoController, comprarProductoController } from "../controllers/gestionProductor_Controller.js";
import { verifyToken } from "../middlewares/auth.js";


const router = Router()


router.post('/nuevos/producto', verifyToken, crearProductoController) // ruta privadas
router.get('/productos/:id', verProductoController)
router.get('/todos/productos', verTodosProductosController)
router.put('/productos/:id',verifyToken, actualizarProductoController) // ruta privada
router.delete('/productos/:id',verifyToken, eliminarProductoController) // ruta privada
router.post('/productos/comprar/:id', verifyToken, comprarProductoController)

export default router