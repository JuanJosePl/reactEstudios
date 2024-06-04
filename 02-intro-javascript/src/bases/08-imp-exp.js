//import { heroes } from './data/heroes';
//import { heroes } from './data/heroes';
import  heroes, { owner }  from "../data/heroes";

//console.log("================================");

//const getHeroeById1 = (id) => {
//    return heroes.find( ( heroes ) => {
//        if( heroes === id ){
//            return true;
//        }
//        else{
//            return false;
//        }
//    } );
//}

export const getHeroeById = (id) => {
  return heroes.find((heroes) => heroes.id === id);
};

//console.log(getHeroeById(2));

export const getHeroesByOwner = (owner) => {
  return heroes.filter((heroes) => heroes.owner === owner);
};

//console.log(getHeroesByOwner("Marvel"));
