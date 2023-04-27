import albumb1 from "../Assets/Album 1.png";
import albumb2 from "../Assets/Album 2.png";
import albumb3 from "../Assets/Album 3.png";
import albumb4 from "../Assets/Album 4.png";
import { Modal, Button, ListGroup, ListGroupItem } from "react-bootstrap";

const dummyCartItems = [
  {
    id: "a1",
    title: "Colors",
    price: 100,
    image: <img src={albumb1} />,
    quantity: 2,
  },
  {
    id: "a2",
    title: "Black and white Colors",
    price: 50,
    image: <img src={albumb2} />,
    quantity: 2,
  },
  {
    id: "a3",
    title: "Yellow and Black Colors",
    price: 70,
    image: <img src={albumb3} />,
    quantity: 2,
  },
  {
    id: "a4",
    title: "Blue Color",
    price: 100,
    image: <img src={albumb4} />,
    quantity: 2,
  },
];

function Cart(props) {
  const cartItems = (
    <ListGroup>
      {dummyCartItems.map((item) => (
        <ListGroupItem>{item.title}</ListGroupItem>
      ))}
    </ListGroup>
  );

  return (
    <Modal show={true} onHide={() => {}}>
      <Modal.Header>
        <Modal.Title>Your Cart</Modal.Title>
        <Button className="float-right" onClick={props.onClose}>
          X
        </Button>
      </Modal.Header>
      <Modal.Body>
        {cartItems}
        <div>
          <span>Total Amount:</span>
          <span>$100</span>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.onClose}>
          Close
        </Button>
        <Button variant="primary">Order</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default Cart;
