import bcrypt from "bcrypt"

const usuarios = {
    async registorUsuarioModelo(newUserData){

        const url = 'https://usuariosapp.free.beeceptor.com/api/usuarios'
        const peticion = await fetch(url,{
            method: 'POST', // verbo que quiero ejecutar 
            body: JSON.stringify(newUserData), // informacion
            headers: {'Content-Type':'application/json'} // tipo de contenido
        })
        const data = await peticion.json()

        return data

    }
    ,
    async loginUsuarioModelo(userName,password){

        const url = 'https://usuariosapp.free.beeceptor.com/api/usuarios'
        const peticion = await fetch(url)
        const users = await peticion.json()
        const user = users.find(user => user.username===userName)
        if (!user){
            return{error:"Username or password incorrect"}
            }
            const passwordMatch = await bcrypt.compare(password,user.password)
            if (user && passwordMatch){
                return user
            }else{
                return{error:"Username or password incorrect"}
        }

    }
    ,
    async  obtenerEmailRegistrado(userId) {
        const url = `https://usuariosapp.free.beeceptor.com/api/usuarios/${userId}`; // Suponiendo que la API pueda devolver el usuario por ID
    
        try {
            const response = await fetch(url);
    
            if (!response.ok) {
                throw new Error('Error al obtener el email del usuario');
            }
    
            const usuario = await response.json();
            return usuario.email;
        } catch (error) {
            console.error('Error al obtener el email registrado:', error.message);
            throw error;
        }
    }
    

}

export default usuarios