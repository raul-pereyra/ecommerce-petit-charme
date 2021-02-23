import './App.scss';
import NavbarComponent from './components/navbar/';
import ItemListContainer from './containers/ItemListContainer';



const App = () => {
  return (
    <>
    <NavbarComponent  />
    <ItemListContainer greeting={'Bienvenido a Petit Charme, pronto encontrarás más productos.'}/>

    </>
  );
}

export default App;