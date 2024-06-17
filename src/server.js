import express from 'express'
import rutaProvedor from './routers/gestionProductor_Routers.js'
import rutaUsuario from './routers/usuarios_Router.js'
// importar para obtener imagenes
import cloudinary from 'cloudinary'
import dontenv from 'dotenv'
import fileUpload from 'express-fileupload';

dontenv.config()
// const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
})

app.use(fileUpload({
  useTempFiles:true,
  tempFileDir:'/upload' 
}))



app.get('/', (req, res) => {
    res.send('Hola mundo');
  });

// Inicia el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});


app.use('/v1/', rutaProvedor)
app.use('/v1/', rutaUsuario)

export default app