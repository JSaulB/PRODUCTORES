const productor ={

    // para crear producto
    async crearProductoModelo(nuevoProducto){
        const url = 'https://appdemon.free.beeceptor.com/api/tours'
        const peticion = await fetch(url,{
            method: 'POST', // verbo que quiero ejecutar 
            body: JSON.stringify(nuevoProducto), // informacion
            headers: {'Content-Type':'application/json'} // tipo de contenido
        })
        const data = await peticion.json()

        return data
    }
    ,

    // para actualizar producto 
    actualizarProductoModelo(){
        // código
    }
    ,
    // para eliminar producto
    eliminarProductoModelo(){
        // código
    }
    ,

    // para ver  todos los productos productos
    verTodosProductosModelo(){
        // código
    }
    ,

    // para ver producto especifico 
    verProductoModelo(){
        // código
    }
    
}
    
export default productor
