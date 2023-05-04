import { useState } from "react";
import Header from "../Components/Header & Footer/Header";
import AvailableMusicItems from "../Components/Music/AvailableMusicItems";
import Footer from "../Components/Header & Footer/Footer";
import Cart from "../Components/Cart/Cart";
import CartProvider from "../Store/CartProvider";
import NavigationBar from "../Components/Header & Footer/NavBar";

function Store() {
  // const [cartIsShown, setCartIsShown] = useState(false);
  // const showCartHandler = () => {
  //   setCartIsShown(true);
  // };
  // const hideCartHandler = () => {
  //   setCartIsShown(false);
  // };

  return (
    <div>
      {/* <CartProvider> */}
      {/* <NavigationBar onShowCart={showCartHandler} /> */}
      <Header />
      {/* {cartIsShown && <Cart onClose={hideCartHandler} />} */}
      <AvailableMusicItems />
      <Footer />
      {/* </CartProvider> */}
    </div>
  );
}

export default Store;
