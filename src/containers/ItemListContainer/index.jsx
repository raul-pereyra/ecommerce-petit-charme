import { useEffect, useState } from 'react';
import ItemCount from '../../components/itemCount/';
import ItemList from '../../components/itemList';
import listProduct from '../../database/list-product'

const ItemListContainer = (props) =>{
    const [count, setCount] = useState(1);

    const onAdd =(stock)=>{
        if (count < stock){
            setCount(count+1);
        }else{
            alert ('Nos quedamos sin stock');
        }
    }
    const onSubtract=()=>{
        if(count>1){
            setCount(count-1);
        }else{
            alert ('El minimo de compra es 1');
        }
    }

    const [products, setProducts] = useState([])
    useEffect(()=>{
        const myPromise = new Promise((resolve, reject)=>{
            setTimeout(()=>resolve (listProduct),3000)
        });
        myPromise.then((result)=>setProducts(result));
    },[])



    return(
        <>
        <div className='card__prod'>
            <p>{'aca va el greeting'}</p>
        </div>
        <ItemCount stock={5} count={count} onAdd={onAdd} onSubtract={onSubtract} />
        <ItemList products={products}/>
        </>
    );
    
}

export default ItemListContainer;