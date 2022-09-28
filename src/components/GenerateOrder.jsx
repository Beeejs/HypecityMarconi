import React from 'react'
import { useContext } from 'react'
import { Cart } from '../context/CartContext'
import GuardarOrden from '../services/guardarOrden'

const GenerateOrder = () => {

  const {totalCart , cart} = useContext(Cart)
  
  const sendOrderBuy = () =>{
    const nameValue = document.getElementById('name').value
    const emailValue = document.getElementById('email').value
    const phoneValue = document.getElementById('phone').value
    
    const order = {
      name:nameValue,
      email:emailValue,
      phone:phoneValue
    }
    GuardarOrden(cart,order)
    totalCart()
  }


  return (
    <div>
      <label htmlFor="">Name</label>
      <input type="text" id='name'/>
      <label htmlFor="">Email</label>
      <input type="email" id='email'/>
      <label htmlFor="">phone</label>
      <input type="number" id='phone'/>

      <button onClick={sendOrderBuy}>Send</button>
    </div>
  )
}

export default GenerateOrder

