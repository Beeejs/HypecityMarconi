import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';

function FromBootstrap({handleBuy}) {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }else{
      event.preventDefault();
      event.stopPropagation();
      handleBuy()
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
            id='name'
          />
        </Form.Group>
        <Form.Group as={Col} md="6">
          <Form.Label>Email</Form.Label>
          <Form.Control
            required
            type="email"
            id='email'
          />
        </Form.Group>
        <Form.Group as={Col} md="6" >
          <Form.Label>City</Form.Label>
          <Form.Control type="text" required id='city'/>
          <Form.Control.Feedback type="invalid">
            Porfavor completa con una ciudad valida.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="6" >
          <Form.Label>Address</Form.Label>
          <Form.Control type="text" required id='address'/>
          <Form.Control.Feedback type="invalid">
             Porfavor completa con una dirección valida.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="6">
          <Form.Label>Phone</Form.Label>
          <InputGroup hasValidation>
            <Form.Control
              type="number"
              required
              id='phone'
            />
            <Form.Control.Feedback type="invalid">
              Porfavor completar con tu numero de celular.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
      </Row>
      <Form.Group className="mb-3">
        <Form.Check
          required
          label="Agree to terms and conditions"
          feedback="Debe estar de acuerdo para completar la compra."
          feedbackType="invalid"
        />
      </Form.Group>
      <Button type="submit">Realizar compra</Button>
    </Form>
  );
}

export default FromBootstrap