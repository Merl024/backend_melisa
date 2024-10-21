
const fs = require('fs').promises
const moment = require('moment')

const data = {
    nombre: "Melisa",
    edad: 19, 
    ciudad: "El Salvador",
    fecha: moment().format("DD-MM-YYYY HH:mm:ss")
}

const nameArchivo = 'data.json'

const writeArchivo = async(nameArchivo, data)=>{
    try {
        //Como el objeto llega en formato de OBJETO se parsea a texto plano (JSON)
        const dataJson = JSON.stringify(data, null, 2)
        //Una vez transformado ya se puede escribir en el Json
        await fs.writeFile(nameArchivo, dataJson)
        console.log('Archivo creado y contenido escrito exitosamente');
        
    } catch (error) {
        console.log(`Hubo un error escribiendo el contenido en el archivo: ${error}`);
    }
}
const readArchivo = async(nameArchivo)=>{
    try {
        const data = await fs.readFile(nameArchivo, "utf-8")
        //Aqui se esta levantando la informacion en forma de texto plano, por lo que se tiene que transformar a objeto
        const dataJson = JSON.parse(data)
        console.log(`El contenido de tu archivo es \n`, dataJson);
    } catch (error) {
        console.log(`Hubo problemas para leer tu archivo: ${error}`)
    }
}

const main = async()=>{
    //metodos
    //No se sabe cuando se va a tardar en la ejecucion de los archivos, por eso se le pone await
    await writeArchivo(nameArchivo, data)
    await readArchivo(nameArchivo)
}

main()