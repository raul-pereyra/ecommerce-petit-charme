import './App.css';
import NavbarComponent from './components/navbar/';
import ButtonComponent from './components/button';
import ItemListContainer from './containers/ItemListContainer';

const App = () => {
  return (
    <>
    <NavbarComponent  />
    <ItemListContainer greeting={'Bienvenido a Petit Charme, pronto encontrarás más productos.'}/>
    <ButtonComponent text={'agregar al carrito'}/>
    {/* <ButtonComponentChildren text={'agregar al carrito'}> ESTE FORMATO SERIA CON UN CHILDREN
      <div>Hola,soy el children del segundo boton</div>
    </ButtonComponentChildren> */}
    </>
  );
}

export default App;
