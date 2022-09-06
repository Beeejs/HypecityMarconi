import React from 'react'
import '../stylesheets/Item.css'
import ItemCount from './ItemCount'

function Item({products}) {
  const {name , price , img } = products

  const agregarAlCarrtito = (cantidad) =>{
    alert(`Se agrego al carrito ${cantidad} productos!`)
  }
  return (

    <div className='productos'>
      <div className='img-prod'>
            <img src={`${img}`} alt={`Imagen ${name}`} />
          </div>
          <div className='detalles'>
            <h1 className='name'>{name}</h1>
            <h3 className='price'>{`$${price}`}</h3> 
            <ItemCount stock={8} initial={1} onAdd={agregarAlCarrtito}/>
          </div>
    </div>

  )
}

export default Item