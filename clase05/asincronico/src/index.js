const express = require('express')
const handlebars = require('express-handlebars')

const app = express()
const PORT = 8080

app.use(express.json())
app.use(express.urlencoded({ extended: true }))


// Configurar para indicar a express que se usaran handlebars
app.engine('handlebars', handlebars.engine())

//Indicar donde se encontraran la carpeta de esas plantillas
// (como se llama, dirname + la ruta)
app.set('views', __dirname + '/views')

//Indicar el motor de plantilla a utilizar
app.set('view engine', 'handlebars')

// Indicar cuales seran las carpetas donde se almacenaran las paginas donde se manejaran los handlebars
app.use(express.static(__dirname + '/views'))


app.get('/', (req, res) => {
    let testUser = {
        name: 'Melisa',
        lastName: "Rivas"
    }

    res.render('index', testUser)
})

app.listen(PORT, () => {
    console.log('Se esta escuchando en el puerto', PORT);
    
})