import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from './components/navbar/';
import ButtonComponent from './components/button';

const App = () => {
  return (
    <>
    <NavbarComponent  />
    <ButtonComponent text={'agregar al carrito'}/>
    {/* <ButtonComponentChildren text={'agregar al carrito'}> ESTE FORMATO SERIA CON UN CHILDREN
      <div>Hola,soy el children del segundo boton</div>
    </ButtonComponentChildren> */}
    </>
  );
}

export default App;
