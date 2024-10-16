// Practicando ES8

const impuestos = {
    impuesto1: 345,
    impuesto2: 345,
    impuesto3: 456,
    impuesto4: 567
}

let parLlevarValor = Object.entries(impuestos)
console.log(parLlevarValor)

let soloPropiedades = Object.keys(impuestos)
console.log(soloPropiedades)

let soloValores = Object.values(impuestos)
console.log(soloValores)

//podemos calcular el total de los impuestos

let impuestoTotal = soloValores.reduce((valorAcumulado, valorActual) => {
    console.log(`Valor inicial ${valorActual}. Y tu valor acumulado: ${valorAcumulado}`);

        return valorActual + valorAcumulado;
})

console.log(`Total de impuestos: ${impuestoTotal}`)

const user ={
    nombre:'Melisa',
    edad: 18
}

// user.apellido = 'Rivas' // Esto no se encuentra dentro del objeto

console.log(user.nombre)
console.log(user.apellido) //este tipo de undefined es lo que rompe el frontend

// el ?? es el operador nullish, el cual retornada el valor del lado derecho cuando 
// el valor del lado izquierdo sea null o undefined
const apellido = user.apellido ?? 'No especificado'
console.log(apellido)