/* Firebase */
import { addDoc , collection} from "firebase/firestore";
import { db } from "../firebase/config";

export const guardadoAutomaticoBaseDeDatos = async () =>{

  try {
    const peticion = await fetch('/data.json')
    const productList = await peticion.json()
  
    productList.forEach( product =>{
      const docRef =  addDoc(collection(db,'products'),{
        name:product.name,
        category:product.category,
        price:product.price,
        img:product.img,
        imgDetalle: product.imgDetalle ? product.imgDetalle : 'No posee detalle'
      });
      console.log(docRef.id)
    });
    
  } catch (error) {
    console.log(error)
  }

}

