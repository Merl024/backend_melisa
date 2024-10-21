// ###################
// ##### VIdeo 1 #####
// ###################
// /* Esto es lo mas basico que se debe saber para crear un servidor
// Lo que estamos haciendo aqui es ocupar el http para crear una peticion y que sea
// devuelta en el localhost8080 */

// const http = require('http')

// const server = http.createServer((request, response) => {
//     response.end('Hola mundo')
// })
////El primer parameeto es el numero de puerto y el segundo es una funcion callback que imprime lo que se quiere mostrar en el puerto
// server.listen(8080, ()=>{
//     console.log("Server corriendo en el puerto 8080")
// })
// //Luego de esto se pone en el navegador 'Localhost:8080' y va a salir lo que hemos puesto en consola

// ###################
// ##### VIdeo 2 #####
// ###################

// const express = require('express')

// const app = express()

// const PORT = 8080

// // Metodos HTTP

// //El primer parametro es la ruta (en este caso la ruta base)
// // El segundo parametro es la f(x) callback. Con poner req y res express entiende que es un request y un response
// app.get('/', (req, res)=>{
//     res.json({
//         msg: "GET"
//     })
// })

// app.post('/', (req, res)=>{
//     res.json({
//         msg: "POST"
//     })
// })

// app.put('/', (req, res)=>{
//     res.json({
//         msg: "PUT"
//     })
// })

// app.delete('/', (req, res)=>{
//     res.json({
//         msg: "DELETE"
//     })
// })

// //El primer parameeto es el numero de puerto y el segundo es una funcion callback que imprime lo que se quiere mostrar en el puerto
// app.listen(PORT, ()=>{
//     console.log(`Servidor corriendo en el puerto ${PORT}`);    
// })


// ###################
// ##### VIdeo 3 #####
// ###################

const express = require('express')
const app = express()
const PORT = 3000

// Middleware para trabaar con datos JSON
app.use(express.json())

//Array - forma local
let usuarios = []

app.get('/usuarios', (req, res)=>{
    res.json(usuarios)
})

app.post('/usuarios', (req, res)=>{
    const { nombre, edad } = req.body
    const nuevoUser = { id: usuarios.length + 1, nombre, edad }
    usuarios.push(nuevoUser)
    res.status(201).json(nuevoUser)
})

//Para actualizar un dato hay que establecer el id de uno de ellos
app.put('/usuarios/:id', (req, res)=>{
    const { id } = req.params
    const { nombre, edad } = req.body
    //Estamos buscanod al usuario dentro de los usuarios con el id del usuario, para ve si existe dentro del arreglo
    const usuario = usuarios.find(u => u.id === parseInt(id))

    if (!usuario) return res.status(404).json({mensaje: "Usuario no encontrado"})

        //Actualizar datos
        usuario.nombre = nombre || usuario.nombre
        usuario.edad = edad || usuario.edad
        res.json(usuario)
})

app.delete('/usuarios/:id', (req, res)=>{
    const { id } = req.params
    usuarios = usuarios.filter(u=> u.id !== parseInt(id))
    res.json({mensaje: "Usuario eleminado"})
}) 

app.listen(PORT, ()=>{
    console.log(`Servidor escuchando el puerto ${PORT}`);
    
})