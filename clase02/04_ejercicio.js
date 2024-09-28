// ejercicio de practica. 
//Realizar una lista nueva, que contenga todos los tipos de productos

const objetos = [{
    manzanas: 3,
    peras: 2,
    carnes: 1,
    jugos: 5,
    dulces: 7}, 
    {
    manzanas: 3,
    sandias: 2,
    huevos: 1,
    jugos: 5,
    panes: 4
}]

let newArray = []
let totalContProductos = 0

objetos.forEach(objeto => {
    const keys = Object.keys(objeto)
    // console.log(keys)

    keys.forEach(key => {
        if(!newArray.includes(key)) newArray.push(key)
    })

    let soloVal = Object.values(objeto)
    let totalProductos = soloVal.reduce((sum, val) => sum + val)
    totalContProductos += totalProductos
})

// console.log(newArray)
// console.log(totalContProductos)


/***************************************/
/*********** HANDS ON LAB **************/
/***************************************/


