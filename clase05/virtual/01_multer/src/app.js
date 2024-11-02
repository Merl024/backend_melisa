import express from 'express'
import usersRouter from './routers/users.routers.js'
import petsRouters from './routers/pets.routers.js'
import __dirname from './utils.js'

const app = express()
const PORT = 8080

// Un middle ware es algo que intercepta el trafico entrarte 

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//configuracion del directorio public
app.use(express.static(__dirname + '/public/'))


//routers
//Esto ayuda a mantener el codigo base mas limpio
app.use('/api/user', usersRouter)
app.use('/api/pet', petsRouters)
/**A medida el cliente haga la request, la parte de back traza una ruta hasta llegar al endpoint
 * que maneja toda la logica que necesita dependiendo de lo que el cliente este solicitando
 */

//Este siguiente ejercicio es para la manipulacion de archivos ESTATICOS

//Configuracion directorio public, le pasamos la direccion de como llegar a public
//teniendo en cuenta que se esta ejecutando desde la carpeta raiz
app.use(express.static('./src/public'))

app.listen(PORT, ()=>{
    console.log('Se esta escuchando en el puerot', PORT);
    
})