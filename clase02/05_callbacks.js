// Callbacks con operaciones matematicas

const sumar = (num1, num2) => num1 + num2
const restar = (num1, num2) => num1 - num2
const multiplicar = (num1, num2) => num1 * num2
const dividir = (num1, num2) => num1 / num2

const realizarOperacion = (num1, num2, callback) => {
    console.log(`Voy a realizar una operacion, puede ser: ${callback}` );

    let result = callback(num1, num2)
    console.log(`El resultado de la operacion realizada es: ${result}`);
        
}

realizarOperacion(4,5, sumar)
realizarOperacion(7,10,restar)
realizarOperacion(10,60, multiplicar)
realizarOperacion(1000, 5, dividir)



// Otros ejemplos
//Usemos un arreglo de prueba:
let valoresOriginales = [1, 2, 3, 4, 5];
console.log(`Valores Originales: ${valoresOriginales}`);

//Lo que esta haciendo aqui, es que pasa por cada uno de los elementos del array y les suma 1
let nuevosValores = valoresOriginales.map(x => x + 1);
console.log(`Los valores sumados mas 1 son: ${nuevosValores}`);

//Otras operaciones
let otrosValores = valoresOriginales.map(x => x * 2); //[2, 4, 6, 8, 10]
console.log(`Los valores multiplicados por 2 son: ${otrosValores}`);
// Por la cantidad de valores que haya, imprimira una 'a'
let masValores = valoresOriginales.map(x => "m");
console.log(masValores);

//Que pasa si declaramos el callback fuera?
const mapCallBack = (valor) => {
    /* % (Módulo): Este operador devuelve el resto de una división entre dos números. 
    En este caso, estamos dividiendo valor entre 2.
    - Si valor % 2 es igual a 0, significa que valor es divisible por 2 sin dejar residuo,
    lo que indica que es un número par.
    - Si valor % 2 es diferente de 0, el número no es divisible por 2 y, por lo tanto, es impar. */
    if (valor % 2 === 0) {
        return valor;
    } else {
        return "No es par!"
    }
};

const evaluarParesMap = valoresOriginales.map(mapCallBack)
console.log(`Revisando si son pares o impares: ${evaluarParesMap.map(x =>' '+ x)}`);


//Recrear un callback de funcion map:
//Usemos un arreglo de prueba:
let arregloDePrueba = [1, 2, 3, 4, 5];

/*  La constante miFuncionMap en el código sirve como una implementación
*   manual de la función map() que viene integrada en JavaScript. Los dos logran
    exactamente lo mismo */
const miFuncionMap = (arreglo, callback) => {
    let nuevoArreglo = [];
    for (let i = 0; i < arreglo.length; i++) {
        let nuevoValor = callback(arreglo[i]);
        nuevoArreglo.push(nuevoValor);
    }
    return nuevoArreglo;    
}

console.log("\ncallbackTest");

const callbackTest = x => x * 10
console.log(`Haciendo el callback test ${arregloDePrueba.map(callbackTest)}`)

//Ejecutemos las dos versiones:
let nuevoArregloPropio = miFuncionMap(arregloDePrueba, x => x * 2);
let nuevoArregloConMap = arregloDePrueba.map(x => x * 2);
console.log(`Haciendo lo mismo, pero poniendo directamente lo parametros ${nuevoArregloPropio}`);
console.log(`Aqui al map le estamos diciendo directamente el callback, no lo llamamos ${nuevoArregloConMap}`);


//Extra: Podemos agregar nuestra funcion al arreglo como tal, usando el prototype del objeto Array:
Array.prototype.miFuncionMap = function (callback) {
    let nuevoArreglo = []
    for (let i = 0; i < this.length; i++) {
        let nuevoValor = callback(this[i]);
        nuevoArreglo.push(nuevoValor);
    }
    return nuevoArreglo;
}
console.log(`Comparando, tenemos el ${arregloDePrueba} y procesado esta el ${arregloDePrueba.miFuncionMap(x => x * 2)}`);