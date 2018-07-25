const opts = {
    descripcion: {
        demand: true,
        alias: 'd'
    },
    completado: {
        alias: 'c',
        default: true
    },
};

const optsBorrar = {
    borrar: {
        demand: true,
        alias: 'b',
        default: true
    }
};

const optsBuscar = {
    buscar: {
        demand: true,
        alias: 's',
        default: true,
        type: 'boolean'
    }
};


const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', opts)
    .command('actualizar', 'Actualiza el estado completado de una tarea', opts)
    .command('borrar', 'Borrar una tarea', optsBorrar)
    .command('buscar', 'buscar una tarea', optsBuscar)
    .help()
    .argv;

module.exports = {
    argv
}