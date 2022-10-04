import { db } from "../firebase/config";
import { addDoc , collection , getDocs, query, updateDoc,doc, getDoc} from "firebase/firestore";

//Function Crear productos

export const CrearProductEnBaseDeDatos =  (createProduct) =>{
  addDoc(collection(db,'panelAdmin'),createProduct)

}

//Function Obtener productos

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

//Function Actualizar producto

export const ModificarProdutEnBaseDeDatos = async (id,name,category,price) =>{
  const productRef = doc(db,'panelAdmin',id)
  getDoc(productRef)
    try {
      let objectModify = {
        name,
        category,
        price
      }
    
      await updateDoc(productRef , objectModify)
    } catch (error) {
      const errReal = 'ID inexistente!';
      console.log(errReal)
    }
}


//Function poderEliminar