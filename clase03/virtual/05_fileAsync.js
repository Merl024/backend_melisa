/**
 * Fs Asincrono:
 * 
- writeFile = Para escribir contenido en un archivo. Si el archivo no existe, lo crea. Si existe, lo sobreescribe.
- readFile = Para obtener el contenido de un archivo. Como pide información, su callback es de la forma: (error, resultado)=>
- appendFile = Para añadir contenido a un archivo. ¡No se sobreescribe!
- unlink = Es el “delete” de los archivos. eliminará todo el archivo, no sólo el contenido.
*/

/* Aqui no se ocupa un .promises al final porque no se va a ocupar un await*/
const { error, log } = require('console')
const fs = require('fs')

const dirNameAsync = './file2'
const fileNameAsync = dirNameAsync + '/callback.txt'

let data = "Este es un ejemplo usando los callbacks"

/**Este ejercicio que se ve a continuacion, es un claro ejemplo de callback hell
 * Cuando empieza a crearse como una piramide con varios callbacks es que se considera un callback hell
 * Por ello se replantea la estructura y se crea uno con promesas
 */
//El mkdir sirve para CREAR el archivo, mientras que el recursive: true viene de la documentacion.
fs.mkdir(dirNameAsync, { recursive: true }, (error)=> {
    //Si tira error, entonces RETORNA (eso quiere decir el throw) un error. 
    if (error) throw Error('No se pudo crear la direccion')

    //Escritura
    fs.writeFile(fileNameAsync, data, (error)=> {
        if (error) throw Error('Error al agregar contenido')
    })

    //Lectura
    fs.readFile(fileNameAsync, "utf-8", (error, contenido)=>{
        if(error) throw Error('No se pudo leer el contenido')
        else{console.log(`El contenido del archivo es: ${contenido}`);}

        fs.appendFile(fileNameAsync, "Aqui va mas contenido", (error)=>{
            if (error) throw Error('No se pudo agregar nuevo contenido en el archivo')
            
            fs.readFile(fileNameAsync, "utf-8", (error, contenido)=>{
                if(error) throw Error('No se pudo leer el contenido actualizado')
                console.log(`El contenido actualizado del archivo es: ${contenido}`)
            })
        }) 
    })




})