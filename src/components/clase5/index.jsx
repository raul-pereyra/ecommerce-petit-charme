const CompQNoHaceNada = () =>{
    return 
    <h2>Hola!</h2>
}
const SupperButton = () =>{
    return  <>
    <button> funcion pasada como parametro</button>
    </>
    
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