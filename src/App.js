import Store from "./Pages/Store";
import About from "./Pages/About";
import Home from "./Pages/Home";
import ContactUs from "./Pages/ContactUs";
import { Route, Routes } from "react-router-dom";
import React from "react";
import NavigationBar from "./Components/Header & Footer/NavBar";

function App() {
  return (
    <React.Fragment>
      <NavigationBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/About" element={<About />} />
        <Route exact path="/Store" element={<Store />} />
        <Route exact path="/ContactUs" element={<ContactUs />} />
      </Routes>
      {/* <Routes>
        <Route path="/">
          <Home />
        </Route>
        <Route path="/About">
          <About />
        </Route>
        <Route path="/Store">
          <Store />
        </Route>
        <Route path="/ContactUs">
          <ContactUs />
        </Route>
      </Routes> */}
    </React.Fragment>
  );
}

export default App;
