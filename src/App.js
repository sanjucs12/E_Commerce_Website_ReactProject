import { useState } from "react";
import Header from "./Components/Header & Footer/Header";
import AvailableMusicItems from "./Components/Music/AvailableMusicItems";
import Footer from "./Components/Header & Footer/Footer";
import Cart from "./Components/Cart/Cart";
import CartProvider from "./Store/CartProvider";

function App() {

 const [cartIsShown,setCartIsShown] = useState(false);
 const showCartHandler = ()=>{
  setCartIsShown(true)
 }
 const hideCartHandler = ()=>{
  setCartIsShown(false)
 }

  return (
    <CartProvider>
      <Header onShowCart={showCartHandler}/>
      {cartIsShown && <Cart onClose={hideCartHandler}/>}
      <AvailableMusicItems />
      <Footer />
    </CartProvider>
  );
}

export default App;
