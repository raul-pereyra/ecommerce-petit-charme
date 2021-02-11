import { useEffect} from "react";

const ItemCount = () => {
    let valorCont = 0;
    let valorMas = () =>{
        valorCont++;
        console.log(valorCont)}
    let valorMenos = () =>{
        valorCont--;
        console.log(valorCont)}
        
        useEffect(() => {
            // Consultas a la Base de Datos y suscripciones como AddEventList
            console.log('se monto el componente');
            return()=>{
                // Desuscripciones de eventos o BD
                console.log('se esta por morir');
            }
        }, [])/*Este es el filtro, si lo dejamos vacio se aplica cuando se monta. Ver hay varios filtros*/
        // Se vuelve a renderizar, validaciones
        console.log('se esta por renderizar');

    return (
        <>
            <div className="cont__prod">
                <button className='cont__menos btn__cont' onClick={valorMenos}>-</button>
                <p>{valorCont}</p>
                <button className='cont__mas btn__cont' onClick={valorMas}>+</button>
            </div>  
        </>
    )
}

export default ItemCount
