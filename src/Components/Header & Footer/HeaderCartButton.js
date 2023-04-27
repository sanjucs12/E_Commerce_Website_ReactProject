import { Badge, Button } from "react-bootstrap";
import CartIcon from "./CartIcon";
import { useContext } from "react";
import CartContext from "../../Store/cart-context";

function HeaderCartButton(props) {
  const cartCtx = useContext(CartContext);
  const numberOfCartItems = cartCtx.items.reduce((curNumber,item)=>{ return curNumber+item.quantity},0)
  return (
    <Button variant="outline-success" size="lg" onClick={props.onClick}>
      <span>
        <Badge bg="warning">{numberOfCartItems}</Badge>
        {/* <CartIcon/> */}
      </span>
      <span>Your cart</span>
    </Button>
  );
}

export default HeaderCartButton;

