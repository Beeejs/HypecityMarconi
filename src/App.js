import './App.css';
import HeaderContent from './components/Header.jsx';
import Navbar from './components/Navbar.jsx';
/* import ItemListContainer from './components/ItemListContainer'; */
import ItemDetailContainer from './components/ItemDetailContainer';


function App() {
  return (
    <div className='App'>
      <HeaderContent/>
      <Navbar/>
     {/*  <ItemListContainer/> */}
     <ItemDetailContainer/>
    </div>      
  );
}

export default App;
