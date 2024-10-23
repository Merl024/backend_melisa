/**
 * Al package.json siempre ponerle el
 * "type": "module"
 */

import express from 'express'
const app =  express()
const PORT = 9090

// Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//Simulacion de databases
const users = [] // Array de objetos usuarios

//APIs o Endpoints
// LISTAR
app.get('/api/users',(req,res) => {
    res.send(users)
})

// CREAR
app.post('/api/users', (req, res) => {
    //Capturando la informacion
    let user = req.body
    console.log(user);
    
    // Asignacion de ID del usuario
    const numRandom = Math.floor(Math.random() * 200 + 1)
    user.id = numRandom + users.length

    // Validacion
    if (!user.nombre || !user.apellido || !user.email || !user.password){
        return res.status(400).send('Todos los campos son obligatorios')
    }

    users.push(user)
    res.send({status: "success", msg: "Usuario creado"})
})

/**Se pone el param en el put y delete, porque es como especificarle cual se va a actualizar
 *  cual es el que se va a borrar
 */
// UPDATE
app.put('/api/users/:userId', (req, res) => {
    // Parseamos el id porque viene por defecto en string
    let userId = parseInt(req.params.userId)
    //Hay que capturar el body, que es donde esta la info que queremos actualizar
    let userUpdate = req.body

    //Indice del elemento dentro del array
    const userPosition = users.findIndex((u => u.id === userId))
    if (userPosition < 0){
        return req.status(202).send({ status: "info", error: "Usuario no encontrado" })
    } 
        //Sobreescribimos la informacion con base a donde esta la info
    users[userPosition] = userUpdate

    res.send({ status: "Success", msg: "Uusario actualizado", data: users[userPosition] })
})

// DELETE
app.delete('/api/users/:userId', (req, res) => {
    let userId = parseInt(req.params.userId)
    const usersSize = users.length
    const userPosition = users.findIndex((u => u.id === userId))
    if (userPosition < 0){
        return req.status(202).send({ status: "info", error: "Usuario no encontrado" })}

    //Elminamos el registro
    users.splice(userPosition, 1)    

    if (users.length === usersSize){
        return req.status(500).send({ status: "error", error: "El usuario no se pudo borrar" })
    }
    res.send({ status: "Success", msg: "Uusario eliminado", data: users[userPosition] })
    

})







app.listen(PORT, ()=>[
    console.log(`Se esta escuchando en el puerto ${PORT}`)
])