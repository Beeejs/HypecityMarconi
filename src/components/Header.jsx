import React , {useContext}from 'react';
import '../stylesheets/Header.css';
import logo from '../img/hypecity-logo.jpeg';
import { Link } from 'react-router-dom';
import { Search } from '../context/SearchContext';


function Header() {

  const {functionSearch} = useContext(Search)

  return (
    <div className='header-container'>

      <div className='buscador'>
        <input type='text' placeholder='Buscar...' className='buscador-input' onKeyUp={functionSearch}/>
        <div className='icon-search'>
          <i className='fa-solid fa-magnifying-glass'></i>
        </div>
      </div>

      <div className='logo'>
        <Link to='/'><img src={logo} alt='Logo Hypecity' /></Link>
      </div>

      <div className='info-header'>
        <p><i className='fa-solid fa-phone'></i>1128852984</p>
        <p><i className='fa-solid fa-at'></i>hypecity00@gmail.com</p>
      </div>

    </div>
    
  )
}

export default Header;