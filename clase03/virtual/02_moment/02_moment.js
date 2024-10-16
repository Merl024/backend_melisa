/*Realizar un programa que utilice la  dependencia momentjs  (deberá instalarse por npm install).
Debe contar con una variable que almacene la fecha actual (utilizar moment())
Debe contar con una variable que almacene sólo la fecha de tu nacimiento (utilizar moment).
Validar con un if que la variable contenga una fecha válida (utilizar el método isValid());
Finalmente, mostrar por consola cuántos días han pasado desde que naciste hasta el día de hoy. (utilizar el método diff()
Extra: Cambia tu moment a la versión 1.6.0, al no ser la misma versión mayor, nota el cambio al correr el programa.

NOTA: Moment es una libreria de NodeJS. Esta es mucho mas util y facil de usar que el metodo Date.
*/

const moment = require('moment')

fechaActual = moment()

fechaNacimiento = moment('08-10-2005','DD-MM-YYYY')

if(fechaNacimiento.isValid()){
    console.log(`Tu fecha de nacimiento es ${fechaNacimiento} y es valida`)
    //.diff es un metodo de moment que ayuda a hacer la diferencia entre las fechas, y el segundo parametro es 
    // el formato
    const diferenciaDias = fechaActual.diff(fechaNacimiento, 'days')

    console.log(`La diferencia en dias desde que naciste hasta la fecha actual ${fechaActual} es de ${diferenciaDias} dias `);
    
}else{
    console.log('Tu fecha de nacimiento no es valida')
}
