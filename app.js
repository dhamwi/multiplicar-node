// Requireds
// const fs = require('express');
// const fs = require('./fs');

const argv = require('./config/yargs').argv;
const colors = require('colors/safe');

// Para importar otro archivo, usamos la destructuración
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar.js')

// console.log(argv);
let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log('Archivo creado: ', colors.red(archivo)))
            .catch(error => console.log(error));
        break;
    default:
        console.log('Comando no reconocido ', comando);
}

// let parametro = process.argv[2];
// let base = parametro.split('=')[1];
// console.log(base);