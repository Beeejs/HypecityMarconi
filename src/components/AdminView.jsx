import React, { useState,useEffect} from 'react'
/* Styles */
import '../stylesheets/AdminView.css'
/* Import Functions */
import {CrearProductEnBaseDeDatos, DeleteCamposEnBaseDeDatos, DeleteProductEnBaseDeDatos, ModificarProductEnBaseDeDatos, ObtenerProductEnBaseDeDatos} from '../services/adminBaseDatos'
import GetProductsAdmin from './GetProductsAdmin'
/* React Bootstrap */
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Row } from 'react-bootstrap'
import Col from 'react-bootstrap/Col';
/* Sweet Alert */
const Swal = require('sweetalert2')



const AdminView = () => {
  const [getProducts , setGetProducts] = useState([])
  
  //Obtengo los productos de mi base de datos
  useEffect(() =>{
    (async()=>{
      ObtenerProductEnBaseDeDatos()
        .then(res => setGetProducts(res))
    })()
  },[setGetProducts])


  //Envio el objeto. El valor de cada propiedad es por lo que ingreso el Admin
  const sendAdd = (e) =>{
    e.preventDefault();
    e.stopPropagation();
    const nameValue = document.getElementById('name').value
    const categoryValue = document.getElementById('category').value
    const priceValue = document.getElementById('price').value
    const imgValue = document.getElementById('img').value
    const stockValue = document.getElementById('stock').value
    
    const createProduct = {
      name:nameValue,
      category:categoryValue,
      price:parseInt(priceValue),
      img:imgValue,
      stock:parseInt(stockValue)
    }

    CrearProductEnBaseDeDatos(createProduct)
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
      title: 'Se modifico un producto!\nReinicie la pagina para ver los cambios'
    })
  }


  //Modifico los productos de mi base de datos
  const sendModify = (e) =>{
    e.preventDefault();
    e.stopPropagation();
    const idValue = document.getElementById('id').value
    const nameModify = document.getElementById('nameModify').value
    const categoryModify = document.getElementById('categoryModify').value
    const priceModify = document.getElementById('priceModify').value
    const imgModify = document.getElementById('imgModify').value
    const stockModify = document.getElementById('stockModify').value

    ModificarProductEnBaseDeDatos(idValue,nameModify,categoryModify,priceModify,imgModify,stockModify)
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
      title: 'Se modifico un producto!\nReinicie la pagina para ver los cambios'
    })
  }

  //Elimino los prodcutos de mi base de datos
  const deleteProducts = (e) =>{
    e.preventDefault();
    e.stopPropagation();
    const idDelete = document.getElementById('idDelete').value
    DeleteProductEnBaseDeDatos(idDelete)

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
      title: 'Se modifico un producto!\nReinicie la pagina para ver los cambios'
    })
  }

  //Elimino los prodcutos campos de mi base de datos
  const deleteCampo = (e) =>{
    e.preventDefault();
    e.stopPropagation();
    const selectCampo = document.getElementById('selectCampo').value
    const idCampo = document.getElementById('idCampo').value
    DeleteCamposEnBaseDeDatos(idCampo,selectCampo)
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
      title: 'Se modifico un producto!\nReinicie la pagina para ver los cambios'
    })
  }

  return (
    <>
      <main className='main-panel-admin'>
        <section className='section-products-admin'>
            {
              getProducts.map(product => {
                return <GetProductsAdmin key={product.id} products={product}/>
              })
            }
        </section>

        <section className='section-panel-admin'>
          {/* Obtener producto */}
            <Form className='form-group'>
              <div className='container-title'>
                <h2 className='title-form'>Agregar producto</h2>
              </div>
              <Row className="mb-3">
                <Form.Group  as={Col} md="6">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" placeholder="Nombre del producto" id='name' />
                </Form.Group>
                <Form.Group  as={Col} md="6">
                  <Form.Label>Category</Form.Label>
                  <Form.Control type="text" placeholder="Categoria del producto" id='category'/>
                </Form.Group>
              </Row>
              <Row className="mb-3">
                <Form.Group  as={Col} md="6">
                  <Form.Label>Price</Form.Label>
                  <Form.Control type="text" placeholder="Precio del producto(sin $)" id='price'/>
                </Form.Group>
                <Form.Group  as={Col} md="6">
                  <Form.Label>Img</Form.Label>
                  <Form.Control type="text" placeholder="Imagen del producto(link)" id='img'/>
                </Form.Group>
              </Row>
              <Form.Group  as={Col} md="12">
                <Form.Label>Stock</Form.Label>
                <Form.Control type="text" placeholder="Stock del producto" id='stock'/>
              </Form.Group>

              <Button variant="primary" type="submit" onClick={(e) => sendAdd(e)}>Agregar producto</Button>
            </Form>

          {/* Actualizar producto */}
            <Form className='form-group'>
              <div className='container-title'>
                <h2 className='title-form'>Modificar producto</h2>
              </div>
              <Row className="mb-3">
                <Form.Group  as={Col} md="6">
                  <Form.Label>ID del producto</Form.Label>
                  <Form.Control type="text" placeholder="ID del producto" id='id' />
                </Form.Group>
                <Form.Group  as={Col} md="6">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" placeholder="Nombre del producto" id='nameModify'/>
                </Form.Group>
              </Row>
              <Row className="mb-3">
                <Form.Group  as={Col} md="6">
                  <Form.Label>Category</Form.Label>
                  <Form.Control type="text" placeholder="Categoria del producto" id='categoryModify'/>
                </Form.Group>
                <Form.Group  as={Col} md="6">
                  <Form.Label>Price</Form.Label>
                  <Form.Control type="text" placeholder="Precio del producto(sin $)" id='priceModify'/>
                </Form.Group>
              </Row>
              <Row className="mb-3">
                <Form.Group  as={Col} md="6">
                  <Form.Label>Img</Form.Label>
                  <Form.Control type="text" placeholder="Img del producto(link)" id='imgModify'/>
                </Form.Group>
                <Form.Group  as={Col} md="6">
                  <Form.Label>Stock</Form.Label>
                  <Form.Control type="text" placeholder="Stock del producto" id='stockModify'/>
                </Form.Group>
              </Row>
              <Button variant="primary" type="submit" onClick={(e) => sendModify(e)}>Modificar producto</Button>
            </Form>

  	      {/* Eliminar producto */}
            <Form className='form-group'>
              <div className='container-title'>
                <h2 className='title-form'>Eliminar producto</h2>
              </div>
              <Row className="mb-3">
                <Form.Group  as={Col} md="12">
                  <Form.Label>ID del producto</Form.Label>
                  <Form.Control type="text" placeholder="ID del producto" id='idDelete' />
                </Form.Group>
              </Row>
              <Button variant="primary" type="submit" onClick={(e) => deleteProducts(e)}>Eliminar producto</Button>
            </Form>
            
          {/* Actualizar campor del producto */}
            <Form className='form-group'>
              <div className='container-title'>
                <h2 className='title-form'>Eliminar campo</h2>
              </div>
              <Form.Group  as={Col} md="12">
                  <Form.Label>ID del producto</Form.Label>
                  <Form.Control type="text" placeholder="ID del producto" id='idCampo' />
              </Form.Group>
              <Form.Select aria-label="Default select example"  as={Col} md="123" id='selectCampo'>
                <option>Name</option>
                <option>Category</option>
                <option>Price</option>
                <option>Img</option>
                <option>Stock</option>
              </Form.Select>
              <Button variant="primary" type="submit" onClick={(e) => deleteCampo(e)}>Eliminar campo</Button>
            </Form>
        </section>
      </main>
    </>
  )
}

export default AdminView