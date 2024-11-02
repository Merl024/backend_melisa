import { Router } from "express";

const router = Router()

let users = []

//Endpoints
//El punto de entrada queda como raiz porque ya le pusimos endpoint en el app
router.get('/', (req, res) =>{
    res.send(users)
})

router.post('/', (req, res) => {
    //Capturamos lo que llega del json
    const user = req.body
    if (!user.name || !user.lastName || !user.email){
        console.error('Usuario no valido')
        res.status(404).send({ status: "Error", msg: "Todos los campos son obligatorios"})
    }

    //Creamos al usuario
    user.id = users.length + 1
    users.push(user)

    res.send({ status: 'Success', msg: "Usuario creado exitosamente", data: user})
})

router.put('/:userId', (req, res) => {
    let userId = parseInt(req.params.userId)
    let userUpdate = req.body

    const userPosition = users.findIndex(u => u.id === userId)
    if (userPosition < 0){
        return res.status(404).send({ status: "Error", msg: "Usuario no encontrado"})
    }

    users[userPosition] = userUpdate
    res.send({ status: 'Success', msg: "Usuario actualizado exitosamente", data: users[userPosition]})

})

router.delete('/:userId', (req, res) => {
    let userId = parseInt(req.params.userId)
    
    const usersSize = users.length

    const userPosition = users.findIndex(u => u.id === userId)
    if (userPosition < 0){
        return res.status(404).send({ status: "Error", msg: "Usuario no encontrado"})
    }

    users.splice(userPosition, 1)

    if(users.lenght === usersSize){
        return res.status(500).send('No se pudo borrar el usuario')
    }
    
    res.send({ status: 'Success', msg: "Usuario borrado exitosamente"})

})

export default router