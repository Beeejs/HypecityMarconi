import  {React , useState} from 'react'
import '../stylesheets/ItemCount.css'

function ItemCount({ stock , initial , onAdd  }) {

  const [count , setCount] = useState(initial)

  const addCantidad = () =>{
    if(count < stock){
      setCount(count + 1)
    }else{
      alert('No hay mas stock!')
    }
  }

  const decrementCantidad = () =>{
    if(count > initial){
      setCount(count - 1)
    }
  }

  return (

    <>
      <div className='contenedor-contador'>
        <div>
          <button onClick={decrementCantidad}>-</button>
        </div>

        <div className='numero-contador'>
          {count}
        </div>

        <div>
          <button onClick={addCantidad}>+</button>
        </div>
      </div>

      <div className='contenedor-agregarAlCarrito'>
        <button onClick={() => !onAdd(count) ? setCount(initial) : null }>Agregar al carrito</button>
      </div>
    </>
  )
}

export default ItemCount