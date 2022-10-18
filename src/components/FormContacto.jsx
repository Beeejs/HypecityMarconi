import React, { useState } from 'react';
/* Styles */
import '../stylesheets/FormBootstrap.css'
/* Bootstrap */
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
/* Emailjs */
import emailjs from '@emailjs/browser'
/* Sweet Alert */
const Swal = require('sweetalert2')

function FormContacto() {
  const [validated, setValidated] = useState(false);
  
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }else{
      event.preventDefault();
      emailjs.sendForm('service_toqsj6n','template_9ery90f',event.currentTarget,process.env.REACT_APP_EMAIL_JS)//la key en archivo .env
      .then(() => {
        const Toast = Swal.mixin({
          toast: true,
          showConfirmButton: false,
          timer: 2000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
          }
        })
        
        Toast.fire({
          icon: 'success',
          title: 'Se envió correctamente!'
        })
      })
      .catch(() => {
        const Toast = Swal.mixin({
          toast: true,
          showConfirmButton: false,
          timer: 2000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
          }
        })
        
        Toast.fire({
          icon: 'error',
          title: 'Vuelva a intentarlo más tarde!'
        })
      })
    }

    setValidated(true);
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Form.Group as={Col} md="6">
          <Form.Label>Name</Form.Label>
          <Form.Control
            required
            type="text"
            name='user-name'
            id='name'
          />
          <Form.Control.Feedback type="invalid">
            Porfavor completa con un nombre válido.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="6">
          <Form.Label>Email</Form.Label>
          <Form.Control
            required
            type="email"
            name='user-email'
            id='email'
          />
          <Form.Control.Feedback type="invalid">
            Porfavor completa con un email válido.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="6" >
          <Form.Label>City</Form.Label>
          <Form.Control type="text" required id='city' name='user-city'/>
          <Form.Control.Feedback type="invalid">
            Porfavor completa con una ciudad válida.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="6">
          <Form.Label>Phone</Form.Label>
          <InputGroup hasValidation>
            <Form.Control
              type="number"
              required
              name='user-phone'
              id='phone'
            />
            <Form.Control.Feedback type="invalid">
              Porfavor completar con tu numero de celular.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
      </Row>
      <Form.Group as={Col} md="12" >
        <Form.Label>Message</Form.Label>
        <InputGroup hasValidation>
          <Form.Control
            as="textarea"
            required
            name='user-message'
            id='textarea'
          />
        </InputGroup>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Check
          required
          label="Agree to terms and conditions"
          feedback="Debe estar de acuerdo para enviar el mensaje."
          feedbackType="invalid"
        />
      </Form.Group>
      <Button type="submit">Enviar</Button>
    </Form>
  );
}

export default FormContacto