import React , {useContext, useEffect , useState} from 'react';
import { useParams } from 'react-router-dom';
import CategoryItem from './CategoryItem.jsx';
import '../stylesheets/CategoryItem.css'


import {db} from '../firebase/config'
import { collection, query, where, getDocs } from "firebase/firestore";
import { Search } from '../context/SearchContext.js';
function CategoryContainer(){

  const params = useParams()
  const {categoryId} = params
  const [items , setItems] = useState([])
  const {itemFound} = useContext(Search)

  useEffect(()=>{
    const productsFirebase = [];

    (async()=>{
      const promesa = new Promise((res , rej) =>{
        res(productsFirebase);
      })
  
      try {
        const q = categoryId
            ? query(
                collection(db, "products"),
                where("category", "==", categoryId)
            )
            : null;

        const querySnapshot = await getDocs(q);

        querySnapshot.forEach((doc) => {
          productsFirebase.push({id: doc.id, ...doc.data()})
        });
        
        const res = await promesa;
        itemFound ? setItems(itemFound) : setItems(res)
        itemFound.length ? console.log('hay') : console.log('nohay')
      } 
      catch (err) {
        console.log(err);
      }
  
    })()

  },[categoryId,itemFound])
  return(
    <>
      <ul className='container-li-category'>
        <li className='nav-inicio'>Incio</li>
        <li className='nav-category'>{categoryId}</li>
      </ul>
      <div className={items.length ? 'container-productos' : 'container-productos-loading'}>
        {
          items.length ? 
            items.map(res => res.category === categoryId ? <CategoryItem key={res.id} item={res}/> : null)
          :
          <>
            <div className='container-loader'>
              <div className='spinner-border' role='status'>
              </div>
              <span className='visually-visible'>Loading...</span>
            </div>
          </>
        }
      </div>
    </>
  );
}

export default CategoryContainer