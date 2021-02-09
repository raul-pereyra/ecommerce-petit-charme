import CartWidget from '../../containers/CartWidget';
import './style.css';
const NavbarComponent = () =>{
    return(
        <>
        <nav className='nav__primary'>
            <div className="dropdown">
                <button className="dropbtn">
                    <div className='line__menu'></div>
                    <div className='line__menu'></div>
                    <div className='line__menu'></div>
                </button>
                <div className="dropdown-content">
                    <div className='nav__bigmenu'>
                        <a href="#">Baberos</a>
                        <a href="#">Mantas</a>
                        <a href="#">Portachupetes</a>
                        <a href="#">Toallas</a>
                        <a href="#">Muerdecitos</a>
                    </div>
                </div>
            </div>
            <a className='nav__go__home' href="/index.html">Petit Charme</a>
            <div>
            <CartWidget/>               
            </div>
        </nav>
        
        </>
    );
}
export default NavbarComponent;