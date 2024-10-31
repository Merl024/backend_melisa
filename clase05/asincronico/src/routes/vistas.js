const express = require('express')

// router viene de express
const router = express.Router()

//cambia de app a router
router.get('/saludo', (req, res) => {
    res.render('saludo', {mensaje: 'Bienvenido a los routers'})
})

module.exports = router
