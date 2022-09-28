import { db } from "../firebase/config";
import { addDoc , collection , getDocs, query, updateDoc,doc, getDoc} from "firebase/firestore";

export const CrearProductEnBaseDeDatos =  (createProduct) =>{
  addDoc(collection(db,'panelAdmin'),createProduct)

}

export const ObtenerProdutEnBaseDeDatos = async () =>{
  const docRef = query(collection(db,'panelAdmin'))
  const snapShot = await getDocs(docRef)

  const arrayProductToModify = []

  snapShot.forEach(items =>{
    const productToModify = {...items.data() , id:items.id}
    arrayProductToModify.push(productToModify)
  })
  console.log(arrayProductToModify)
}

export const ModificarProdutEnBaseDeDatos = async (id,name,category,price) =>{
  const productRef = doc(db,'panelAdmin',id)
  getDoc(productRef)
  let objectModify = {
    name,
    category,
    price
  }

  await updateDoc(productRef , objectModify)
}


