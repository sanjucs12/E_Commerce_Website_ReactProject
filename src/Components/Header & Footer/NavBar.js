import { Navbar, Nav, Container } from "react-bootstrap";
import HeaderCartButton from "./HeaderCartButton";
import { useState } from "react";
import { NavLink, Link } from "react-router-dom";

function NavigationBar(props) {
  const [cartButtonIsShown, setCartButtonIsShown] = useState(true);
  const hideCartButtonHandler = () => {
    setCartButtonIsShown(false);
  };

  return (
    <Navbar bg="light" expand="lg" fixed="top">
      <Container>
        <Navbar.Brand href="/">My E-Commerce Website</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav
            className="me-auto"
            style={{ fontSize: "1.2rem", fontWeight: "500" }}
          >
            <NavLink to="/" className="nav-link">
              Home
            </NavLink>
            <NavLink to="/Store" className="nav-link">
              Store
            </NavLink>
            <NavLink to="/About" className="nav-link">
              About
            </NavLink>
            <NavLink to="/ContactUs" className="nav-link">
              Contact US
            </NavLink>
          </Nav>
          <Nav>
            {cartButtonIsShown && (
              <HeaderCartButton onClick={props.onShowCart} />
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
