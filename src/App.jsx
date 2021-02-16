import './App.scss';
import NavbarComponent from './components/navbar/';
import ButtonComponent from './components/button';
import ItemListContainer from './containers/ItemListContainer';



const App = () => {
  return (
    <>
    <NavbarComponent  />
    <ItemListContainer greeting={'Bienvenido a Petit Charme, pronto encontrarás más productos.'}/>
    <ButtonComponent text={'agregar al carrito'}/>
    </>
  );
}

export default App;