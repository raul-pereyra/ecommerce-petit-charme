import { useState } from 'react';
import ItemCount from '../../components/itemCount/';

const ItemListContainer = (props) =>{
    const [count, setCount] = useState(1);

    const onAdd =(stock)=>{
        if (count < stock){
            setCount(count+1);
        }else{
            alert ('Nos quedamos sin stock');
        }
    }
    const onSubtract=(stock)=>{
        if(count>0){
            setCount(count-1);
        }else{
            alert ('El minimo de compra es 1');
        }
    }
    return(
        <>
        <div className='card__prod'>
            <p>{'aca va el greeting'}</p>
        </div>
        <ItemCount stock={5} count={count} onAdd={onAdd} onSubtract={onSubtract} />
        </>
    );
    
}

export default ItemListContainer;