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
       !cart.length ? <div className='container-aviso-vacio'><h1 className='msj-vacio'><i className='fa-solid fa-cart-arrow-down'></i>El carrito esta vacio<i className='fa-solid fa-cart-arrow-down'></i></h1></div> : <div className='container-btnVaciar'><button onClick={voidCart}>Vaciar carrito</button></div>
      }

    </div>
  );
}
export default CarritoContainer