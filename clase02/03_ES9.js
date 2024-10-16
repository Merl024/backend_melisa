
// spread operator

const nombres = ['Rita', 'Pedro', ' Miguel', 'Ana', 'Melisa']
console.log("******** Spread Operator *********")
// ... es el spread operator, genera copias de los objetos, evitando complicar agregar mas datos
const copiaNombres = [...nombres, 'Juan'] // se complica la iteracion si se pone solo [nombres]
console.log(copiaNombres)

// Metodo flat

let arreglo = [1, 2, 3,[4, 5, 6,[ 7, 8]], [10]]
let arregloFlat = arreglo.flat(3)

console.log(arregloFlat);


