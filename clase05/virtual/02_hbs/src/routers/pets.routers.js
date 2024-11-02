import { Router } from "express";
import { uploader } from "../utils.js";

const router = Router()

let pets = []

//Endpoints
router.get('/', (req, res) =>{
    res.send(pets)
})
            
router.post('/', (req, res) => {
    //Capturamos lo que llega del json
    const pet = req.body

    if (!pet.name || !pet.especie){
        console.error('Mascota no valido')
        res.status(404).send({ status: "Error", msg: "Todos los campos son obligatorios"})
    }

    //Creamos al usuario
    pet.id = pets.length + 1
    pets.push(pet)

    res.send({ status: 'Success', msg: "Mascota creado exitosamente", data: pet})
})


////////////////////////////////
/////////// MULTER /////////////
////////////////////////////////

// Cuando se mande la peticion pasara por el endpoint resolvera el middle ware y luego lo que esta en la funcion
// El middleware es como el guardia que dice si deja pasar la peticion o no

//En el segundo parametro el metodo que va a la par del nombre, es cuantos archivos queremos subir.
router.post('/profile', uploader.single('file'), (req, res) => {
    if(!req.file){
        return res.status(400).send('No se adjunto el archivo')
    }
    console.log((req.file));
    
    // persistimos la data
    let pet = req.body
    pet.id = pets.length + 1
    // le estamos dando una nueva propiedad. La cual es la ruta de la ubicacion de donde se guardo el archivo.
    pet.image = req.file.path

    if (!pet.name || !pet.especie){
        console.error('Mascota no valido')
        res.status(404).send({ status: "Error", msg: "Todos los campos son obligatorios"})
    }else{
        pets.push(pet)
        res.send({ status: 'Success', msg: "Imagen de mascota creado exitosamente", data: pet})
    }

})

export default router