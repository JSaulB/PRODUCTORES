import { Router } from "express";
import { crearProductoController,actualizarProductoController,eliminarProductoController,verTodosProductosController,verProductoController, comprarProductoController } from "../controllers/gestionProductor_Controller.js";
import { verifyToken } from "../middlewares/auth.js";


const router = Router()

/**
 * @swagger
 * components:
 *   schemas:
 *     Producto:
 *       type: object
 *       required:
 *         - id
 *         - nombre
 *         - precio
 *       properties:
 *         id:
 *           type: string
 *         nombre:
 *           type: string
 *         precio:
 *           type: number
 *         // otras propiedades del producto
 */

/**
 * @swagger
 * /v1/nuevos/producto:
 *   post:
 *     summary: Crear un nuevo producto
 *     tags:
 *       - Productos
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *               precio:
 *                 type: number
 *               imagen:
 *                 type: string
 *                 format: binary
 *     responses:
 *       '200':
 *         description: Producto creado exitosamente
 *       '500':
 *         description: Error interno del servidor
 */
router.post('/nuevos/producto', crearProductoController) // ruta privadas
/**
 * @swagger
 * /v1/productos/{id}:
 *   get:
 *     summary: Obtener un producto por su ID
 *     tags:
 *       - Productos
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Producto encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Producto'
 *       '404':
 *         description: Producto no encontrado
 */
router.get('/productos/:id', verProductoController);
/**
 * @swagger
 * /v1/todos/productos:
 *   get:
 *     summary: Obtener todos los productos
 *     tags:
 *       - Productos
 *     responses:
 *       '200':
 *         description: Lista de productos obtenida correctamente
 *       '404':
 *         description: No se encontraron productos
 */
router.get('/todos/productos', verTodosProductosController)
/**
 * @swagger
 * /v1/productos/{id}:
 *   put:
 *     summary: Actualizar un producto por su ID
 *     tags:
 *       - Productos
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Producto'
 *     responses:
 *       '200':
 *         description: Producto actualizado exitosamente
 *       '404':
 *         description: Producto no encontrado
 *       '500':
 *         description: Error interno del servidor
 */
router.put('/productos/:id',actualizarProductoController) // ruta privada
/**
 * @swagger
 * /v1/productos/{id}:
 *   delete:
 *     summary: Eliminar un producto por su ID
 *     tags:
 *       - Productos
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Producto eliminado exitosamente
 *       '404':
 *         description: Producto no encontrado
 *       '500':
 *         description: Error interno del servidor
 */

router.delete('/productos/:id', eliminarProductoController) // ruta privada
/**
 * @swagger
 * /v1/productos/comprar/{id}:
 *   post:
 *     summary: Comprar un producto por su ID
 *     tags:
 *       - Productos
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: string
 *     responses:
 *       '200':
 *         description: Compra realizada exitosamente
 *       '404':
 *         description: Producto no encontrado
 *       '500':
 *         description: Error interno del servidor
 */
router.post('/productos/comprar/:id',comprarProductoController)

export default router