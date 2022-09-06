import React, { useEffect, useState } from 'react'
import { dataItem } from '../data';
import '../stylesheets/ItemListContainer.css'
import Presentacion from '../img/presentacion-prod.jpeg'
import Item from './Item';

function ItemListContainer() {

  const [items , setItems] = useState([])

  useEffect(()=>{

    (async()=>{
      const promesa = new Promise((res , rej) =>{
        setTimeout(()=>{
          res(dataItem);
        },2000)
        
      })
  
      try {
        const res = await promesa;
        setItems(res);
      } 
      catch (err) {
        console.log(err);
      }
  
    })()

  },[])



  return (
    <div className='section-productos'>
        <div className='container-img-prod'>
            <img src={Presentacion} alt='Imagen Presentacion Productos' />
        </div>
      <div className='container-productos'>
        {
          items.map(item => {
            return <Item key={item.id} products={item}/>
          })
        }
      </div>
    </div>
  );
}

export default ItemListContainer