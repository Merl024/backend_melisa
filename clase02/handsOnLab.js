
/************************************
*********** Hands on Lab ************
************************************/

class TicketManager {
    // Variable privada precioBaseDeGanancia
    //El # significa que es una variable privada
    #precioBaseDeGanancia = 0.15;

    constructor() {
        this.eventos = [];
        this.idCounter = 1; // Para manejar el id autoincrementable
    }

    // Método para obtener los eventos guardados
    getEventos() {
        return this.eventos;
    }

    // Método para agregar un nuevo evento
    agregarEvento(nombre, lugar, precio, capacidad = 50, fecha = new Date()) {
        const nuevoEvento = {
            id: this.idCounter++, // Asigna un id autoincrementable
            nombre,
            lugar,
            precio: precio + (precio * this.#precioBaseDeGanancia), // Agrega un 15% al precio original
            capacidad,
            fecha,
            participantes: [] // Inicia con un arreglo vacío de participantes
        }

        this.eventos.push(nuevoEvento);
        return nuevoEvento; // Retorna el evento para verificar que fue creado
    }

    // Método para agregar un usuario a un evento
    agregarUsuario(idEvento, idUsuario) {
        const evento = this.eventos.find(elemento => elemento.id === idEvento);
        
        //Para verificar si esta el id del evento en el objeto
        if (!evento) {
            return `Error: El evento con id ${idEvento} no existe.`;
        }

        // Para ver si ya se incluye el id del usuario, si no, se agrega.
        if (evento.participantes.includes(idUsuario)) {
            return `Error: El usuario con id ${idUsuario} ya está registrado en este evento.`;
        }else{
            evento.participantes.push(idUsuario);
            return `Usuario con id ${idUsuario} añadido al evento con id ${idEvento}.`;
        }       
    }

    // Método para poner un evento en gira
    ponerEventoEnGira(idEvento, nuevaLocalidad, nuevaFecha) {
        const eventoExistente = this.eventos.find(e => e.id === idEvento);

        if (!eventoExistente) {
            return `Error: El evento con id ${idEvento} no existe.`;
        }else {
            const nuevoEvento = {
            ...eventoExistente, // Copia las propiedades del evento existente
            id: this.idCounter++, // Nuevo id
            lugar: nuevaLocalidad, // Nueva localidad
            fecha: nuevaFecha, // Nueva fecha
            participantes: [] // Arreglo de participantes vacío
            };
            this.eventos.push(nuevoEvento);
            return nuevoEvento; // Retorna el nuevo evento creado
        }
    }
}

// Ejemplo de uso
const manager = new TicketManager();


// Agregar eventos
manager.agregarEvento('Concierto de Rock', 'Madrid', 100);
manager.agregarEvento('Conferencia Tech', 'Barcelona', 50);
manager.agregarEvento('Concierto de Humbe', 'BeSport', 75, 150, new Date('2024-11-02') )

// Ver eventos
console.log(manager.getEventos());

// Agregar un usuario a un evento
console.log(manager.agregarUsuario(1, 101));
console.log(manager.agregarUsuario(1, 102));
console.log(manager.agregarUsuario(3, 200))

// Poner evento en gira
manager.ponerEventoEnGira(1, 'Valencia', new Date('2024-12-01'))

// Ver eventos después de la gira
console.log(manager.getEventos());
