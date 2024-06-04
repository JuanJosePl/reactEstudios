console.log("================================");

const personajes = ['Goku', 'Vegeta', 'Trunks'];

const [ , , p3 ] = personajes;

console.log(p3);


const retornaArreglo = () => {
    return ['ABC', 123];
}

const [letras, numeros] = retornaArreglo();
console.log(letras, numeros);

//Tarea
const state = ( valor ) => {
    return [ valor, ()=>{ console.log ('HolaMundo')}]
}

const [ nombre, setNombre]  = state('juan');
console.log(nombre);
setNombre();