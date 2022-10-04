import React from 'react'
import { useContext } from 'react'
import { Cart } from '../context/CartContext'
import GuardarOrden from '../services/guardarOrden'
import { useNavigate } from 'react-router-dom'
import FormBootstrap from './FromBootstrap'

const GenerateOrder = () => {

  const {totalCart , cart , clearCart} = useContext(Cart)
  const navigate = useNavigate()

  const navigateHome = () =>{
    navigate('/')
  }
  const navigateCart = () =>{
    navigate('/carrito')
  }

  const sendOrderBuy = () =>{
    const nameValue = document.getElementById('name').value
    const emailValue = document.getElementById('email').value
    const phoneValue = document.getElementById('phone').value
    const cityValue = document.getElementById('city').value
    const addressValue = document.getElementById('address').value
    const total = totalCart()
  
    const order = {
      name:nameValue,
      email:emailValue,
      phone:phoneValue,
      city:cityValue,
      address:addressValue,
      item:cart,
      total:total,
      createdAt: new Date().toLocaleString()
    } 

   GuardarOrden(cart,order,clearCart,navigateHome,navigateCart)
   
   
  }


  return (
    <div className='container-footer'>
      <h2>Datos personales</h2>
      <FormBootstrap handleBuy={sendOrderBuy}/>
    </div>
  )
}

export default GenerateOrder

