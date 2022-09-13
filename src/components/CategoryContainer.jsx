import { React } from 'react';
import { useParams } from 'react-router-dom';
import { dataItem } from '../data.jsx';
import CategoryItem from './CategoryItem.jsx';
import '../stylesheets/CategoryItem.css'

function CategoryContainer(){

  const params = useParams()
  const {categoryId} = params

  return(
    <>
      <ul className='container-li-category'>
        <li className='nav-inicio'>Incio</li>
        <li className='nav-category'>{categoryId}</li>
      </ul>
      <div className='container-productos'>
        {
          dataItem.length ? 
            dataItem.map(res => res.category === categoryId ? <CategoryItem key={res.id} item={res}/> : null)
          :
          <h1 className='loading'>Loading...</h1>
        }
      </div>
    </>
  );
}

export default CategoryContainer