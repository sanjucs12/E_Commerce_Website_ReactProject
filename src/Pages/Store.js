import React from "react";
import Header from "../Components/Header & Footer/Header";
import AvailableMusicItems from "../Components/Music/AvailableMusicItems";
import Footer from "../Components/Header & Footer/Footer";

function Store() {
  return (
    <React.Fragment>
      <Header />
      <AvailableMusicItems />
      <Footer />
    </React.Fragment>
  );
}

export default Store;
