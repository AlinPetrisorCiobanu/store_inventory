import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Home.scss";

export const Home = () => {
  return (
    <Container id="Main" fluid className="text-center design_home">
      <Row className="d-flex justify-content-center mt-5 text-start align-items-middle">
        <Col xs={5}>
          <Row>
            <Col>
              <h3>Nombre</h3>
            </Col>
          </Row>
        </Col>
        <Col xs={2}> 
          <Row>
            <Col>
              <h3>Cantidad</h3>
            </Col>
          </Row>
        </Col>
        <Col xs={2} className="box_add">
          <Row>
            <Col>
              <h3>Entrada</h3>
            </Col>
          </Row>
        </Col>
        <Col xs={2} className="box_remove">
          <Row>
            <Col>
              <h3>Salida</h3>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row className="d-flex justify-content-center mt-2 text-start align-items-middle">
        <Col xs={5}>
          <Row>
            <Col>
              <h3>Prueba de la Prueba</h3>
            </Col>
          </Row>
        </Col>
        <Col xs={2} className="text-center"> 
          <Row>
            <Col>
              <h3>5</h3>
            </Col>
          </Row>
        </Col>
        <Col xs={2} className="box_add">
          <Row>
            <Col>
              <h3>Entrada</h3>
            </Col>
          </Row>
        </Col>
        <Col xs={2} className="box_remove">
          <Row>
            <Col>
              <h3>Salida</h3>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row className="d-flex justify-content-center mt-2 text-start align-items-middle">
        <Col xs={5}>
          <Row>
            <Col>
              <h3>Prueba dos</h3>
            </Col>
          </Row>
        </Col>
        <Col xs={2} className="text-center"> 
          <Row>
            <Col>
              <h3>1600</h3>
            </Col>
          </Row>
        </Col>
        <Col xs={2} className="box_add">
          <Row>
            <Col>
              <h3>Entrada</h3>
            </Col>
          </Row>
        </Col>
        <Col xs={2} className="box_remove">
          <Row>
            <Col>
              <h3>Salida</h3>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row className="d-flex justify-content-center mt-2 text-start align-items-middle">
        <Col xs={5}>
          <Row>
            <Col>
              <h3>Prueba tres</h3>
            </Col>
          </Row>
        </Col>
        <Col xs={2} className="text-center"> 
          <Row>
            <Col>
              <h3>101600</h3>
            </Col>
          </Row>
        </Col>
        <Col xs={2} className="box_add">
          <Row>
            <Col>
              <h3>Entrada</h3>
            </Col>
          </Row>
        </Col>
        <Col xs={2} className="box_remove">
          <Row>
            <Col>
              <h3>Salida</h3>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};
