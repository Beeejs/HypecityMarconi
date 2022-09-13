import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../stylesheets/Item.css'


function Item({products}) {
  const {id, name , category , price , img} = products

  const navigate = useNavigate()

  const HandleDetalle = () =>{
    navigate(`/details/${id}/${category}-${name}`)
  }
  return (

    <div className='productos' onClick={HandleDetalle}>
      <div className='img-prod'>
            <img src={`${img}`} alt={`Imagen ${name}`} />
          </div>
          <div className='detalles'>
            <h1 className='name'>{name}</h1>
            <h3 className='price'>{`$${price}`}</h3> 
          </div>
    </div>

  )
}

export default Item