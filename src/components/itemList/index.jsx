const ItemList = ({products}) => {
    return (
        <div>
            <ul>
                {products.map((product)=>{
                    return <li key={product.id}>{product.name}</li>;
                })} 
           </ul>
        </div>
    )
}

export default ItemList
