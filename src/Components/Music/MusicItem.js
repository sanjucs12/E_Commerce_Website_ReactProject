import { useContext } from "react";
import CartContext from "../../Store/cart-context";
import { Card, Button } from "react-bootstrap";

function MusicItem(props) {
    const price=`$${props.price.toFixed(2)}`;
    const cartCtx = useContext(CartContext)
    
    let quantity=0;
    const addItemToCartHandler=()=>{
        quantity=quantity+1;
        cartCtx.addItem({
            id:props.id,
            title:props.title,
            quantity:quantity,
            image:props.image,
            price:props.price
        })
    };

  return (
    <Card style={{ width: "18rem", margin: "1rem" }}>
      <Card.Body>
        <Card>{props.image}</Card>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{price}</Card.Text>
        <Button variant="primary" onClick={addItemToCartHandler}>Add to Cart</Button>
      </Card.Body>
    </Card>
  );
}

export default MusicItem;
