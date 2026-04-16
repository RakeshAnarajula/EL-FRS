import { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const initialForm = {
  firstName: '',
  lastName: '',
  email: '',
  companySize: ''
};

const Contact = () => {
  const [formData, setFormData] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value
    }));

    if (errors[name]) {
      setErrors((current) => ({
        ...current,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const nextErrors = {};
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.firstName.trim()) {
      nextErrors.firstName = 'First name is required.';
    }

    if (!formData.lastName.trim()) {
      nextErrors.lastName = 'Last name is required.';
    }

    if (!formData.email.trim()) {
      nextErrors.email = 'Work email is required.';
    } else if (!emailPattern.test(formData.email.trim())) {
      nextErrors.email = 'Enter a valid work email address.';
    }

    if (!formData.companySize) {
      nextErrors.companySize = 'Please select your company size.';
    }

    return nextErrors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitMessage('');

    const nextErrors = validateForm();
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      return;
    }

    const subject = encodeURIComponent('Demo Request');
    const body = encodeURIComponent(
      `First Name: ${formData.firstName.trim()}\n` +
      `Last Name: ${formData.lastName.trim()}\n` +
      `Work Email: ${formData.email.trim()}\n` +
      `Company Size: ${formData.companySize}`
    );

    setSubmitMessage('Thanks. Your email app will open with the demo request details.');
    window.location.href = `mailto:hello@EntroLabsHRMS.com?subject=${subject}&body=${body}`;
  };

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
              <Form noValidate onSubmit={handleSubmit}>
                <Row className="g-3">
                  <Col md={6}>
                    <Form.Group controlId="contactFirstName">
                      <Form.Label className="text-muted small fw-bold">First Name</Form.Label>
                      <Form.Control
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        placeholder="John"
                        className="p-3 shadow-sm"
                        isInvalid={Boolean(errors.firstName)}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.firstName}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group controlId="contactLastName">
                      <Form.Label className="text-muted small fw-bold">Last Name</Form.Label>
                      <Form.Control
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        placeholder="Doe"
                        className="p-3 shadow-sm"
                        isInvalid={Boolean(errors.lastName)}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.lastName}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                  <Col md={12}>
                    <Form.Group controlId="contactEmail">
                      <Form.Label className="text-muted small fw-bold">Work Email</Form.Label>
                      <Form.Control
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@company.com"
                        className="p-3 shadow-sm"
                        isInvalid={Boolean(errors.email)}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.email}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                  <Col md={12}>
                    <Form.Group controlId="contactCompanySize">
                      <Form.Label className="text-muted small fw-bold">Company Size</Form.Label>
                      <Form.Select
                        name="companySize"
                        value={formData.companySize}
                        onChange={handleChange}
                        className="p-3 shadow-sm text-muted"
                        isInvalid={Boolean(errors.companySize)}
                      >
                        <option value="">Select company size</option>
                        <option>100 - 500 Employees</option>
                        <option>500 - 2000 Employees</option>
                        <option>2000+ Employees</option>
                      </Form.Select>
                      <Form.Control.Feedback type="invalid">
                        {errors.companySize}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                  {submitMessage && (
                    <Col md={12}>
                      <div className="alert alert-success mb-0" role="alert">
                        {submitMessage}
                      </div>
                    </Col>
                  )}
                  <Col md={12} className="mt-4">
                    <Button
                      type="submit"
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
