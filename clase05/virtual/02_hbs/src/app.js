import express from 'express'
import usersRouter from './routers/users.routers.js'
import petsRouters from './routers/pets.routers.js'
import __dirname from './utils.js'
import handlebars from 'express-handlebars'
import viewsRouter from './routers/views.routers.js'

/**La idea de HANDLEBARS es poder incluir variables dinamicas */

const app = express()
const PORT = 8080

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//configuracion del directorio public
app.use(express.static(__dirname + '/public/'))

//Configuraciones de handlebars
app.engine('handlebars', handlebars.engine())

//Especificamos que habra una carpeta views y se dice donde va a estar
app.set('views', __dirname + '/views')
app.set('view engine', 'handlebars')

//Esto es solo para probar como se transmite la informacion de una api al html
app.get('/hello', (req, res) => {
    let testUser = {
        name: 'Melisa',
        age: 25,
        city: 'New York'
    }
    //El primer parametro es como se llama el archivo donde le estamos pasando los datos 
    //Y el segundo parametro es el dato que queremos mostrar
    res.render('hello', testUser)
})


//routers
app.use('/api/user', usersRouter)
app.use('/api/pet', petsRouters)
app.use('/hbs', viewsRouter)

app.listen(PORT, ()=>{
    console.log('Se esta escuchando en el puerot', PORT);
    
})