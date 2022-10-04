import React, { useContext } from 'react'
import { Cart } from '../context/CartContext'
import {Link} from 'react-router-dom'

function CartWidget () {

  const {cart} = useContext(Cart)
  const nCant = cart.reduce((acc,product) => acc += product.qty , 0)

  return (
    <li><Link to='/carrito'><i className='fa-solid fa-cart-shopping'></i><span className='cantidad-carrito'>{nCant}</span></Link></li>
  )
}

export default CartWidget