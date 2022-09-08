import React from 'react'
import '../stylesheets/ItemDetail.css'

function ItemDetail({ crypto }){

  return(
    <div className='container-crypto'>
      <strong>{crypto.rank}</strong>
      <div className='crypto-detalles'>
        <img src={crypto.logo_url} alt={`Imgen Crypto ${crypto.name}`} />
        <h1>{crypto.name}</h1>
        <h2>{crypto.id}</h2>
      </div>
      <h3>{'$' + crypto.price}</h3>
    </div>
  );
}

export default ItemDetail