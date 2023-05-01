import { Navbar, Nav, Container } from "react-bootstrap";
import HeaderCartButton from "./HeaderCartButton";

function NavigationBar(props) {
  return (
    <Navbar bg="light" expand="lg" fixed="top">
      <Container>
        <Navbar.Brand href="/">My E-Commerce Website</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/Store">Store</Nav.Link>
            <Nav.Link href="/About">About</Nav.Link>
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
