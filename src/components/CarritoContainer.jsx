import React from 'react'
import { useContext } from 'react';
import { Cart } from '../context/CartContext';
import Carrito from './Carrito';

function CarritoContainer(){

  const {cart} = useContext(Cart)

  return( 
    <div className='container-principal-carrito'>
      {
          cart.map(item => {
            return <Carrito key={item.id} product={item}/>
          })
      }
    </div>
  );
}
export default CarritoContainer