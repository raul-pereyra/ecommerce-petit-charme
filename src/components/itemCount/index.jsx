
import ButtonComponent from '../button';

const ItemCount = ({stock, onAdd, count, onSubtract}) => {     
    return (
        <>
            <div className="cont__prod">
                <button className='cont__menos btn__cont' onClick={onSubtract}>-</button>
                <p>{count}</p>
                <button className='cont__mas btn__cont' onClick={()=>{onAdd(stock)}}>+</button>
            </div>
            <ButtonComponent text={'agregar al carrito'}/> 
        </>
    )
}

export default ItemCount

// const nombres = ['futbol', 'basquet', 'tennis','rugby','boxeo','natacion'];
// return(//CON ESTO IMPRIMIMOS EL PANTALLA ESTE ARRAY CON EL MAP
//     <>
//         {nombres.map((element, index)=>{
//             return (<p key={index}>{element}</p>)
//         })}
//     </>
// )}
// export default ItemCount;