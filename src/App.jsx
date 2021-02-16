import './App.scss';
import NavbarComponent from './components/navbar/';
import ButtonComponent from './components/button';
import ItemListContainer from './containers/ItemListContainer';
import ItemCount from './components/itemCount';
import HomeComponent from './components/Clase6';
import Ejercicio from './components/Clase6/ejercicio';


const App = () => {
  return (
    <>
    <NavbarComponent  />
    <ItemListContainer greeting={'Bienvenido a Petit Charme, pronto encontrarás más productos.'}/>
    <ItemCount />
    <ButtonComponent text={'agregar al carrito'}/>
    <HomeComponent />
    <Ejercicio />
    </>
  );
}

export default App;