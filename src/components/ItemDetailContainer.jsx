import  React , {useEffect , useState} from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail.jsx';

/* FireBase */
import {db} from './firebase/config'
import { doc, getDoc } from "firebase/firestore";



function ItemDetailContainer(){
  const params = useParams()
  const {productId} = params

  const [prodDetail , setProdDetail] = useState('')

 
  useEffect(() =>{

    const getProducts = async () =>{
      
      try{
        const docRef = doc(db, "products", productId);
        const docSnap = await getDoc(docRef);
        setProdDetail({...docSnap.data() , id:productId})
      }
      catch(err){
        console.log(err)
      }
    } 
    getProducts()

  },[productId])


  return(
    prodDetail.length === 0 ?  
      <>
      <div className='container-loader'>
        <div className='spinner-border' role='status'>
        </div>
        <span className='visually-visible'>Loading...</span>
      </div>
      </> 
      : <ItemDetail key={productId} item={prodDetail}/>
  );
  
}

export default ItemDetailContainer