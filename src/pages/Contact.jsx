import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <>
      <Container className="section-shell">
        <Row className="justify-content-center align-items-center g-5">
          <Col lg={5}>
            <h1 className=" fw-bolder text-gradient">Build the right workforce setup for your teams.</h1>

            <div className="visual-panel premium-shadow" style={{ minHeight: '280px' }}>
              <img
                src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=1000"
                alt="Sales consultation"
              />
              <div className="image-scrim"></div>
            </div>
          </Col>

          <Col md={8} lg={6}>
            <div className="glass-panel p-5 premium-shadow rounded-4">
              <div className="text-center mb-4">
                <h1 className="fw-bolder text-dark">Contact Us</h1>
                <p className="text-muted">Discover how EntroLabs HRMS can transform your multi-branch operations.</p>
              </div>
              <Form onSubmit={(e) => e.preventDefault()}>
                <Row className="g-3">
                  <Col md={6}>
                    <Form.Group>
                      <Form.Label className="text-muted small fw-bold">First Name</Form.Label>
                      <Form.Control type="text" placeholder="John" className="p-3 shadow-sm" />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group>
                      <Form.Label className="text-muted small fw-bold">Last Name</Form.Label>
                      <Form.Control type="text" placeholder="Doe" className="p-3 shadow-sm" />
                    </Form.Group>
                  </Col>
                  <Col md={12}>
                    <Form.Group>
                      <Form.Label className="text-muted small fw-bold">Work Email</Form.Label>
                      <Form.Control type="email" placeholder="john@company.com" className="p-3 shadow-sm" />
                    </Form.Group>
                  </Col>
                  <Col md={12}>
                    <Form.Group>
                      <Form.Label className="text-muted small fw-bold">Company Size</Form.Label>
                      <Form.Select className="p-3 shadow-sm text-muted">
                        <option>100 - 500 Employees</option>
                        <option>500 - 2000 Employees</option>
                        <option>2000+ Employees</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>
                  <Col md={12} className="mt-4">
                    <Button
                      as="a"
                      href="mailto:hello@EntroLabsHRMS.com?subject=Demo%20Request"
                      variant="primary"
                      size="lg"
                      className="w-100 rounded-pill shadow"
                    >
                      Request a Demo
                    </Button>
                  </Col>
                </Row>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>


    </>
  );
};

export default Contact;
