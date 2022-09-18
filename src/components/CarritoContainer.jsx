import React from 'react'
import { useContext } from 'react';
import { Cart } from '../context/CartContext';
import Carrito from './Carrito';

function CarritoContainer(){

  let {cart , clearCart} = useContext(Cart)

  const voidCart = () =>{
    clearCart()
  }
  return(
    <div className='container-principal-carrito'>
      {
        cart.map(item => {
          return <Carrito key={item.id} product={item}/>
        })
      }

      {
       !cart.length ? <div className='container-aviso-vacio'><h1>El carrito esta vacio!</h1></div> : <div className='container-btnVaciar'><button onClick={voidCart}>Vaciar</button></div>
      }

    </div>
  );
}
export default CarritoContainer