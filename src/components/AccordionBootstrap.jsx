import Accordion from 'react-bootstrap/Accordion';
import {Link} from "react-router-dom";

function AccordionBtn() {
  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header className='accordion-title'>Productos</Accordion.Header>
        <Accordion.Body>
          <ul className='nav-categorys-navBtn'>
            <Link to='/category/Hoodies'>
              <li>
                Hoodies
              </li>
            </Link>
            <Link to='/category/Remeras'>
              <li>
                Remeras
              </li>
            </Link>
            <Link to='/category/Pantalones/Proximamente'>
              <li>
                Pantalones
              </li>
            </Link>
            <Link to='/category/Shorts/Proximamente'>
              <li>
                Shorts
              </li>
            </Link>
          </ul>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default AccordionBtn;