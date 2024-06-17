import userModel from "../models/usuarios.js"
import{v4 as uuidv4} from 'uuid'
import bcrypt from "bcrypt"
import { createToken } from "../middlewares/auth.js"
const registroUsuarioController = async (req,res) =>{

    const {password,...otherDataUser} = req.body
    //encriptar el password
    const hashedPassword = await bcrypt.hash(password,10)
    //creación del objeto - spread
    const newUserData ={
        id:uuidv4(),
        password:hashedPassword,
        ...otherDataUser   // spread req.body, se trata de recoger todas las propiedades, sin necesidad de ponerlos individualmente
    }

    const user = await userModel.registerUserModel(newUserData)

    

    res.status(200).json(user)

}

const loginUsuarioController =async (req,res) =>{

    const {username,password} = req.body
    try{
        const user = await userModel.loginUserModel(username,password)
        const token = createToken(user)
        res.status(200).json({user,token})
        } catch(error){
            res.status(500).json({msg:error})
    }

    



}

export{
    registroUsuarioController,
    loginUsuarioController
}