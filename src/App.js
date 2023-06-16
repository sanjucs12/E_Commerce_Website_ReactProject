import Store from "./Pages/Store";
import About from "./Pages/About";
import Home from "./Pages/Home";
import ContactUs from "./Pages/ContactUs";
import { Route, Routes } from "react-router-dom";
import React from "react";
import NavigationBar from "./Components/Header & Footer/NavBar";
import { useState } from "react";
import Cart from "./Components/Cart/Cart";
import LoginPage from "./Pages/Login";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);
  const showCartHandler = () => {
    setCartIsShown(true);
  };
  const hideCartHandler = () => {
    setCartIsShown(false);
  };
  return (
    <React.Fragment>
      <NavigationBar onShowCart={showCartHandler} />
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/About" element={<About />} />
        <Route exact path="/Store" element={<Store />} />
        <Route exact path="/ContactUs" element={<ContactUs />} />
        <Route exact path="/LoginPage" element={<LoginPage />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;