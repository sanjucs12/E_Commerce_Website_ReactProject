import { Fragment } from "react";
import Header from "./Components/Header & Footer/Header";
import AvailableMusicItems from "./Components/Music/AvailableMusicItems";
import Footer from "./Components/Header & Footer/Footer";
import Cart from "./Components/Cart/Cart";

function App() {
  return (
    <Fragment>
      <Header />
      <Cart />
      <AvailableMusicItems />
      <Footer />
    </Fragment>
  );
}

export default App;
