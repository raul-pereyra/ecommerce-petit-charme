import './style.css';
const CartWidget = () =>{
    return(
        <>
        <button className='nav__carrito dropbtn'>
            <img src="/images/bolso.svg" alt="" height='30vh'/>
            <div className='list__cart'>
            </div>
        </button> 
        </>
    )
}
export default CartWidget;