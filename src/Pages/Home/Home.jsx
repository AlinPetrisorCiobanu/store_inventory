import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Home.scss";

export const Home = () => {
  return (
    <Container id="Main" fluid className="text-center design_home">
      <Row>
        <Col xs={1}>
          <Row>
            <Col>
              <h1>ID</h1>
            </Col>
          </Row>
        </Col>
        <Col xs={5}>
          <Row>
            <Col>
              <h1>Nombre</h1>
            </Col>
          </Row>
        </Col>
        <Col xs={2}> 
          <Row>
            <Col>
              <h1>Cantidad</h1>
            </Col>
          </Row>
        </Col>
        <Col xs={2} className="box_add">
          <Row>
            <Col>
              <h1>Añadir</h1>
            </Col>
          </Row>
        </Col>
        <Col xs={2} className="box_remove">
          <Row>
            <Col>
              <h1>Quitar</h1>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};
