const socket = io()

function sendMensaje(){
    const mensaje = document.getElementById('mensajeInput').value
    socket.emit('nuevoMensaje', mensaje)
}

function appendMensaje(socketId, mensaje){
    const mensajeList = document.getElementById('mensajeList')
    const nuevoMensaje = document.createElement('p')
    nuevoMensaje.textContent = `${socketId}: ${mensaje}`
    mensajeList.appendChild(nuevoMensaje)
}

socket.on('mensajeList', (mensajes) => {
    const mensajeList = document.getElementById('mensajeList')
    mensajeList.innerHTML=""
    mensajes.forEach(mensaje => {
        appendMensaje(
            mensaje.socketId,
            mensaje.mensaje
        )
    });
})

socket.on('nuevoMensaje', (data) => {
    appendMensaje(data.socketId, data.mensaje)
})