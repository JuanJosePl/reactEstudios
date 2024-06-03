

console.log('================================');

const persona = {
    nombre: 'Juan',
    apellido: 'Perez',
    edad: 30,
    direccion: {
        ciudad: 'Medellin',
        zip: 11111
    }
}

// console.table( {persona} );

console.log(  persona );

const persona2 = {...persona};
persona2.apellido = 'Polo';