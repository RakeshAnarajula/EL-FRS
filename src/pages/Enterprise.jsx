import { Container, Row, Col, Badge, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const operations = [
  {
    title: "Targeted Workforce Management",
    desc: "Deploy specialized hiring and workforce management support engineered specifically for the dynamic team age group 21 to 24, maximizing young talent retention."
  },
  {
    title: "Performance-based Incentives",
    desc: "Automatically calculate and distribute performance-based incentives directly based on attendance records, project completion, and shift punctuality."
  },
  {
    title: "Multi-Branch Control",
    desc: "Centralize your policies, handle diverse branch types, and unify operations across regions from a single master dashboard."
  }
];

const enterpriseLayers = [
  "Central governance for every branch and role",
  "Dedicated setup for policies, approvals, and security",
  "Executive visibility across attendance, work, and incentives"
];

const enterpriseImage = "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=600";

const governance = [
  { title: "Policy governance", desc: "Run different leave, shift, access, and compliance rules without losing central oversight." },
  { title: "Branch intelligence", desc: "Compare attendance health, staffing gaps, and operational signals across every location." },
  { title: "Executive controls", desc: "Give leadership a clean view of uptime, productivity, incentives, and risk." }
];

const Enterprise = () => {
  return (
    <>
      <Container className="section-shell">
        <Row className="align-items-center g-5 mb-5">
          <Col lg={7}>
            <Badge bg="dark" className="px-3 py-2 mb-3">ElevateHR Enterprise</Badge>
            <h1 className="display-4 fw-bold text-gradient">Built for Scale and Complexity</h1>
            <p className="lead text-muted mt-3">
              When standard HR solutions fail to handle multi-branch rosters and specialized workforce controls, Enterprise gives leadership the structure to move faster.
            </p>
            <Button as={Link} to="/contact" variant="primary" size="lg" className="mt-3 px-4 shadow">Plan Enterprise Rollout</Button>
          </Col>
          <Col lg={5}>
            <div className="glass-panel p-4 premium-shadow">
              {enterpriseLayers.map((layer, index) => (
                <div className="d-flex align-items-center gap-3 mb-3" key={layer}>
                  <span className="check-badge">{index + 1}</span>
                  <span className="fw-semibold">{layer}</span>
                </div>
              ))}
            </div>
          </Col>
        </Row>

        <Row className="g-5 mt-3 align-items-center">
          <Col lg={6}>
            <div className="position-relative">
              <img
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800"
                alt="Enterprise Operations"
                className="w-100 rounded-4 premium-shadow"
              />
              <div className="position-absolute bottom-0 end-0 p-4 bg-white rounded-start-4 shadow-sm" style={{ transform: 'translate(20px, 20px)' }}>
                <h4 className="fw-bolder text-primary mb-0">99.9% Uptime</h4>
                <small className="text-muted">Enterprise SLA</small>
              </div>
            </div>
          </Col>
          <Col lg={6} className="ps-lg-5">
            <div className="d-flex flex-column gap-4">
              {operations.map((op, idx) => (
                <div key={idx} className="glass-panel p-4 enterprise-operation-card shadow-sm hover-lift transition-all">
                  <h5 className="fw-bold mb-2">{op.title}</h5>
                  <p className="text-muted mb-0">{op.desc}</p>
                </div>
              ))}
            </div>
          </Col>
        </Row>

        <section className="mt-5">
          <Row className="g-4 align-items-stretch">
            <Col lg={5}>
              <div className="page-motion-strip premium-shadow h-100">
                <img className="motion-bg-image" src={enterpriseImage} alt="Enterprise team operations" />
                <div className="motion-copy">
                  <p className="section-eyebrow text-white-50">Enterprise rhythm</p>
                  <h3 className="fw-bold mb-0">Govern many teams without slowing one team down.</h3>
                </div>
              </div>
            </Col>
            <Col lg={7}>
              <Row className="g-3 h-100">
                {governance.map((item) => (
                  <Col md={4} key={item.title}>
                    <div className="glass-panel layer-card p-4 h-100 premium-shadow">
                      <h5 className="fw-bold">{item.title}</h5>
                      <p className="text-muted mb-0">{item.desc}</p>
                    </div>
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
        </section>

        <div className="dark-cta p-5 premium-shadow text-white mt-5">
          <Row className="align-items-center g-4">
            <Col lg={8}>
              <p className="section-eyebrow text-white-50">Enterprise operating model</p>
              <h3 className="fw-bolder">Turn branch complexity into a repeatable system.</h3>
              <p className="text-white-50 mb-0">Give HR, admins, managers, and leadership the same reliable structure.</p>
            </Col>
            <Col lg={4} className="text-lg-end">
              <Button as={Link} to="/contact" variant="light" size="lg" className="px-4">Contact Us</Button>
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
};

export default Enterprise;
