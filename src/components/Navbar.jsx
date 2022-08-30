import React from 'react';
import '../stylesheets/Navbar.css';
import CartWidget from './CartWidget.jsx';

function Navbar(){

  return(
    <nav className='navbar-container'>
      <ul>
        <li><a href='#Inicio'>Inicio</a></li>
        <li><a href='#Productos'>Productos</a></li>
        <li><a href='#Contacto'>Contacto</a></li>
        <CartWidget/>
      </ul>
    </nav>
  );
}

export default Navbar;