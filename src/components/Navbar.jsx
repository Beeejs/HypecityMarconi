import React from 'react';
import '../stylesheets/Navbar.css';
import {Link} from "react-router-dom";

function Navbar(){
    
  return(
    <nav className='navbar-container'>
      <ul>
        <li><Link to='/'>Inicio</Link></li>
        <li className='list-products'>
          <Link to='/'>Productos</Link>
          <i className='fa-solid fa-angle-down'></i>
          <ul className='nav-categorys'>
            <li>
              <Link to='/category/Hoodies'>
                  Hoodies
              </Link>
            </li>
            <li>
              <Link to='/category/Remeras'>
                  Remeras
              </Link>
            </li>
            <li>
              <Link to='/category/Pantalones/Proximamente'>
                  Pantalones
              </Link>
            </li>
            <li>
              <Link to='/category/Shorts/Proximamente'>
                  Shorts
              </Link>
            </li>
          </ul>
        </li>
        <li><Link to='/'>Contacto</Link></li>
        <li><i className='fa-solid fa-cart-shopping'></i><span className='cantidad-carrito'>0</span></li>
      </ul>
    </nav>
  );
}

export default Navbar;