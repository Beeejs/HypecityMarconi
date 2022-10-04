import React from 'react'
import {CrearProductEnBaseDeDatos, ModificarProdutEnBaseDeDatos, ObtenerProdutEnBaseDeDatos} from '../services/adminBaseDatos'

const AdminView = () => {

  //Envio el objeto. El valor de cada propiedad es por lo que ingreso el Admin
  const sendAdd = () =>{
    const nameValue = document.getElementById('name').value
    const categoryValue = document.getElementById('category').value
    const priceValue = document.getElementById('price').value
    
    const createProduct = {
      name:nameValue,
      category:categoryValue,
      price:parseInt(priceValue)
    }

    CrearProductEnBaseDeDatos(createProduct)
  }

  //Obtengo los productos de mi base de datos
  const getProducts = () =>{
    ObtenerProdutEnBaseDeDatos()
  }

  //Modifico los productos de mi base de datos
  const sendModify = () =>{
    const idValue = document.getElementById('id').value  
    const nameModify = document.getElementById('nameModify').value
    const categoryModify = document.getElementById('categoryModify').value
    const priceModify = document.getElementById('priceModify').value
    ModificarProdutEnBaseDeDatos(idValue,nameModify,categoryModify,priceModify)
  }

  return (
    <>
      <div>
        <label htmlFor="">Name</label>
        <input type="text" id='name'/>
        <label htmlFor="">Category</label>
        <input type="category" id='category'/>
        <label htmlFor="">Price</label>
        <input type="number" id='price'/>
  
        <button onClick={sendAdd}>Agreagar producto</button>
      </div>

      <div>
        <button onClick={getProducts}>Obtener productos</button>
        <label htmlFor="">Id Del Producto</label>
        <input type="text" id='id'/>
        <label htmlFor="">Name</label>
        <input type="text" id='nameModify'/>
        <label htmlFor="">Category</label>
        <input type="category" id='categoryModify'/>
        <label htmlFor="">Price</label>
        <input type="number" id='priceModify'/>
        <button type='send' onClick={sendModify}>Actualizar producto</button>
      </div>
    </>
  )
}

export default AdminView