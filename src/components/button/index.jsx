import './style.css';

const ButtonComponent = ({text}) =>{
    const Agregado = () =>{
        alert('Se agrego el producto al carrito')
    }
    return (
        <button className='btn__shop' onClick={Agregado}>{text}</button>
    );
}

export default ButtonComponent;

// const ButtonComponentChildren = ({text, children}) =>{   ESTE SERIA PARA AGREGAR UN CHILDREN
//     return(
//         <div>
//             {children};
//             <button className='btn__shop'>{text}></button>
//         </div>
//     )
// }