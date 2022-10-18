/* Firebase */
import { db } from "../firebase/config";
import { addDoc , collection , getDocs, query, updateDoc,doc, getDoc , deleteDoc, deleteField} from "firebase/firestore";

//Function Crear productos

export const CrearProductEnBaseDeDatos =  (createProduct) =>{
  addDoc(collection(db,'products'),createProduct)

}

//Function Obtener productos

export const ObtenerProductEnBaseDeDatos = async () =>{
  const docRef = query(collection(db,'products'))
  const snapShot = await getDocs(docRef)

  const arrayProductToModify = []

  snapShot.forEach(items =>{
    const productToModify = {...items.data() , id:items.id}
    arrayProductToModify.push(productToModify)
  })
  return arrayProductToModify
}

//Function Actualizar producto y campos

export const ModificarProductEnBaseDeDatos = async (id,name,category,price,img,stock) =>{
  const productRef = doc(db,'products',id)
  const snapShot = await getDoc(productRef)
    try {
      let objectModify = {
        name:name === '' ? snapShot.data().name : name,
        category:category === '' ? snapShot.data().category : category,
        price:price === '' ? snapShot.data().price : parseInt(price),
        img:img === '' ? snapShot.data().img : img,
        stock:stock === '' ? snapShot.data().stock : parseInt(stock)
      }
    
      await updateDoc(productRef , objectModify)

    } catch (error) {
      const errReal = 'ID inexistente!';
      console.log(errReal)
    }
}


//Function poderEliminar completamente el producto

export const DeleteProductEnBaseDeDatos = async (id) =>{
  const productRef = doc(db,'products',id)
  getDoc(productRef)
    try {
      await deleteDoc(productRef)
    } catch (error) {
      console.log(error)
    }
}

//Function poderEliminar campos del prodcuto

export const DeleteCamposEnBaseDeDatos = async (id,select) =>{
  const productRef = doc(db,'products',id)
  const snapShot = await getDoc(productRef)
    try {
      await updateDoc(productRef,{
        name:select === 'Name' ? deleteField() : snapShot.data().name,
        category:select === 'Category' ? deleteField() : snapShot.data().category,
        price:select === 'Price' ? deleteField() : snapShot.data().price,
        img:select === 'Img' ? deleteField() : snapShot.data().img,
        stock:select === 'Stock' ? deleteField() : snapShot.data().stock
      })
    } catch (error) {
      console.log(error)
    }
}