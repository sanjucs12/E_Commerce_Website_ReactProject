import { Container, Row, Col } from "react-bootstrap";
import icon1 from "../Assets/icon1.png";
import icon2 from "../Assets/icon2.png";
import icon3 from "../Assets/icon3.png";

function Footer() {
  return (
    <footer>
      <Container fluid className="py-2 bg-secondary">
        <Row>
          <Col md={8}>
            <h4 className="text-left text-light text-uppercase display-1 fw-bold"style={{ fontSize: '2rem' }}>The Generics</h4>
          </Col>
          <Col md={4} className="d-flex justify-content-end">
            <img
              src={icon1}
              alt="icon1"
              width="30"
              height="30"
              className="me-2"
            />
            <img
              src={icon2}
              alt="icon2"
              width="30"
              height="30"
              className="me-2"
            />
            <img
              src={icon3}
              alt="icon3"
              width="30"
              height="30"
              className="me-2"
            />
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
