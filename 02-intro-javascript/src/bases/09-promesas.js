import { getHeroeById } from "./bases/08-imp-exp";

// const promesa = new Promise( ( resolve, reject ) => {
//     setTimeout( () => {

//         const heroe = getHeroeById(15);
//         //console.log(getHeroesByOwner('DC'));
//         //console.log(heroe);

//         resolve(heroe);
//         reject( 'No se pudo encontrar el heroe' )
//     }, 1500 );

// } );

// promesa.then(( heroe )=>{
//     console.log('Heroe' , heroe);
// })
// .catch( err => console.error(err) );

const getHeroeByIdAsync = ( id ) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const heroe = getHeroeById( id );
      console.log(heroe);
        if( heroe === undefined ){
            reject( 'No se pudo encontrar el heroe' );
        }
        else{
            resolve( 'Heroe', heroe );
        }
    }, 1500);
  });
};

getHeroeByIdAsync( 1 )
.then( console.log )
.catch( console.warn );

