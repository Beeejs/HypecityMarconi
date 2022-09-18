import React, { createContext, useState } from 'react'

export const Cart = createContext(null)

function CartContext({ children }){

  const [cart , setCart] = useState([])

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
    cart.map(product => product.id === id ? product = {...cart} : null)
  }


  return(
    <Cart.Provider value={{cart , addItemCart , removeItem}}>
      {children}
    </Cart.Provider>
  );
}

export default CartContext

