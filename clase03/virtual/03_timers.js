/*SetTimeout
Se ejecuta despues de una cantidad de tiempo y se ejecuta solamente UNA VEZ. 
*/ 

const temporizador = (callback) => {
    setTimeout(() => {
        callback()
        console.log("Tarea finalizada!!");
    }, 4000);
}

let operacion = () => console.log("Realizando operacion con setTimeout()");
console.log("Iniciando tarea con setTimeout!");
temporizador(operacion);

/* SetInterval
Se ejecuta cada que pasa el tiempo hasta que se corta su flujo. 
*/
let contador = () => {
    let contador = 1;
    console.log("Realizando operacion con setInterval!!");
    let timer = setInterval(() => {
        console.log(contador++);
        if (contador > 5) {
            // cortamos el flujo con clearInterval
            clearInterval(timer);
        }
    }, 1000);
    console.log("Tarea finalizada");
}

// console.log("Iniciando tarea con interval!");
// contador();

//Ver minuto 1.56