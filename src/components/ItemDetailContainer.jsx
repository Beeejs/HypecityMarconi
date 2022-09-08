import { React , useEffect , useState} from 'react';
import ItemDetail from './ItemDetail';

function ItemDetailContainer(){

  const [crypto , setCrypto] = useState([])

  useEffect(()=>{
    const apiKey = 'd1f85c753fba4fd13032619615dba81638a48227'
    const url = `https://api.nomics.com/v1/currencies/ticker?key=${apiKey}&ids=BTC,ETH,USDT&interval=1d` /* Pasar como parametro el prodID*/
    const promesa = async () =>{
      
      await fetch(url)
        .then(res => res.json())
        .then(moneda => setCrypto(moneda))
    }

    promesa()
  },[]) /* Cambiar las dependencias , porque el prodId cambia */


  

  return(
    <div className='container-crypto-principal'>
      {
        crypto.map(item => {
          return <ItemDetail key={item.id} crypto={item}/>
        })
      }
    </div>
  );
}

export default ItemDetailContainer