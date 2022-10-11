import React from 'react';
import '../stylesheets/Navbar.css';
import {Link} from "react-router-dom";
import CartWidget from './CartWidget';
import BtnNavbar from './BtnNavBootstrap';

function Navbar(){

  return(
    <>
      <div className='btn-navbar-mobile'>
        <CartWidget/>
        <BtnNavbar/>
      </div>
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
          <li><Link to='/contacto'>Contacto</Link></li>
          <CartWidget/>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;