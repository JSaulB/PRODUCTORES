import { Router, request } from "express";
import { borrarUsuarioController, loginUsuarioController, registroUsuarioController, verUsuarioController } from "../controllers/usuarios_Controller.js";
import { verifyToken } from "../middlewares/auth.js";

const router = Router()

router.post('/usuarios/registro', registroUsuarioController)
router.post('/usuarios/login',loginUsuarioController)

// administrador

router.delete('/admin/usuarios/borrar/:id', verifyToken, borrarUsuarioController)
router.get('/admin/usuarios/ver/:id',verifyToken, verUsuarioController)



export default router