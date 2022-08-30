import React from 'react'
import '../stylesheets/ItemListContainer.css'

function ItemListContainer({greeting}) {
  return (
    <div className='desafio-clase-4'>
      <h1>{greeting}</h1>
    </div>
  );
}

export default ItemListContainer