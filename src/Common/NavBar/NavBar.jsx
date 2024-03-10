import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {Link} from 'react-router-dom';
import "./NavBar.scss";

export const NavBar = () => {
  return (
    <Container id="NavBar" fluid className="design_navbar">
      <Col>
        <Row>
          <Col>
            <Link to="/" ><p>Inventario Almacen</p></Link>
          </Col>
        </Row>
      </Col>
      <Col xs={7}>
        <Row>
          <Col xs={4} className="text-end">
            <Link to="/movements" ><p>Movimientos</p></Link>
          </Col>
          <Col xs={8} className="text-end">
            <Link to="/products" ><p>Añadir Producto</p></Link>
          </Col>
        </Row>
      </Col>
    </Container>
  );
};
