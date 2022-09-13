import { React } from 'react';
import { useParams } from 'react-router-dom';
import { dataItem } from '../data.jsx';
import ItemDetail from './ItemDetail.jsx';

function ItemDetailContainer(){

  const params = useParams()
  const {productId} = params

  let item = []
  dataItem.filter(res => res.id === parseInt(productId) ? item = res : null)
  
  return(
    <ItemDetail key={item.id} item={item}/>
  );
}

export default ItemDetailContainer