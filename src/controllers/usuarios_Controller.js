import userModel from "../models/usuarios.js"
import{v4 as uuidv4} from 'uuid'
import bcrypt from "bcrypt"
import { createToken } from "../middlewares/auth.js"
import usuarios from "../models/usuarios.js"
const registroUsuarioController = async (req,res) =>{

    const {id, password,email,...otherDataUser} = req.body
    //encriptar el password
    const hashedPassword = await bcrypt.hash(password,10)
    //creación del objeto - spread
    const newUserData ={
        id:uuidv4(),
        password:hashedPassword,
        email,
        ...otherDataUser   // spread req.body, se trata de recoger todas las propiedades, sin necesidad de ponerlos individualmente
    }

    const user = await userModel.registroUsuarioModelo(newUserData)

    

    res.status(200).json(user)

}

const loginUsuarioController =async (req,res) =>{

    const {username,password} = req.body
    try{
        const user = await userModel.loginUsuarioModelo(username,password)
        const token = createToken(user)
        res.status(200).json({user,token})
        } catch(error){
            res.status(500).json({msg:error})
    }
}


const verUsuarioController = async (req,res) =>{
    const {id}= req.params
    try {
        const user =  await usuarios.verUsuarioModelo(id)
        const status = user.error ? 404 : 200
        res.status(status).json(user)

    }catch(error){
        res.status(500).json({msg:error})

    }
}

const borrarUsuarioController = async (req,res) =>{
    const {id}= req.params
    // console.log(id);
    try {
    
        const user =  await usuarios.eliminarUsuarioModelo(id)
        const status = user.error ? 404 : 200
        res.status(status).json(user)
    
    }catch(error){
        res.status(500).json({msg:error})
    
    }
}


export{
    registroUsuarioController,
    loginUsuarioController,
    borrarUsuarioController,
    verUsuarioController
}