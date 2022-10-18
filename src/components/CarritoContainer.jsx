import React , { useContext }from 'react'
import { useNavigate } from 'react-router-dom';
import { Cart } from '../context/CartContext';
/* Components */
import Carrito from './Carrito';

function CarritoContainer(){

  let {cart , clearCart } = useContext(Cart)

  const navigate = useNavigate()

  const voidCart = () =>{
    clearCart()
  }

  const inputBuyerData = () =>{
   navigate(`/finalizar-compra/user`)
  }

  return(
    <div className={cart.length ? 'container-principal-carrito' : ''}>
      {
        cart.map(item => {
          return <Carrito key={item.id} product={item}/>
        })
      }

      {
       !cart.length ?(
        <div className='container-aviso-vacio'>
          <h1 className='msj-vacio'><i className='fa-solid fa-cart-arrow-down'></i>El carrito esta vacio<i className='fa-solid fa-cart-arrow-down'></i></h1>
        </div>
       )
       : (
        <>
        <div className='container-btn-footer'>
          <button className='btn-vaciar' onClick={voidCart}>Vaciar carrito</button>
          <button className='btn-confirm' onClick={inputBuyerData}>Ir al CheckOut</button>
        </div>
        </>
       )
      }

    </div>
  );
}
export default CarritoContainer