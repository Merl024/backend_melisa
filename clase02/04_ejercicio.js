// ejercicio de practica. 
//Realizar una lista nueva, que contenga todos los tipos de productos

const frutas = [{
    manzanas: 3,
    peras: 2,
    carnes: 1,
    jugos: 5,
    dulces: 7}, 
    {
    manzanas: 1,
    sandias: 7,
    huevos: 9,
    jugos: 10,
    panes: 4
}]

let newArray = []
let totalContProductos = 0

frutas.forEach(fruta => {
    const keys = Object.keys(fruta)
    console.log(keys)

    /* Si el key no existe en newArray, lo agregara con el includes. Si ya existe no lo pondra
    De nuevo*/
    keys.forEach(key => {
        if(!newArray.includes(key)) newArray.push(key)
    })

    let soloVal = Object.values(fruta)
    let totalProductos = soloVal.reduce((sum, val) => sum + val)
    totalContProductos += totalProductos
})

console.log(newArray)
console.log(totalContProductos)
