import './style.css';

const ItemListContainer = ({greeting}) =>{
    return(
        <>
        <div className='card__prod'>
            <p>{greeting}</p>
        </div>
        </>
    );
}
export default ItemListContainer;