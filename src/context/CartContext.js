import React, { createContext } from 'react'
import useLocalStorage from '../customs/useLocalStorage'

export const Cart = createContext(null)

function CartContext({ children }){
  
  let [cart , setCart] = useLocalStorage('carrito' , [])
  
  const addItemCart = (item) =>{
    const addCart = [...cart,item]
    const boolean = cart.some(product => product.id === item.id)

    if(boolean){
      cart.map(product => product.id === item.id ? product.qty += item.qty : null)
      const addItemDup = [...cart]
      setCart(addItemDup)
    }
    else{
      setCart(addCart)
    }
  }

  const removeItem = (id) =>{
    const newCart = cart.filter(item => item.id !== id);
    setCart(newCart)
  }

  const clearCart = () =>{
    setCart([])
  }

  const totalCart = () =>{
    const total = cart.reduce((acc,product) => acc += (product.qty * product.price) , 0)
    return total
  }


  return(
    <Cart.Provider value={{cart , addItemCart , removeItem , clearCart , totalCart , setCart}}>
      {children}
    </Cart.Provider>
  );
}

export default CartContext

