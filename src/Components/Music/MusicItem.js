import { useContext } from "react";
import CartContext from "../../Store/cart-context";
import { Card, Button } from "react-bootstrap";
import axios from "axios";

function MusicItem(props) {
  const price = `$${props.item.price.toFixed(2)}`;
  const cartCtx = useContext(CartContext);

  if (localStorage.getItem("email")) {
    var formatedEmail = localStorage
      .getItem("email")
      .replace("@", "")
      .replace(".", "");
    // console.log("FORMATED ", formatedEmail);
  }

  //let quantity = 0;
  async function addItemToCartHandler(item) {
    // quantity = quantity + 1;
    // cartCtx.addItem({
    //   id: props.id,
    //   title: props.title,
    //   quantity: quantity,
    //   image: props.image,
    //   price: props.price,
    // });

    /////CRUD CRUD//////////

    const obj = {
      id: item.id,
      title: item.title,
      quantity: item.quantity,
      image: item.image,
      price: item.price,
    };

    cartCtx.addItem(obj);
    const res = await axios.get(
      `https://crudcrud.com/api/00c5fd86f40f4a878dadc85b4e2c4bed/cart${formatedEmail}`
    );
    let data = await res.data;
    console.log("put data", data);
    let idx = data.findIndex((item) => item.title === obj.title);
    console.log("index", idx);

    if (idx >= 0) {
      var id = data[idx].id;
      var quan = data[idx].quantity;
    }
    console.log("get data", data);

    if (idx >= 0) {
      const res = await axios.put(
        `https://crudcrud.com/api/00c5fd86f40f4a878dadc85b4e2c4bed/cart${formatedEmail}/${id}`,
        { ...obj, quantity: quan + 1 }
      );
      const data = await res.data;
      cartCtx.addItem(obj);
      console.log("put data", data);
      console.log("PUT", res);
    } else {
      const res = await axios.post(
        `https://crudcrud.com/api/00c5fd86f40f4a878dadc85b4e2c4bed/cart${formatedEmail}`,
        obj
      );
      const data = await res.data;
      cartCtx.addItem(obj);
      console.log("POST New data", data, res);
    }
  }

  return (
    <Card style={{ width: "18rem", margin: "1rem" }}>
      <Card.Body>
        <Card>{props.item.image}</Card>
        <Card.Title>{props.item.title}</Card.Title>
        <Card.Text>{price}</Card.Text>
        <Button
          variant="primary"
          onClick={() => {
            addItemToCartHandler({ ...props.item, quantity: 1 });
          }}
        >
          Add to Cart
        </Button>
      </Card.Body>
    </Card>
  );
}

export default MusicItem;
