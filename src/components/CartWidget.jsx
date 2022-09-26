import React, { useContext } from 'react'
import { Cart } from '../context/CartContext'
import {Link} from 'react-router-dom'

function CartWidget () {

  const {cart} = useContext(Cart)

  return (
    <li><Link to='/carrito'><i className='fa-solid fa-cart-shopping'></i><span className='cantidad-carrito'>{cart.length}</span></Link></li>
  )
}

export default CartWidget