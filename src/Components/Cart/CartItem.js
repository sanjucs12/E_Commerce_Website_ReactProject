import { Card, Row, Col, Button } from "react-bootstrap";

function CartItem(props) {
  const price = `$${props.price.toFixed(2)}`;
  return (
    <li>
      <Row>
        <Col md={4}>
          <Card>{props.image}</Card>
        </Col>
        <Col md={4}>
          <h4>{props.title}</h4>
          <div>
            <span>{price}</span>
            <span>x {props.quantity}</span>
          </div>
        </Col>
        <Col md={4}>
          <Button variant="danger" onClick={props.onRemove}>
            −
          </Button>
          <Button variant="success" onClick={props.onAdd}>
            +
          </Button>
        </Col>
      </Row>
    </li>
  );
}

export default CartItem;
