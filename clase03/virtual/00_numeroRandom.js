/*
Crear un proyecto de node que genere 10000 números aleatorios en un rango de 1 a 20. 
Indicar por consola la finalización de esta operación con un mensaje.

Mediante el uso de Promesas, crear un objeto cuyas claves sean los números salidos y 
el valor asociado a cada clave será la cantidad de veces que salió dicho número. 
Representar por consola los resultados.

Nota: Considerar que esta operación debe realizarse de forma asíncrona.

*/
// 01_ Necesito  math.random ---> Generar nummero random
// 02_ for  para generar 10000 iteraciones
/* usar Promesas
salida esperada::
        let obj = {
            1: 2,
            3: 2,
            4: 1,
           ...
            
        }

        obj[1] = ++ 
*/

//Generando los metodos
const generarNumerosRandom = () => {
    return new Promise ((resolve, reject) => {
        try {
            const numeros = []
            for (let i = 0; i < 10000; i++){
                numeros.push(Math.floor(Math.random() * 20) + 1)
            }
            resolve(numeros)
        } catch (error) {
            reject(error)   
        }
    })
}

const contarFrecuencia = (numeros) => {
    return new Promise((resolve, reject) => {
        try {
            const frecuencia = {}
            numeros.forEach((numero) => {
                if(!frecuencia[numero]){
                    frecuencia[numero] = 1
                }else{
                    frecuencia[numero]++
                }
            });
            resolve(frecuencia)
        } catch (error) {
            reject(error)
        }
    })
}

const main = async () => {
    try {    
        const numeros = await generarNumerosRandom()

        //Cuantas veces se gnero un mismo numero
        const frecuencia = await contarFrecuencia(numeros)

        //Mostrar los resultados
        console.log(`La frecuencia de los numeros es: `, frecuencia);
        console.table(frecuencia)
    
    } catch (error) {
        console.log(`Eror: ${error}`)
        
    }

}

main()