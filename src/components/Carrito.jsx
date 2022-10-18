import React , {useContext} from "react";
import '../stylesheets/Carrito.css'
import { Cart } from "../context/CartContext";


function Carrito({ product }){
  const {name , img , price , qty , id} = product

  const {removeItem} = useContext(Cart)

  const deletePorduct = (id) =>{
    removeItem(id)
  }

  return(
    <div className='container-carrito'>
      <img src={img} alt={`Img Producto ${name}`}/>
      <h1>{name}</h1>
      <h2>{'$'+price}</h2>
      <h3>{qty}</h3>
      <h2 className='total'>{'$'+price * qty}</h2>
      <button className='btn-eliminar' onClick={() => deletePorduct(id)}><i className='fa-solid fa-trash-can'></i></button>
    </div>
  );
}

export default Carrito 