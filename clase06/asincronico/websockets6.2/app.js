
const express = require('express')
const app = express()
const http = require('http').createServer(app)
const io = require('socket.io')(http)
const path = require('path')
const PORT = 8080

app.use(express.static(path.join(__dirname, '/public')))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

let mensajes = []

//Config de socket.io
io.on('connection', (socket)=>{
    socket.emit('mensajeList', mensajes)
    console.log('Nuevo cliente se ha conectado');    

    socket.on('nuevoMensaje', (mensaje)=> {
        io.emit('nuevoMensaje', {
            socketId: socket.id,
            mensaje: mensaje
        })
        mensajes.push(mensaje)
    })

    socket.on('disconnect', ()=> {
        console.log('Usuario desconectado', socket.id);   
    })
})




http.listen(PORT, () => {
    console.log('Se esta escuchando en el puerto ', PORT);
    
})