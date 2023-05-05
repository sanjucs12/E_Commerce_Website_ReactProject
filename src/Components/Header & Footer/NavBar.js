import { Navbar, Nav, Container, Button } from "react-bootstrap";
import HeaderCartButton from "./HeaderCartButton";
import { NavLink } from "react-router-dom";

function NavigationBar(props) {
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
            <NavLink to="/LoginPage" className="nav-link">
              <Button>LogIn</Button>
            </NavLink>
          </Nav>
          <Nav>
            <HeaderCartButton onClick={props.onShowCart} />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
