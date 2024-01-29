import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

function Header() {
  return (
    <>
      <Navbar bg="primary" data-bs-theme="dark" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">Resoo</Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
