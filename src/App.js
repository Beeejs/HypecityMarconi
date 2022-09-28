import './App.css';
import HeaderContent from './components/Header.jsx';
import Navbar from './components/Navbar.jsx';
import ItemListContainer from './components/ItemListContainer.jsx';
import ItemDetailContainer from './components/ItemDetailContainer.jsx';
import CategoryContainer from './components/CategoryContainer';
import Proximamente from './components/Proximamente';
import CarritoContainer from './components/CarritoContainer';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import CartContext from './context/CartContext';
import GenerateOrder from './components/GenerateOrder';
import AdminView from './components/AdminView';
/* import { useEffect } from 'react';
import { guardadoAutomaticoBaseDeDatos } from './services/guardarProductos'; */



function App() {
  //Se ejecuta una sola vez cuando se monta el componente pero al recargar la pagina , se vuelve a cargar los productos en
  //la coleccion de firebase , entoces cada vez que recargamos la pagina estamos agregando los mismos productos duplicados.
/*   useEffect(()=>{
    guardadoAutomaticoBaseDeDatos()
  },[])
 */
  return (
    <CartContext>
      <BrowserRouter>
        <HeaderContent/>
        <Navbar/>
        <Routes>
          <Route path='/' element={<ItemListContainer/>}/>
          <Route path='/details/:productId/:category-:productName' element={<ItemDetailContainer/>}/>
          <Route path='/category/:categoryId' element={<CategoryContainer/>}/>
          <Route path='/category/:categoryId/Proximamente' element={<Proximamente/>}/>
          <Route path='/carrito' element={<CarritoContainer/>}/>
          <Route path='/finalizar-compra/user' element={<GenerateOrder/>}/>
          <Route path='/admin/1234' element={<AdminView/>}/>
        </Routes>
      </BrowserRouter>
    </CartContext>
 
  );
}

export default App;
