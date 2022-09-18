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
            <Link to='/category/Hoodies'>
              <li>
                    Hoodies
              </li>
            </Link>
            <Link to='/category/Remeras'>
              <li>
                  Remeras
              </li>
            </Link>
            <Link to='/category/Pantalones/Proximamente'>
              <li>
                  Pantalones
              </li>
            </Link>
            <Link to='/category/Shorts/Proximamente'>
              <li>
                  Shorts
              </li>
            </Link>
          </ul>
        </li>
        <li><Link to='/'>Contacto</Link></li>
        <li><i className='fa-solid fa-cart-shopping'></i><span className='cantidad-carrito'>0</span></li>
      </ul>
    </nav>
  );
}

export default Navbar;