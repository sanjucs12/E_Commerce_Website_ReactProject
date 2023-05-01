import Store from "./Pages/Store";
import About from "./Pages/About";
import Home from "./Pages/Home";
import { BrowserRouter as Main, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Main>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/About" element={<About />} />
        <Route exact path="/Store" element={<Store />} />
      </Routes>
    </Main>
  );
}

export default App;
