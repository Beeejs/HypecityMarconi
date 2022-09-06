import './App.css';
import HeaderContent from './components/Header.jsx';
import Item from './components/Item';
import ItemListContainer from './components/ItemListContainer';
import Navbar from './components/Navbar.jsx';

function App() {
  return (
    <div className='App'>
        <HeaderContent/>
        <Navbar/>
        <ItemListContainer/>
    </div>
  );
}

export default App;
