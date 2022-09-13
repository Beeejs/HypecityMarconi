import './App.css';
import HeaderContent from './components/Header.jsx';
import Navbar from './components/Navbar.jsx';
import ItemListContainer from './components/ItemListContainer.jsx';
import ItemDetailContainer from './components/ItemDetailContainer.jsx';
import CategoryContainer from './components/CategoryContainer';
import Proximamente from './components/Proximamente';
import {BrowserRouter,Routes,Route} from "react-router-dom";



function App() {
  return (
    <BrowserRouter>
      <HeaderContent/>
      <Navbar/>
      <Routes>
        <Route path='/' element={<ItemListContainer/>}/>
        <Route path='/details/:productId/:category-:productName' element={<ItemDetailContainer/>}/>
        <Route path='/category/:categoryId' element={<CategoryContainer/>}/>
        <Route path='/category/:categoryId/Proximamente' element={<Proximamente/>}/>
      </Routes>
    </BrowserRouter>
 
  );
}

export default App;
