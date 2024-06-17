import productor from "../models/gestionProductor.js"
import{v4 as uuidv4} from 'uuid'
import {v2 as cloudinary} from 'cloudinary'
import fsExtra from 'fs-extra'

// para crear producto
const crearProductoController = async (req,res) =>{
    const nuevoProductoData ={
        id:uuidv4(),
        ...req.body   // spread req.body, se trata de recoger todas las propiedades, sin necesidad de ponerlos individualmente
    }

    const cloudinaryResponse = await cloudinary.uploader.upload(req.files.imagen.tempFilePath,{folder:'producto'})
    nuevoProductoData.image = cloudinaryResponse.secure_url
    nuevoProductoData.public_id = cloudinaryResponse.public_id

    const producto = await productor.crearProductoModelo(nuevoProductoData)

    fsExtra.unlink(req.files.imagen.tempFilePath)

    res.status(200).json(producto)

}

// para actualizar producto
const actualizarProductoController = (req,res) =>{

}

// para elimirar producto

const eliminarProductoController = (req,res) =>{
    const id = req.params.id
}

// para ver todos los productos
const verTodosProductosController = (req,res) =>{

}

// para ver producto en específico 
const verProductoController = (req,res) =>{
    const id = req.params.id
}


export{
    crearProductoController,
    actualizarProductoController,
    eliminarProductoController,
    verTodosProductosController,
    verProductoController
 }