import React, {useEffect, useState} from 'react';

const CompQNoHaceNada = () =>{
    return (
        <>
        <h2>Hola!</h2>
        </>
    )
}
const SupperButton = ({componenteRandom}) =>{
    return ( 
        <>
        <button> funcion pasada como parametro</button>
        {componenteRandom()}
        </>
    )
    
 }
const ItemWithState = (props) =>{
    const [carrito, setCarrito]=useState([]);

    useEffect(() => {
        console.log('se monto el componente');
        return()=>{
            console.log('se esta por morir');
        }
    }, [])
    console.log('se esta por renderizar');

    return(
        <>
            <a className='h1'>{props.greeting}</a>
            {/* <button onClick={() => {setCarrito('Soy el nuevo valor, estoy cambiando de estado')}}>Cambiar estado</button> */}
            {/* {console.log(carrito)} */}
            <button onClick={() => {setCarrito([...carrito, { name:'zapas one' }]) }}>Agregar</button>
        </>
    )
}
 

const ItemList = (props) =>{
return(
        <>
        <a className="h1">{props.saludo}</a>
        <SupperButton  componenteRandom={CompQNoHaceNada} />
        <ItemWithState />
        </>
);
}
export default ItemList;
// export default ItemWithState;