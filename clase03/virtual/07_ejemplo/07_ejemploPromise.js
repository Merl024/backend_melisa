/**
 * FS con Promesas: fs.promise
 *
- fs.promises.writeFile = Para escribir contenido en un archivo. Si el archivo no existe, lo crea. Si existe, lo sobreescribe.
- fs.promises.readFile  = Para obtener el contenido de un archivo.
- fs.promises.appendFile = Para añadir contenido a un archivo. ¡No se sobreescribe!
- fs.promises.unlink= Es el “delete” de los archivos. eliminará todo el archivo, no sólo el contenido.
 */

// const fs = require("fs");
// const dirNamePromesa = "./files4";
// const fileNamePromesa = dirNamePromesa + "/ejemploFSPromesa.txt";

// const fsConPromesas = async (data) => {
//     // creamos el DIR
//     await fs.promises.mkdir(dirNamePromesa, { recursive: true })


//     // Escribimos en el archivo
//     await fs.promises.writeFile(fileNamePromesa, data)

//     // Lectura del archivo
//     let resultado = await fs.promises.readFile(fileNamePromesa, "utf-8");
//     console.log("Leyendo archivo");
//     console.log(resultado);
// }

// fsConPromesas("Hola desde promesas!!")



/**
 * FS con Promesas: Escribiendo objetos completos
 */

//Lectura y escritura de archivos JSON
//Generado package.json desde npm init -y

const info = {
    contenidoStr: "",
    contenidoObj: "",
    size: 0
}

const fs = require("fs")
const fileNameJSON = "./package.json";
const fileInfoJSON = "./info.json";

const fsConPromesasJSON = async () => {

    // Revisando si existe el package JSON
    if (!fs.existsSync(fileNameJSON)) {
        console.error("Archivo no existe favor ejecutar comando: npm init -y ");
        console.log(`El archivo no se puede leer porque no existe: ` + fileNameJSON);
    }

    // obtenemos el JSON Sting
    /* Lo que estamos haciendo aqui es que leemos el package json pero lo convertimos a STRING */
    let jsonString = await fs.promises.readFile(fileNameJSON, "utf-8");
    console.info(`Archivo JSON obtenido desde archivo: ${fileNameJSON} `);
    console.log(jsonString);

    /*Arriba tenemos la constante info con un objeto, en donde le estamos dando a contenidoStr el valor de jsonString*/
    info.contenidoStr = jsonString;
    /*Aqui estamos convirtiendo ese string o texto plano a un OBJETO de JS */
    info.contenidoObj = JSON.parse(jsonString); // Al usar JSON.parse(jsonString), convertimos esa cadena en un objeto JavaScript
    console.log("Objeto info transformado desde arhivo:" + fileNameJSON);
    console.log(info.contenidoObj.name);
    console.log(info);


    // guardamos en formato .json
        /*
        JSON.stringify(datos, null, 2)
        - datos es el objeto que se convertirá en una cadena JSON.
        - null indica que no se está aplicando ninguna función de reemplazo especial.
        - 2 especifica que la cadena JSON resultante debe tener una indentación de 2 espacios.
        */
    await fs.promises.writeFile(fileInfoJSON, JSON.stringify(info, null, 2));

    // Lectura de resuldos, leera lo que esta dentro del info.json
    let resultado = await fs.promises.readFile(fileInfoJSON, "utf-8");
    console.log("Archivo leido resultado:");
    console.log(resultado);

}

fsConPromesasJSON()
