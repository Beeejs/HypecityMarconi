import React from 'react'
import '../stylesheets/ItemListContainer.css'
import ItemCount from './ItemCount.jsx';

function ItemListContainer({greeting}) {

  const agregarAlCarrtito = (cantidad) =>{
    alert(`Se agrego al carrito ${cantidad} productos!`)
  }

  return (
    <>
      <div className='contenedor-principal'>
        <h1>{greeting}</h1>
      </div>

      <div className='contenedor-btnadd'>
        <ItemCount stock={8} initial={1} onAdd={agregarAlCarrtito}/>
      </div>
    </>
  );
}

export default ItemListContainer