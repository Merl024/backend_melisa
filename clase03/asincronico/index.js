
//>>> DUDAS: por que se pone fs dentro de require
const fs = require('fs')

//1. crear y escribir contenido dentro de un archivo
//fs.writeFileSync(nombre del archivo, el contenido del archivo en comillas)
fs.writeFileSync('ejemplo.txt', 'Aqui va el contenido inicial del archivo')
console.log('El archivo ha sido creado y su contenido escrito')

// 2.leer el contenido del archivo
const contenido = fs.readFileSync('ejemplo.txt', 'utf8') //por que se ocupa utf8
console.log('Este es el contenido del archivo: ',contenido)

//3. Agregar contenido al archivo
fs.appendFileSync('ejemplo.txt', '\nEste sirve para agregar mas contenido')
console.log('Contenido adicional agragado')

/* En caso de querer mostrar el contenido que ha sido agregado se debe volver a usar el readFileSync.
const contenidoActualizado = fs.readFileSync('ejemplo.txt', "utf8")
console.log('Este es el contenido actualizado: ', contenidoActualizado)
*/

//4. Eliminar archivos, en caso que se quiera. 
fs.unlinkSync('ejemplo.txt')
console.log('Tu arcihvo a sido eliminado exitosamente.')