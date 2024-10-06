//Desafio de codificacion de la clase 02

function duplicacion(numeros){
    //La logica de esta variables es capturar los numeros dupplicados. 
    //map pasara por todo el arreglo y el numero que le demos lo duplicara
    const numerosDuplicados = numeros.map(numero => numero *2)
    
    return numerosDuplicados;
}

const resultado = duplicacion([2, 4, 5, 6, 7])
console.log(resultado)