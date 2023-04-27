import NavigationBar from "./NavBar";
function Header(props) {
  return (
    <header>
      <NavigationBar onShowCart={props.onShowCart}/>
      <div
        className="d-flex align-items-center justify-content-center flex-grow-1 bg-secondary"
        style={{ height: "30vh" }}
      >
        <h1 className="text-center text-light text-uppercase display-1 fw-bold">
          THE GENERICS
        </h1>
      </div>
    </header>
  );
}

export default Header;
