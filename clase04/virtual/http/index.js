const http = require('http')
const PORT = 8080

// El cliente es el req, pues es el que hace la peticion al servidor
// El server es el res, pues procesa la soli y responde. 
const server = http.createServer((req, res)=>{
    // Respondemos al cliente con un mensaje
    res.end('Trabajando la clase 04, con servidores.')
})

server.listen(PORT, ()=>{
    console.log(`El servidor se esta escuchando en el puerto ${PORT}`);
    
})