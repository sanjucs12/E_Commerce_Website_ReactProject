import { Fragment,useState } from "react";
import Header from "./Components/Header & Footer/Header";
import AvailableMusicItems from "./Components/Music/AvailableMusicItems";
import Footer from "./Components/Header & Footer/Footer";
import Cart from "./Components/Cart/Cart";

function App() {

 const [cartIsShown,setCartIsShown] = useState(false);
 const showCartHandler = ()=>{
  setCartIsShown(true)
 }
 const hideCartHandler = ()=>{
  setCartIsShown(false)
 }

  return (
    <Fragment>
      <Header onShowCart={showCartHandler}/>
      {cartIsShown && <Cart onClose={hideCartHandler}/>}
      <AvailableMusicItems />
      <Footer />
    </Fragment>
  );
}

export default App;
