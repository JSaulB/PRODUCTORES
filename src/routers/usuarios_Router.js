import { Router, request } from "express";
import { loginUsuarioController, registroUsuarioController } from "../controllers/usuarios_Controller.js";

const router = Router()

router.post('/usuario/registro', registroUsuarioController)
router.post('/usuario/login', loginUsuarioController)



export default router