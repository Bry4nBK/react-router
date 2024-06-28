import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <>
      <Navbar bg="danger" data-bs-theme="dark">
        <Container>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/" className='inicio'>🏠 Home</Nav.Link>
            <Nav.Link as={Link} to="/contact" className='contacto'>📒 Contacto</Nav.Link>
          </Nav>
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Brand href="#home">Happy Cake 🍰</Navbar.Brand>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
