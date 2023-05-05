import albumb1 from "../Assets/Album 1.png";
import albumb2 from "../Assets/Album 2.png";
import albumb3 from "../Assets/Album 3.png";
import albumb4 from "../Assets/Album 4.png";
import {
  Modal,
  Button,
  ListGroup,
  ListGroupItem,
  Row,
  Col,
} from "react-bootstrap";
import { useContext } from "react";
import CartContext from "../../Store/cart-context";
import CartItem from "./CartItem";


// const dummyCartItems = [
//   {
//     id: "a1",
//     title: "Colors",
//     price: 100,
//     image: <img src={albumb1} />,
//     quantity: 2,
//   },
//   {
//     id: "a2",
//     title: "Black and white Colors",
//     price: 50,
//     image: <img src={albumb2} />,
//     quantity: 2,
//   },
//   {
//     id: "a3",
//     title: "Yellow and Black Colors",
//     price: 70,
//     image: <img src={albumb3} />,
//     quantity: 2,
//   },
//   {
//     id: "a4",
//     title: "Blue Color",
//     price: 100,
//     image: <img src={albumb4} />,
//     quantity: 2,
//   },
// ];

function Cart(props) {
  const cartCtx = useContext(CartContext);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, quantity: 1 });
  };

  const orderItemHandler = () => {
    alert("Thanks for Ordering");
  };

  const cartItems = (
    <ListGroup>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          title={item.title}
          image={item.image}
          quantity={item.quantity}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ListGroup>
  );

  return (
    <Modal show={true} style={{ height: "500px" }}>
      <Modal.Header>
        <Modal.Title>Your Cart</Modal.Title>
        <Button className="float-right" onClick={props.onClose}>
          X
        </Button>
      </Modal.Header>
      <div style={{ height: "400px", overflow: "scroll" }}>
        <Modal.Body>
          {cartItems}
          <Row>
            <Col>
              <h2>Total Amount:</h2>
            </Col>
            <Col>
              <h2>{totalAmount}</h2>
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.onClose}>
            Close
          </Button>
          {hasItems && (
            <Button variant="primary" onClick={orderItemHandler}>
              Order
            </Button>
          )}
        </Modal.Footer>
      </div>
    </Modal>
  );
}

export default Cart;
