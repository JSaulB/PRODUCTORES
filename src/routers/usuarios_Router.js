import { Router, request } from "express";
import { borrarUsuarioController, loginUsuarioController, registroUsuarioController, verUsuarioController } from "../controllers/usuarios_Controller.js";

const router = Router()

router.post('/usuarios/registro', registroUsuarioController)
router.post('/usuarios/login',loginUsuarioController)

// administrador

router.delete('/usuarios/borrar/:id',borrarUsuarioController)
router.get('/usuarios/ver/:id', verUsuarioController)



export default router