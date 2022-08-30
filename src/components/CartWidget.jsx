import React from 'react'
import '../stylesheets/CartWidget.css'

function CartWidget() {
  return (
    <div>
      <li><i className='fa-solid fa-cart-shopping'></i><span className='cantidad-carrito'>0</span></li>
    </div>
  );
}

export default CartWidget