// FS con callbacks y promesas. 
/**Se pone promises al final porque en el codigo se ocupa un await y try-catch*/
const fs = require('fs').promises

//Haciendo archivos con node por medio de las promesas asincronas 
async function escribirArchivo() {
    const content = 'Contenido que quiero dentro de mi archivo'
    try {
        await fs.writeFile('archivo.txt', content)
        console.log('Tu archivo ha sido creado exitosamente')
    } catch (error) {
        console.error('Hubo problemas al crear tu archivo :(', error)
    }
}

async function updateArchivo() {
    const contentUpdate = '\nActualizando la informacion o contenido de mi archivo'
    try {
        await fs.appendFile('archivo.txt', contentUpdate)
        console.log('Tu archivo ha sido actualizado exitosamente')

        //Leer el archivo el actualizado
        const archivo =  await fs.readFile('archivo.txt', 'utf8')
        console.log('El contenido completo de tu archivo es: ', archivo)

    } catch (error) {
        console.error('Hubo problemas al actualizar y/o leer tu archivo :(', error)
    }
}

async function deleteArchivo() {
    try {
        await fs.unlink('archivo.txt')
        console.log('Tu archivo ha sido eliminado exitosamente')
    } catch (error) {
        console.error('Hubo problemas al eliminar tu archivo :(', error)
    }
}

escribirArchivo()
// updateArchivo()
// deleteArchivo()

