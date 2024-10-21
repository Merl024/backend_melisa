/* El escribir 
const express = require('express')
es la manera vieja de trabajar con los frameworks. 
A continuacion se presenta la mas reciente
*/

/*
#######################################################
Al momento de ejecutarlo en la terminal, hacerlo desde la carpeta raiz
en este caso es el express. Para ejercutarlo, en este caso, seria poner la
direccion de la ruta raiz en la terminal y una vez ahi hacer un 
node src/index.js
#######################################################
*/

/* NODEMON
Este sirve para evitar estar apagando y encendiendo el servidor cada que se hace 
algun cambio, sino que a medida guardamos EL SOLO lo reinicia
*/

import express from 'express'
// Toda la constante app tiene las funconalidades de express.
const app = express()
const PORT = 8080

// Armar un ENDPOINT
// Endpoint = punto de entrada

app.get('/', (req, res)=>{
    res.send('Bienvenida')
})

app.get('/saludo', (req, res)=>{
    res.send({nombre: 'Melisa'})
})

/*
http://localhost/ ---> 127.0.0.1
*/

app.get('/bienvenida', (req, res)=>{
    res.send('<h1 style="color:blue"> Bienvenido a Express. Estamos usando HTML como respuest como respuesta</h1>')
})

app.get('/usuario', (req, res)=>{
    res.send([
        {
            id: 1, 
            nombre: 'Melisa',
            apellido: 'Rivas',
            email: 'melisa@gmail.com'
        }
    ])
})

// PARAMS -- parametros que se pasan por URL
/* ############################################
   ########### USANDO REQ.PARAMS  #############
   ############################################
*/

app.get('/usuario/:nombre/:apellido', (req, res)=>{
    res.send(`Hola, tu nobre completo es ${req.params.nombre} ${req.params.apellido}`)
}) 

//EJERCICIO
const usuario = [
    {id: 1, nombre: "Melisa", apellido:"'Rivas", edad: "X", genero: 'F'},
    {id: 2, nombre: "Alisson", apellido:"'Quijano", edad: "18", genero: 'F'},
    {id: 3, nombre: "Christian", apellido:"'Renderos", edad: "20", genero: 'H'},
    {id: 4, nombre: "Alejandra", apellido:"'Arriola", edad: "19", genero: 'F'}
]

app.get('/usuario/user-all',(req,res)=>{
    res.send(usuario)
})

app.get('/usuario/:userId', (req, res)=>{
    let userId = req.params.userId
    
    //Hacer la busqueda
    const user = usuario.find(u => u.id === parseInt(userId))
 
    if (!user){
        res.status(404).send('User Not Found')
    }
    
    // Devolver el usuario
    res.send(`Aqui esta el usuario ${JSON.stringify(user)}`)

})

/* ############################################
   ########### USANDO REQ.QUERY   #############
   ############################################
*/

// http:/localhost:8080//ejemplo-query/query?paramas --> en params van los paramentros que queremos consultar
// http:/localhost:8080//ejemplo-query/query?nombre=Melisa&apellido=Rivas

/**La primera diferencia entre query y params, es que en params los parametros se pasan manualmente en el codgio,
 * mientras que en query los parametros se ponene en el navegador, sin la necesidad que sean especificados en el codigo
 * req.query no limita la cantidad de informacion que se le pone a la busqueda.
 */

const consultas = []

app.get('/ejemplo-query/query', (req, res)=>{
    console.log(req.query);
    
    consultas.push(req.query)

    res.send('Data agregada con extio')
})

app.get('/ejemplo-query/data-all', (req, res) => {
    res.send(consultas)
})




app.listen(PORT, ()=>{
    console.log(`El servidor se esta leyendo en el puerto ${PORT}`);
})