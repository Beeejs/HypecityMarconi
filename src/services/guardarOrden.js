import { addDoc, collection, doc, getDoc, writeBatch } from "firebase/firestore"
import {db} from '../firebase/config.js'
import '../stylesheets/Footer.css'
/* Sweet Alert */
const Swal = require('sweetalert2')

const GuardarOrden = (cart , order , clearCart,navigateHome,navigateCart) =>{
  const outOfStock = []
  const batch = writeBatch(db)
  cart.forEach( productCart => {
    try {

      const docRef = doc(db,'products',productCart.id)
      getDoc(docRef)
        .then( async docSnapShot => {
          const productDb = {...docSnapShot.data() , id:docSnapShot.id }
          
          if(productDb.stock >= productCart.qty){
            batch.update(doc(db,'products',productDb.id),{
              stock: productDb.stock - productCart.qty
            })
          }else{
            outOfStock.push(productDb)
          }

        })


    } catch (error) {
      console.log(error)
    }
    
  });

  //Ponemos todo en un condicional , asi si no hay stcok de un producto , no se manda la orden , y el cliente pueda volver a intentar
  setTimeout(() =>{
    //lo sacamos del forEach asi se ejecuta una vez , y lo ponemos en un setTimeOut asi no nos da siempre length = 0
    if(outOfStock.length !== 0){
      let mensajeOutOfStock = ''
      for(const productos of outOfStock){
        mensajeOutOfStock += 
        `Del produto ${productos.name} quedan ${productos.stock} en stock!
        Vuelve a intentarlo!`
      }
      alert(mensajeOutOfStock)
      navigateCart()
    }else{
      //Esto va por fuera del forEach para que no ejecute ordenes por la cantidad del productos en el carrito
      addDoc(collection(db,'orders'),order).then(({id}) => {
        batch.commit().then(() =>{
          const Toast = Swal.mixin({
            toast: true,
            position: 'top-center',
            showConfirmButton: false,
            timer: 4000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
          })
          
          Toast.fire({
            icon: 'success',
            title: `Se genero la compra con id:  ${id}`
          })
          clearCart()
          navigateHome()
        })
      }).catch(err =>{
        console.log(err)
      })
    }
  },1000)




}

export default GuardarOrden