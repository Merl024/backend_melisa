// Porbando ** de ES7
// ** es un operador que sustituye math.pow()
const variablesBase = [1, 2 ,3 ,4, 5, 6, 7, 8, 9, 10]
let exponenciales = variablesBase.map((base, index) => base ** index)

console.log('valores a elevar')
console.log(variablesBase)

console.log('valores elevados')
console.log(exponenciales)

//array includes: corrobora si algun elemento existe en el arreglo
const nombres = [ 'juan', 'camilo', 'maria', 'ana']

let nombreBuscar = 'Juan'
if(nombres.includes(nombreBuscar)){
    console.log(`${nombreBuscar} si existe`)
} else{
    console.log(`${nombreBuscar} no existe`)
}