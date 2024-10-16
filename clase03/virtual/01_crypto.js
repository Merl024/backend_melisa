const crypto = require('crypto')
const fs = require('fs')

class UsersManager{
    //Es un array vacio ESTATICO
    static users = []

    constructor(){
        //Preguntamos si el archivo existe el archivo, si si, se lee. 
        if (fs.existsSync('usuarios.json')){
            
            //Cuando se lee un archivo del fs se lee en formato plano. Es similar a un objeto, pero no lo es. 
            //Un objeto es manipulable, un json no, por lo mismo que es texto plano
            const data = fs.readFileSync("usuarios.json", 'utf8')

            //con el JSON.parse lo transforma en un objeto
            UsersManager.users = JSON.parse(data)
        }
    }

    //Metodo para crear usuario
    crearUsuario({nombre, apellido, nombreUsuario, contrasena}){
        //Hashear la contraseña usando SHA-256
        //Para lo que sirve hash es para ENCRIPTAR las contraseñas, no importa que se escriba en ella, siempre las encriptara.
        const hash = crypto.createHash('sha256').update(contrasena).digest('hex')

        //Creando nuevo usuario
        const nuevoUser = {
            nombre,
            apellido,
            nombreUsuario,
            contrasena: hash // Se guarda la contraseña haseada
        }

        //Como usuario es una variable ESTATICA, no se le puede hacer directamente el push
        //Sino que hay que llamar primero a la clase y LUEGO hacer el usuario.push()
        UsersManager.users.push(nuevoUser)
        
        //Se guarda en un archivo JSON para persistencia
        //Al hacer un stringify estamos haciendo lo contrario, lo estamos convirtiendo en un texto PLANO
        //El null y el 2 es para darle formato y que se vea bonito
        fs.writeFileSync('usuarios.json', JSON.stringify(UsersManager.users, null, 2))
        console.log('Usuario creado y guardado correctamente')   
    }

    //Metodo para mostrar usuario
    showUser(){
        console.log('Lista de usuarios: ')
        UsersManager.users.forEach((users, index) => {
        //Aqui se esta manipulando el array que esta local, no del json, por lo que SI es manipulable
        console.log(`${index + 1}. Nombre: ${users.nombre} Apellido: ${users.apellido}. Nombre de usuario: ${users.nombreUsuario}`)            
        })
    }

    //Validar el usuario, es como un login 
    validarUsuario(nombreUsuario, contrasena) {
        // Buscar el usuario en el arreglo estático
        const usuario = UsersManager.users.find(user => user.nombreUsuario === nombreUsuario);

        if (!usuario) {
            console.log('Error: Usuario no encontrado.');
            return;
        }
        
        // Hashear la contraseña ingresada y compararla con la almacenada
        const hashIngresado = crypto.createHash('sha256').update(contrasena).digest('hex');

        if (usuario.contrasena === hashIngresado) {
            console.log('Has ingresado exitosamente');
        }else {
            console.log('Error: Contraseña incorrecta.');
        }


    }
}

const usersManager = new UsersManager() //Siempre que se instancia o llama a la clase, se ejecuta el constructor

usersManager.crearUsuario(
    {
    "nombre": "Melisa",
    "apellido":"Rivas",
    "nombreUsuario": "melude",
    "contrasena": "Cody2000"
    }
)

usersManager.crearUsuario(
    {
    "nombre": "Gerardo",
    "apellido":"Mendoza",
    "nombreUsuario": "mendo",
    "contrasena": "holaolahola"
    }
)

usersManager.showUser()

usersManager.validarUsuario('mendo', 'holaholahola')
usersManager.validarUsuario('mendo', 'holaolahola')
usersManager.validarUsuario('melude', 'Cody2000')
usersManager.validarUsuario('melo', 'Cody2000')
