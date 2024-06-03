console.log("================================");

// Funciones en JS

const saludar = function saludar(nombre) {
  return `Hola, ${nombre}`;
};

const saludar2 = (nombre) => {
  return `Hola, ${nombre}`;
};

const saludar3 = (nombre) => `Hola, ${nombre}`;

const saludar4 = () => `Hola Mundo`;

// saludar = 30 ;

console.log(saludar("Juan"));

console.log(saludar2("Juan Jose"));

console.log(saludar3("Juan Jose Polo"));

console.log(saludar4());

const getUser = () => ({
  uid: "ABC123",
  username: "El_Papi1502",
});

const user = getUser();
console.log(user);

// Tarea 
// Tranformar a una funcion de flecha
// tiene que retornar un objeto implicito
// pruebas
const getUsuarioActivo = (nombre) => ({
  uid: "ABC567",
  username: nombre
});

const usuarioActivo = getUsuarioActivo('Fernando');
console.log( usuarioActivo );

