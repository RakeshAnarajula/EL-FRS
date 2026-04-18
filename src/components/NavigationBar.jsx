import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { NavLink, Link } from 'react-router-dom';
import ELlogo from "../assets/ELlogo.png";

const NavigationBar = () => {
  return (
    <Navbar bg="white" expand="lg" fixed="top" className="premium-shadow site-navbar">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img
            src={ELlogo}
            alt="EntroLabs HRMS"
            className="site-logo"
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-lg-center site-nav-links">
            <Nav.Link as={NavLink} to="/" end>Home</Nav.Link>
            <Nav.Link as={NavLink} to="/product-overview">Product</Nav.Link>
            <Nav.Link as={NavLink} to="/core-capabilities">Capabilities</Nav.Link>
            <Nav.Link as={NavLink} to="/modules">Modules</Nav.Link>
            <Nav.Link as={NavLink} to="/features">Features</Nav.Link>
            <Nav.Link as={NavLink} to="/pricing">Pricing</Nav.Link>
            <Nav.Link as={NavLink} to="/integrations">Integrations</Nav.Link>
            <Nav.Link as={NavLink} to="/enterprise">Enterprise</Nav.Link>
            <Button as={Link} to="/contact" variant="primary" className="site-contact-button ms-lg-3 px-4 rounded-pill shadow-sm">
              Contact Us
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
