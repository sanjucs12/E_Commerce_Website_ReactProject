
import { Card, Button } from "react-bootstrap";

function MusicItem(props) {
    const price=`$${props.price.toFixed(2)}`;
  return (
    <Card style={{ width: "18rem", margin: "1rem" }}>
      <Card.Body>
        <Card>{props.image}</Card>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{price}</Card.Text>
        <Button variant="primary">Add to Cart</Button>
      </Card.Body>
    </Card>
  );
}

export default MusicItem;
