//Simulando el retardo de tomar los datos de una base
const dividirConPromesas = (dividendo, divisor) => {
    return new Promise((resolve, reject) => {
        console.log(`Recibiendo promesa para dividir: ${dividendo} / ${divisor}`);

        setTimeout(()=> {
            if (divisor === 0){
                reject('No se pudo realizar la division')
            }else{
                resolve(dividendo/divisor)
            }
        }, 2000)

    })
}



const dividirConPromesas02 = (dividendo, divisor) => {
    return new Promise((resolve, reject) => {
        console.log(`Recibiendo promesa para dividir: ${dividendo} / ${divisor}`);

        if (divisor === 0){
            reject('No se pudo realizar la division')
        }else{
            resolve(dividendo/divisor)
        }
    })
}

//Ponerlo en un contexto asincronico

const funcionAsincronica = async(a, b)=>{
    try {
        // Todo va bien
        let result = await dividirConPromesas(a, b)
        let resultado = await dividirConPromesas02(a, result)
        console.log(`Tus datos son ${a} y ${b}`);
        console.log(`Estos son tus dos resultador: ${result} y ${resultado}`);
        
    } catch (error) {
        // Por si algo falla
    }
}

const test = async(a, b)=> {
    try {
        console.log(`Otra funcion asincronica`);
        
        
    } catch (error) {
        console.log(`No se pudo cumplir tu promesa: ${error}`);
        
    }
}

funcionAsincronica(45, 4)
test(2, 3)