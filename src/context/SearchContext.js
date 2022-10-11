import React , {createContext} from 'react'
import { getDocs ,query ,collection,where } from 'firebase/firestore';
import { db } from '../firebase/config';
import { useState } from 'react';
export const Search = createContext()

const SearchContext = ({children}) => {
  const [itemFound , setItemFound] = useState()
  
  const functionSearch = async (e) =>{
    const parentElement = e.target.parentElement.parentElement
    const value = parentElement.querySelector('.buscador-input').value
    const productsFound = []

    const productsList = []
    const list = query(collection(db, "products"))
    const products = await getDocs(list)

    products.forEach(doc => {
        productsList.push({...doc.data() , id:doc.id})
    });
    
    productsList.forEach( async (item) => {
      //No diferencia de minusculas y mayusculas
      let er = new RegExp(value , "i")

      //test metodo para bsucar coincidencias , devuelve falso o verdadero
      if(er.test(item.name)){
        const filtro = query(collection(db, "products"),where("name", "==", item.name))
        const listFiltro = await getDocs(filtro);
        
        listFiltro.forEach(element => {
          productsFound.push({...element.data() , id:element.id})
        });
      }
    });
    setItemFound(productsFound)
  }

  return (
    <Search.Provider value={{functionSearch , itemFound}}>
      {children}
    </Search.Provider>
  )
}

export default SearchContext