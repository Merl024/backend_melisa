
/* Las promesas tiene dos posibilidades: que se cumpla o no
 * Cuando la promesa se cumple, decimos que se resolvio (resolve)
 * Cuando la promesa NO se cumple, decimos que se rechazo (reject)
 */

const dividirConPromesas = (dividendo, divisor) => {
    return new Promise((resolve, reject) => {
        console.log(`Recibiendo promesa para dividir: ${dividendo} / ${divisor}`);

        //Una division no puede tener division igual a 0, por lo que se rechaza la promesa
        if (divisor === 0){
            reject('No se pudo realizar la division')
        }else{
            resolve(dividendo/divisor)
        }
    })
}

console.log(`Dividiendo usando promesas. Resultado: `);
console.log(dividirConPromesas(1000, 5));
console.log((dividirConPromesas(6,4)));
// console.log(dividirConPromesas(3, 0)); //Tira error porque rechaza cuando hay 0 abajo.

//Para evitar un crasheo se hace lo siguiente. Es para manejar el error. 
dividirConPromesas(3, 0)
    .then(resultado => console.log(resultado))
    .catch(err => console.log(err))
