
/* Components */
import HeaderContent from '../components/Header.jsx';
import Navbar from '../components/Navbar.jsx';
import ItemListContainer from '../components/ItemListContainer.jsx';
import ItemDetailContainer from '../components/ItemDetailContainer.jsx';
import CategoryContainer from '../components/CategoryContainer';
import Proximamente from '../components/Proximamente';
import CarritoContainer from '../components/CarritoContainer';
import GenerateOrder from '../components/GenerateOrder';
import AdminView from '../components/AdminView';
import NotFound from '../components/NotFound';
import Contacto from '../components/Contacto';
import Footer from '../components/Footer';
/* Router */
import {BrowserRouter,Routes,Route} from "react-router-dom";

function Routing (){
  return(

    <BrowserRouter>
      <HeaderContent/>
      <Navbar/>
      <Routes>
        <Route path='/' element={<ItemListContainer/>}/>
        <Route path='/details/:productId/:category-:productName' element={<ItemDetailContainer/>}/>
        <Route path='/category/:categoryId' element={<CategoryContainer/>}/>
        <Route path='/category/:categoryId/Proximamente' element={<Proximamente/>}/>
        <Route path='/contacto' element={<Contacto/>}/>
        <Route path='/carrito' element={<CarritoContainer/>}/>
        <Route path='/finalizar-compra/user' element={<GenerateOrder/>}/>
        <Route path='/admin/1234' element={<AdminView/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>

  )
}

export default Routing