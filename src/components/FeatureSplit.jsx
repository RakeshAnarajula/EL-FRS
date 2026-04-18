import { Container, Row, Col, Badge, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { MdOutlineSecurity, MdOutlineAnalytics, MdBolt } from 'react-icons/md';
import employeeManagement from '../assets/employee-management.jpg';

const FeatureSplit = () => {
  return (
    <Container className="position-relative z-index-2">
      <div className="glass-panel feature-split-shell p-0 overflow-hidden premium-shadow text-dark">
        <Row className="g-0 align-items-center">
          <Col lg={5} className="position-relative h-100">
            <div className="feature-split-media">
              <img
                src={employeeManagement}
                alt="Modern Workspace"
                className="feature-split-image"
              />
            </div>
          </Col>

          <Col lg={7} className="feature-split-content p-5">
            <Badge bg="primary" text="white" className="px-3 py-2 rounded-pill mb-3 shadow-sm border-0">
              Unified Data Center
            </Badge>
            <h2 className="display-6 fw-bold mb-4 text-dark">
              Bring Your Entire Operations Under One Roof
            </h2>
            <p className="lead text-dark mb-4 fs-6" style={{ lineHeight: '1.8' }}>
              Say goodbye to scattered spreadsheets and fragmented communication. ElevateHR unifies your work logs, attendance policies, and branch structures into a secure, single-pane-of-glass dashboard engineered for scaling enterprises.
            </p>

            <Row className="g-4 mb-4">
              <Col sm={6} className="d-flex align-items-start gap-3">
                <div className="p-2 bg-white rounded-3 shadow-sm" style={{ color: '#0b5ed7' }}><MdOutlineSecurity size={24} /></div>
                <div>
                  <h6 className="fw-bold mb-1">Bank-Grade Security</h6>
                  <small className="text-secondary">Role-based access constraints.</small>
                </div>
              </Col>
              <Col sm={6} className="d-flex align-items-start gap-3">
                <div className="p-2 bg-white rounded-3 shadow-sm" style={{ color: '#0b5ed7' }}><MdOutlineAnalytics size={24} /></div>
                <div>
                  <h6 className="fw-bold mb-1">Live Analytics</h6>
                  <small className="text-secondary">Real-time attendance sync.</small>
                </div>
              </Col>
            </Row>

            <Button as={Link} to="/contact" variant="primary" className="rounded-pill px-4 shadow hover-lift d-inline-flex align-items-center gap-2 fw-bold">
              <MdBolt size={20} /> Empower Your Team
            </Button>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default FeatureSplit;
