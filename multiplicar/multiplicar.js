// Requireds
const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite) => {
    console.log('*************'.red);
    console.log(`Tabla del ${base}`.blue);
    console.log('*************'.red);
    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base * i}`);
    }
}

// Crear archivo con limite
let crearArchivo = (base, limite) => {

    return new Promise((resolve, reject) => {

        // Comprobamos antes que sea un número
        if (!Number(base)) {
            reject(`La base introducida ${base} no es un número`);
            return; // Para que no siga la ejecución
        }
        let data = '';
        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i} \n `;
        }

        fs.writeFile(`tablas/tabla-multiplicar-${base}-limite-${limite}.txt`, data, (err) => {
            if (err) {
                reject(err)
            } else {
                resolve(`tabla-multiplicar-${base}.txt`)
            }
        });
    });
}

// let crearArchivo = (base) => {

//     return new Promise((resolve, reject) => {

//         // Comprobamos antes que sea un número
//         if (!Number(base)) {
//             reject(`La base introducida ${base} no es un número`);
//             return; // Para que no siga la ejecución
//         }
//         let data = '';
//         for (let i = 1; i <= 10; i++) {
//             data += `${base} * ${i} = ${base * i} \n `;
//         }

//         fs.writeFile(`tablas/tabla-multiplicar-${base}.txt`, data, (err) => {
//             if (err) {
//                 reject(err)
//             } else {
//                 resolve(`tabla-multiplicar-${base}.txt`)
//             }
//         });
//     });
// }

// Para exportar lo que necesitemos en otras carpetas o paquetes
// module es un objeto que está disponible en toda la aplicación
module.exports = {
        crearArchivo,
        listarTabla
        // crearArchivo: crearArchivo Otra forma de hacerlo
    }
    // Otra forma de hacerlo sería
    // module.exports.crearArchivo = (base) etc...