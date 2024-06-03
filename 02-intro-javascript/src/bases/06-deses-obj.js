console.log("================================");

// Desectructuracion 
// asignacion Desecturacion 

const persona = {
    nombre: 'Juan',
    edad: 20,
    clave: '123',
}

// const {nombre, edad, clave} = persona;

// console.log(nombre);
// console.log(edad);
// console.log(clave);

const Context = ( { clave, nombre, edad, rango = 'admin' } ) => {
    // console.log( nombre, clave, edad, rango);

    return {
        nombreClave: clave,
        anios: edad,
        latlng:{
            lat: 14.4324,
            lng: -14.4324,
        }
    }
}

// const User = Context( persona );

// console.log(User);

const { nombreClave, anios, latlng:{ lat, lng } } = Context( persona );

console.log(nombreClave);
console.log(anios);
console.log(lat, lng);



