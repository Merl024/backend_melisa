/**
 * Fs Sincrono:
 * 
    - writeFileSync = Para escribir contenido en un archivo. Si el archivo no existe, lo crea. Si existe, lo sobreescribe.
    - readFileSync = Para obtener el contenido de un archivo.
    - appendFileSync = Para añadir contenido a un archivo. ¡No se sobreescribe!
    - unlinkSync = Es el “delete” de los archivos. eliminará todo el archivo, no sólo el contenido.
    - existsSync = Corrobora que un archivo exista!
*/

//Sabemos que estamos trabajando con un archivo sincronico cuando al final del fs y su metodo termina en Sync
const fs = require('fs')

//Creando el directorio o carpeta donde se va a almacenar el archivo
const dirName = './files'

//Aqui le agregamos a la carpeta ya hecha el archivo con el contenido
const nameFile = dirName + '/ejemplo.txt'

console.log(`Generando escritura de archivos Sync con fileName: ${nameFile}`);
//Lo que estamos preguntando es SI el directorio NO existe
if(!fs.existsSync(dirName)){
    //Crea el directorio
    fs.mkdirSync(dirName)
    //Dentro de este, crea el siguiente archivo y agrega este contenido
    fs.writeFileSync(nameFile, 'Hola coders, estoy en un texto plano')
}

//Aqui primero preguntamos, Si el directorio SI existe
if (fs.existsSync(nameFile)) {
    //Manda donde esta la ruta del archivo 
    console.log("Archivo creado con exito en la ruta: " + fs.realpathSync(nameFile));
    //Como estamos trabajando de forma asincrona, siempre se le pasa la codificacion utf-8
    let contenido = fs.readFileSync(nameFile, "utf-8");

    console.log(`Leyendo contenido del archivo: "${contenido}"`);
    

    // Agregar mas contenido
    fs.appendFileSync(nameFile, "\nAqui va el contenido adicional ");
    contenido = fs.readFileSync(nameFile, "utf-8");
    console.log(`Actualizando contenido del archivo: "${contenido}"`);


    // // Borrar
    // console.log("Borrando archivo..");
    // fs.unlinkSync(nameFile);

    // Si sucede algun error al borrar
    /* Esta estructura de abajo es como un if - else. Si existe entonces 
    tirara el primer console.log. Sino borra el archivo y manda ese mensane*/
    fs.existsSync(nameFile) ? console.log("El archivo no se pudo borrar") : console.log("Archivo borrado");

} else {
    console.error("Error creando el archivo.");
}