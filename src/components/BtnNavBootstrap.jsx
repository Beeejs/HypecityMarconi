import React, { useState } from 'react';
import '../stylesheets/BtnNav.css'
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import AccordionBtn from './AccordionBootstrap';
/* Router */
import {Link} from "react-router-dom";

function OffCanvasExample() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow} className="me-2">
        <i className="fa-solid fa-bars"></i>
      </Button>
      <Offcanvas show={show} onHide={handleClose} placement='end'>
        <Offcanvas.Header closeButton />
        <Offcanvas.Body>
        <AccordionBtn/>
          <nav className='navbar-container-btn'>
            <ul>
              <li><Link to='/'>Inicio</Link></li>
              <li><Link to='/contacto'>Contacto</Link></li>
            </ul>
          </nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}


export default OffCanvasExample