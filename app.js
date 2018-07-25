const argv = require('./config/yargs').argv;
const porhacer = require('./por-hacer/por-hacer');
const colors = require('colors');

let comando = argv._[0];

switch (comando) {
    case 'crear':
        let tarea = porhacer.crear(argv.descripcion);
        break;

    case 'listar':
        let listado = porhacer.getListado();

        for (let tarea of listado) {
            console.log('======= Por Hacer ======='.green);
            console.log(tarea.descripcion);
            console.log('Estado', tarea.completado);
            console.log('========================='.green);
        }

        break;

    case 'actualizar':
        let actualizado = porhacer.actualizar(argv.descripcion, argv.completado);
        console.log(actualizado);
        break;

    case 'borrar':
        let borrar = porhacer.borrar(argv.borrar);
        console.log(borrar);
        break;

    case 'buscar':
        let res = porhacer.mostrarTareasCompletado(argv.buscar);
        console.log(res);
        break;

    default:

        console.log('comando no reconocido');
}