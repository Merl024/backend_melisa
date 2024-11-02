const express = require('express')
const handlebars = require('express-handlebars')
const vistasRouter = require('./routes/vistas.js')
//Este ayuda a poder subir archivos
const multer = require('multer')
const path = require('path')

const app = express()
const PORT = 8080

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//Config de multer
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        //configurando la carpeta donde se guardaran los archivos subidos
        cb(null, path.resolve(__dirname, './uploads'))
        //cb quiere decir callback
    },
    filename: (req, file, cb) => {
        const timestamp = Date.now()
        const originalname = file.originalname
        const ext = path.extname(originalname)
        cb(null, `${timestamp} - ${originalname}`)
    }
})

//middleware para manejar la subida de los archivos
const upload = multer({ storage })
app.use(express.static(path.join(__dirname, 'public')))

//Se utilizara para el ejericio practico
//Parte del ejercicio practio con condicionales {{#if}} y {{#each}}
const productos  = [
    {
        nombre: "USB",
        precio: 0.5,
        oferta: true
    },
    {
        nombre: "Computadora",
        precio: 780,
        oferta: true
    },
    {
        nombre: "Audifonos",
        precio: 50,
        oferta: false
    }
]

// Configurar para indicar a express que se usaran handlebars
app.engine('handlebars', handlebars.engine())

//Indicar donde se encontraran la carpeta de esas plantillas
// (como se llama, dirname + la ruta)
app.set('views', __dirname + '/views')

//Indicar el motor de plantilla a utilizar
app.set('view engine', 'handlebars')

// Indicar cuales seran las carpetas donde se almacenaran las paginas donde se manejaran los handlebars
app.use(express.static(__dirname + '/views'))


app.get('/saludo/:nombre', (req, res) => {
    const nombre = req.params.nombre

    // HB buscara dentro de layouts, por defecto, busca al que se llama main. Poniendole false, decimeos que valide todoa lo que tenga adentro
    res.render('layouts/saludo', {nombre, layout:false})
})


//Parte del ejercicio practio con condicionales {{#if}} y {{#each}}
app.get('/productos', (req, res) => {
    res.render('layouts/productos', {productos, layout: false})
})

//Usando routers
app.use('/vistas', vistasRouter)

//Es para que express entienda donde esta buscando los archivos
app.post('/upload', upload.single('archivo'), (req, res) => {
    res.send('El archivo se ha subido correctamente')
})


app.listen(PORT, () => {
    console.log('Se esta escuchando en el puerto', PORT);
    
})