// Promise Promesa
const Resultado = new Promise((resolve, reject) =>{//
    setTimeout(()=>{
        resolve('se ejecuto la funcion');
    }, 3000);
})
Resultado.then(e=>{
    console.log(e); 
})
