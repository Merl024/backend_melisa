// Dinamicidad en JS

async function cargarMate() {
    try {
        const modulo = await import('./operacionesMate.js')
        //Usar las funciones del modulo importado.
        console.log(modulo.resta(4,6))
        console.log(modulo.sumar(4,6))
        console.log(modulo.multiplicar(4,6))
        console.log(modulo.division(4,6))
    } catch (error) {
        console.error('Error en la carga de un modulo', error)
    }
}

//Llamando a la funcion para ejecutar la operacion
cargarMate()