import React from 'react'
import '../stylesheets/GetProductsAdmin.css'

const GetProductsAdmin = ({products}) => {
  return (
    <div className='container-products-admin'>
      <div className='container-img'>
        <img src={products.img} alt="" />
      </div>
      <h2><span>name:</span>{products.name}</h2>
      <h3><span>category:</span>{products.category}</h3>
      <h3><span>price:</span>{products.price}</h3>
      <h3><span>stock:</span>{products.stock}</h3>
      <h4><span>id:</span>{products.id}</h4>
    </div>
  )
}

export default GetProductsAdmin