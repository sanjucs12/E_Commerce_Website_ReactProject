import { Fragment } from "react";
import Header from "./Components/Header & Footer/Header";
import AvailableMusicItems from "./Components/Music/AvailableMusicItems";
import Footer from "./Components/Header & Footer/Footer";

function App() {
  return (
    <Fragment>
      <Header />
      <AvailableMusicItems />
      <Footer />
    </Fragment>
  );
}

export default App;
