import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

function Header() {
  return (
    <>
      <Navbar bg="primary" data-bs-theme="dark" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="/img/logo.jpg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            Resso
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
