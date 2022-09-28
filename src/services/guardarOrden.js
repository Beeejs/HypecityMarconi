import { addDoc, collection, doc, getDoc, writeBatch } from "firebase/firestore"
import {db} from '../firebase/config.js'

const GuardarOrden = (cart , order) =>{
  const batch = writeBatch(db)

  const outOfStock = []
  
  cart.forEach( productCart => {
    try {

      const docRef = doc(db,'products',productCart.id)
      getDoc(docRef)
        .then( docSnapShot => {

          const productDb = {...docSnapShot.data() , id:docSnapShot.id }
          
          if(productDb.stock >= productCart.qty){
            batch.update(doc(db,'products',productDb.id),{
              stock: productDb.stock - productCart.qty
            })
          }else{
            outOfStock.push(productDb)
          }


          if(outOfStock.length === 0){
            addDoc(collection(db,'orders'),order)
              .then(({id}) => {
                batch.commit().then(() =>{
                  alert(`se genero la compra con id:  ${id}`)
                })
              }).catch(err =>{
                console.log(err)
              })
          }else{
            let mensajeOutOfStock = ''
            for(const productos of outOfStock){
              mensajeOutOfStock += `Del produto ${productos.name} quedan ${productos.stock} en stock!`
            }
            alert(mensajeOutOfStock)
          }

        })


    } catch (error) {
      console.log(error)
    }

    
  });
}

export default GuardarOrden