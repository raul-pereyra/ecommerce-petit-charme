const Item = ({product})=>{
    return (
        <div className='card'>
            <h4>{product.name}</h4>
            <p>Precio: {product.price}</p>
            <p>Stock: {product.stock}</p>
        </div>
    )
}

export default Item;
