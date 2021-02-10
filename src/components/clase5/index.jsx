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


const ItemList = (props) =>{
    return(
        <>
        <a className="h1">{props.saludo}</a>
        <SupperButton  componenteRandom={CompQNoHaceNada} />
        </>
);
}
export default ItemList;