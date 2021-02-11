import './App.scss';
import NavbarComponent from './components/navbar/';
import ButtonComponent from './components/button';
import ItemListContainer from './containers/ItemListContainer';
import ItemList from './components/clase5';
import ItemWithState from './components/clase5';

const App = () => {
  return (
    <>
    <NavbarComponent  />
    <ItemListContainer greeting={'Bienvenido a Petit Charme, pronto encontrarás más productos.'}/>
    <ButtonComponent text={'agregar al carrito'}/>
    {/* <ButtonComponentChildren text={'agregar al carrito'}> ESTE FORMATO SERIA CON UN CHILDREN
      <div>Hola,soy el children del segundo boton</div>
    </ButtonComponentChildren> */}
    <ItemList/>
    </>
  );
}

export default App;