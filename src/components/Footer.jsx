import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ELlogo from "../assets/ELlogo.png";

const Footer = () => {
  const scrollHomeToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="pt-5 mt-5 pb-2 text-white" style={{ backgroundColor: '#070738', borderTop: 'none' }}>
      <Container>
        <Row className="gy-4 mb-5">
          <Col lg={4}>
            <div className="d-flex align-items-center mb-4">
              <Link to="/" onClick={scrollHomeToTop} className="bg-white p-3 rounded-3 shadow-sm d-inline-block">
                <img
                  src={ELlogo}
                  alt="EntroLabs HRMS"
                  style={{ height: "45px", objectFit: "contain" }}
                />
              </Link>
            </div>
            <p className="text-white-50 pe-md-5">
              The premium enterprise SaaS platform for modern workforce management. Streamline operations, empower employees, and scale with confidence.
            </p>
          </Col>
          <Col lg={2} md={4}>
            <h6 className="fw-bold mb-3 text-white">Product</h6>
            <ul className="list-unstyled mb-0">
              <li className="mb-2"><Link to="/product-overview" className="text-white-50 text-decoration-none">Overview</Link></li>
              <li className="mb-2"><Link to="/core-capabilities" className="text-white-50 text-decoration-none">Capabilities</Link></li>
              <li className="mb-2"><Link to="/modules" className="text-white-50 text-decoration-none">Modules</Link></li>
              <li className="mb-2"><Link to="/features" className="text-white-50 text-decoration-none">Features</Link></li>
            </ul>
          </Col>
          <Col lg={2} md={4}>
            <h6 className="fw-bold mb-3 text-white">Solutions</h6>
            <ul className="list-unstyled mb-0">
              <li className="mb-2"><Link to="/enterprise" className="text-white-50 text-decoration-none">Enterprise</Link></li>
              <li className="mb-2"><Link to="/integrations" className="text-white-50 text-decoration-none">Integrations</Link></li>
              <li className="mb-2"><Link to="/pricing" className="text-white-50 text-decoration-none">Pricing</Link></li>
            </ul>
          </Col>
          <Col lg={4} md={4}>
            <h6 className="fw-bold mb-3 text-white">Contact Us</h6>
            <p className="text-white-50 mb-1">Email: hello@EntroLabsHRMS.com</p>
            <p className="text-white-50">Phone: +1 (800) 123-4567</p>
          </Col>
        </Row>
        <div className="text-center py-4 border-top border-secondary">
          <small className="text-white-50">&copy; {new Date().getFullYear()} EntroLabs HRMS. All rights reserved.</small>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
