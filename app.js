const argv = require('./config/yargs').argv;
const colors = require('colors');

const { crearArchivo } = require('./multiplicar/Multiplicar');
const { listarTabla } = require('./multiplicar/Multiplicar');

// hay 3 tipos de require los nativos de node
// los de terceros (hay que instalarlos)
// y los que nosotros hacemos


let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);

        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${colors.green(archivo)}`))
            .catch(e => console.log(e));
        break;

    default:
        console.log('Comando no reconocido');

}

// console.log(argv);


// let parametro = argv[2];
// let base = parametro.split('=')[1];






// crearArchivo(base)
//     .then(archivo => console.log(`Archivo creado: ${archivo}`))
//     .catch(e => console.log(e));