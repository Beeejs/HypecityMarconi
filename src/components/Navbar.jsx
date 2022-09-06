import React from 'react';
import '../stylesheets/Navbar.css';

function Navbar(){

  return(
    <nav className='navbar-container'>
      <ul>
        <li><a href='#Inicio'>Inicio</a></li>
        <li><a href='#Productos'>Productos</a></li>
        <li><a href='#Contacto'>Contacto</a></li>
        <li><i className='fa-solid fa-cart-shopping'></i><span className='cantidad-carrito'>0</span></li>
      </ul>
    </nav>
  );
}

export default Navbar;