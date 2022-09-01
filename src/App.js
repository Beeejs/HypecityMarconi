import './App.css';
import HeaderContent from './components/Header.jsx';
import ItemListContainer from './components/ItemListContainer';
import Navbar from './components/Navbar.jsx';

function App() {
  return (
    <div className='App'>
        <HeaderContent/>
        <Navbar/>
        <ItemListContainer greeting={"Desafio de clase 5"}/>
    </div>
  );
}

export default App;
