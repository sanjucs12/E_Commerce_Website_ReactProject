import Store from "./Pages/Store";
import About from "./Pages/About";
import Home from "./Pages/Home";
import ContactUs from "./Pages/ContactUs";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/About" element={<About />} />
      <Route exact path="/Store" element={<Store />} />
      <Route exact path="/ContactUs" element={<ContactUs />} />
    </Routes>
  );
}

export default App;
