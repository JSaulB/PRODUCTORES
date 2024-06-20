import jwt from 'jsonwebtoken'

const createToken = (userInfo) =>{
    //                  1          2            3 
    return jwt.sign(userInfo,'secret_key',{expiresIn:'1h'})

}


const verifyToken = (req,res,next)=>{
    // recibo el token
    const authHeader = req.headers.authorization
    // validando el token 
    if (!authHeader || !authHeader.startsWith('Bearer ')){
        return res.status(401).json({message:"Token no proporcionado, intente iniciar sesión"})
    }
    // dividir el token "Bearer:  "

    // token = ['Bearer', 'ssdkfjsdsfjk']
    const token = authHeader.split(' ')[1]  
    // verificar el token 
    jwt.verify(token,'secret_key', (err,decoded) =>{
        // verificacion 
        if (err){
            return res.status(403).json({message:"Fallo al autentificar el token"})
        }
        req.user =decoded
        next()
    })

}



export {
    createToken,
    verifyToken
}