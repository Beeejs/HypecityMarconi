import React, { useState } from 'react';
import '../stylesheets/ItemDetail.css';
import ItemCount from './ItemCount.jsx';
import {Link, useNavigate} from "react-router-dom";

function ItemDetail({ item }){

  const {name , img , price , category , imgDetalle} = item
  const [qty , setQty] = useState(0)
  const navigate =  useNavigate()


  const addCarr = quantity =>{
    setQty(quantity)
  }

  const handleNavCar = () =>{
    navigate('/carrito')
  }

  const cambioDeImg = e =>{
    const changeImg = document.getElementById('changeImg')
    changeImg.setAttribute('src' , e.target.src)
  }
  return(
    <>
    <div className='contenedor-detalles'>
      <div>
        <div className='img-principal-container'>
          <div className='img-none img-detalles'>
            <img src={img}  alt={`Imagen producto ${name}`} onClick={cambioDeImg}/>
            <img className={imgDetalle == null ? 'img-none-detalle' : null} src={imgDetalle ? imgDetalle : null} alt={`Imagen producto ${name}`} onClick={cambioDeImg}/>
          </div>
          
          <img className='img-principal' id='changeImg' src={img} alt={`Imagen producto ${name}`}/>
          <div className='img-detalles-duplicado img-detalles'>
            <img src={img}  alt={`Imagen producto ${name}`} onClick={cambioDeImg}/>
            <img className={imgDetalle == null ? 'img-none-detalle' : null} src={imgDetalle ? imgDetalle : null} alt={`Imagen producto ${name}`} onClick={cambioDeImg}/>
          </div>
        </div>

        <div className='info-none info-producto'>
          <h2>10% DE DESCUENTO ABONANDO TRANSFERENCIA/EFECTIVO</h2>
          <p>Hoodie OVERSIZE real. Fijarse medidas, prendas SUELTAS/GRANDES.</p>
          <br/>
          <p>Algodon- FRISA GRUESA premium - Canguro- Confeccionado y moldeado por nuestro taller- Estampa de alta calidad.</p>
          <p>COLOR : Azulado aero. Makeup similar al producto real.</p>
          <br/>
          <p>TABLA DE TALLES HOODIES (MOLDERIA NUEVA) :</p>
          <p>TALLE 1 S/M = 59 CM DE ANCHO SIZA X 70 CM DE ALTO</p>
          <p>TALLE 2 L/XL = 62 CM DE ANCHO SIZA X 73 CM DE ALTO</p>
          <p>TALLE 3 XXL = 65 CM DE ANCHO SIZA X 76 CM DE ALTO</p>
          <p>Todas las medidas pueden variar +/- 1/2 CM</p>
          <br/>
          <p>INFORMACION POST VENTA</p>
          <p>Luego de realizada la compra, debido a la alta demanda estamos demorando de 0 a 2 días HABILES en el empaquetado y envió del producto.</p>
          <p>Todos nuestros productos son sometidos a un riguroso control de calidad.</p>
        </div>
      </div>

      
      <div className='info-detalles-pirncipal'>
        <div className='info-detalles-container'>
          <ul>
            <li className='li-inicio'><Link to='/'>Incio</Link></li>
            <li className='li-category'><Link to={`/category/${category}`}>{category}</Link></li>
            <li className='li-name'>{name}</li>
          </ul>
          <h1>{name}</h1>
          <h3>${price}</h3>
          <span><i className='fa-regular fa-money-bill-1'></i> <strong>10%</strong> de descuento pagando con efectivo</span>

          <div className='info-compra-cliente'>
            <label>Talle</label>
            <select>
              <option value='S/M'>S/M</option>
              <option value='L/XL'>L/XL</option>
              <option value='XXL'>XXL</option>
            </select>
          </div>
      
          <div className='container-cantidad-compra'>
            {//qty valor falsy == 0
              qty ? <button className='finalizar-compra' onClick={handleNavCar}>FInalizar Compra</button> : <ItemCount stock={8} initial={1} onAdd={addCarr}/>
            }
          </div>
        </div>
      </div>


      <div className='info-producto-duplicado info-producto'>
        <h2>10% DE DESCUENTO ABONANDO TRANSFERENCIA/EFECTIVO</h2>
        <p>Hoodie OVERSIZE real. Fijarse medidas, prendas SUELTAS/GRANDES.</p>
        <br/>
        <p>Algodon- FRISA GRUESA premium - Canguro- Confeccionado y moldeado por nuestro taller- Estampa de alta calidad.</p>
        <p>COLOR : Azulado aero. Makeup similar al producto real.</p>
        <br/>
        <p>TABLA DE TALLES HOODIES (MOLDERIA NUEVA) :</p>
        <p>TALLE 1 S/M = 59 CM DE ANCHO SIZA X 70 CM DE ALTO</p>
        <p>TALLE 2 L/XL = 62 CM DE ANCHO SIZA X 73 CM DE ALTO</p>
        <p>TALLE 3 XXL = 65 CM DE ANCHO SIZA X 76 CM DE ALTO</p>
        <p>Todas las medidas pueden variar +/- 1/2 CM</p>
        <br/>
        <p>INFORMACION POST VENTA</p>
        <p>Luego de realizada la compra, debido a la alta demanda estamos demorando de 0 a 2 días HABILES en el empaquetado y envió del producto.</p>
        <p>Todos nuestros productos son sometidos a un riguroso control de calidad.</p>
      </div>
    </div>
    </>
  );
}

export default ItemDetail