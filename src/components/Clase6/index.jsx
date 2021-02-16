// Promise Promesa RESOLVE
// const Resultado = new Promise((resolve, reject) =>{// la promesa se utiliza para retrasar acciones por ejemplo cuando consultamos una base de dato o esperamos a una api que nos devuelve cierta informacion
//     setTimeout(()=>{
//         resolve('se ejecuto la funcion');
//         alert('este cartel sale despues de 3 segundos')
//     }, 3000);
// })
// Resultado.then(value=>{//este resultado corresponde a la parte de resolve, delclarado en la primer linea
//     console.log(value); 
// })

import { useEffect } from "react";

// REJECT
// const Resultado = new Promise((resolve, reject) =>{//dentro de la promesa para que nos devuelva resolve y reject puede realizar cualquier accion for each if fuction
//     if (20<10){
//         resolve ('esta bien');
//     }else{
//         reject('Bad resquest 505 - no auth');
//     }
// })
// Resultado.then(value=>{
//     console.log(value); 
// },err => {
//     console.log (err);//este resultado corresponderia a cuando la accion que realizamos nos devuelve reject
// })

// OTRO ERROR NO INCLUIDO EN REJECT
// const Resultado = new Promise((resolve, reject) =>{
//     throw new Error ("Hay otro error que no es el reject");
//     if (20<10){
//         resolve ('esta bien');
//     }else{
//         reject('Bad resquest 505 - no auth');
//     }
// })
// Resultado.then(value=>{
//     console.log(value); 
// },err => {
//     console.log (err);
// }).catch (err =>{//Aca entraria solo si hay algun error de otro tipo que no hayamos puesto en reject
//     console.log ('el error que no es del reject');
// })

// FINALLY
// const Resultado = new Promise((resolve, reject) =>{
//     if (20<10){
//         resolve ('esta bien');
//     }else{
//         reject('Bad resquest 505 - no auth');
//     }
// })
// Resultado.then(value=>{
//     console.log(value); 
// },err => {
//     console.log (err);
// }).finally (()=>{
//     console.log ('Finalizado');//tambien existe en algunos navegadores para saber cuando han terminado tanto los completados como los rechazos
// })


// COMO VER EL RESOLVE DENTRO DE LA PROMESA
const getDataFromDataBase = async () =>{
    return new Promise ((resolve, reject)=>{
        resolve ([{id:233, name: 'zapas nike', precio:3460}])
    });
}
// console.log(getDataFromDataBase());//si vemos esto nos devuelve una promesa pero no el resolve dentro de ella

const HomeComponent= async () => {
    console.log( await getDataFromDataBase());//de esta manera mostramos el resolve dentro de la promesa
}//El await hace esperar codigo hasta que se cargue lo que sigue del await, y despues sigue con el codigo, siempre va dentro de un Async

// const HomeComponent = async()=>{ FORMA CORRECTA, ASI LO ENVIARIAMOS A LA BASE DE DATOS
//     useEffect(()=>{
//         console.log (await getDataFromDataBase);
//         return () => {}
//     }, [])
// }
export default HomeComponent;