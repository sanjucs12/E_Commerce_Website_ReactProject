import { Badge, Button } from "react-bootstrap";
import CartIcon from "./CartIcon";

function HeaderCartButton(props) {
  return (
    <Button variant="outline-success" size="lg" onClick={props.onClick}>
      <span>
        <Badge bg="warning">3</Badge>
        {/* <CartIcon/> */}
      </span>
      <span>Your cart</span>
    </Button>
  );
}

export default HeaderCartButton;

