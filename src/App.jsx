import './App.scss';
import NavbarComponent from './components/navbar/';
import ButtonComponent from './components/button';
import ItemListContainer from './containers/ItemListContainer';
import ItemCount from './components/itemCount';

const App = () => {
  return (
    <>
    <NavbarComponent  />
    <ItemListContainer greeting={'Bienvenido a Petit Charme, pronto encontrarás más productos.'}/>
    <ItemCount />
    <ButtonComponent text={'agregar al carrito'}/>
    </>
  );
}

export default App;