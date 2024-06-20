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

//Swagger
import path from 'path';
import { fileURLToPath } from 'url';
import swaggerUI from 'swagger-ui-express';
import swaggerJsDoc from 'swagger-jsdoc';


// Definir __dirname en módulos ES6
// const __filename = fileURLToPath(import.meta.url);
// console.log(__filename);
// const __dirname = path.dirname(__filename);

// Definición de la especificación de Swagger
//  const swaggerSpec = {
//      definition: {
//          openapi: "3.0.0",
//          info: {
//              title: "Productores API",
//              version: "1.0.0",
//          },
//          servers: [
//              {
//                  url: "http://localhost:3000",
//              },
//          ],
//      },
//      apis: [`${path.join(__dirname, "./routers/*.js")}`],
//  };

// Configurar Swagger en la ruta /api-doc
// app.use("/api-doc", swaggerUI.serve, swaggerUI.setup(swaggerJsDoc(swaggerSpec)));
// Middleware para manejar JSON y file uploads
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Swagger

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