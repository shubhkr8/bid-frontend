import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <Navbar bg="primary" data-bs-theme="dark" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand>
            <Link to="/">Resoo</Link>
          </Navbar.Brand>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link>
                <Link to="/rfqack">Acknowledge</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/rfqsubmit">Submit</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/rfqtable">Query</Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
