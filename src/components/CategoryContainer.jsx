import React , {useEffect , useState} from 'react';
import { useParams } from 'react-router-dom';
import CategoryItem from './CategoryItem.jsx';
import '../stylesheets/CategoryItem.css'


import {db} from '../firebase/config'
import { collection, query, where, getDocs } from "firebase/firestore";
function CategoryContainer(){

  const params = useParams()
  const {categoryId} = params
  const [items , setItems] = useState([])

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
        setItems(res);
      } 
      catch (err) {
        console.log(err);
      }
  
    })()

  },[categoryId])
  return(
    <>
      <ul className='container-li-category'>
        <li className='nav-inicio'>Incio</li>
        <li className='nav-category'>{categoryId}</li>
      </ul>
      <div className='container-productos'>
        {
          items.length ? 
            items.map(res => res.category === categoryId ? <CategoryItem key={res.id} item={res}/> : null)
          :
          <>
            <div></div> 
            <div className='container-loader'>
              <div className='spinner-border' role='status'>
              </div>
              <span className='visually-visible'>Loading...</span>
            </div>
            <div></div> 
          </>
        }
      </div>
    </>
  );
}

export default CategoryContainer