import { Container, Row, Col, Badge, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CapabilitiesCarousel from '../components/CapabilitiesCarousel';

const capabilityProof = [
  { value: "Live", label: "branch synchronization" },
  { value: "Smart", label: "roster validation" },
  { value: "Secure", label: "compliance controls" }
];

const capabilityImages = [
  "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1542626991-cbc4e32524cc?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=600"
];

const capabilityLayers = [
  { title: "Plan smarter", desc: "Build rosters, policies, holidays, and workforce structures around actual branch needs." },
  { title: "Operate cleaner", desc: "Keep attendance, work logs, leave approvals, and manager updates aligned throughout the day." },
  { title: "Measure faster", desc: "Turn operational activity into reports, trends, and executive-ready workforce insights." }
];

const CoreCapabilities = () => {
  return (
    <>
      <div className="section-shell">
        <Container>
          <Row className="align-items-center g-5">
            <Col lg={6}>
              <p className="section-eyebrow">Enterprise engine</p>
              <h1 className="display-4 fw-bold text-gradient">Enterprise Capabilities</h1>
              <p className="lead text-muted mt-3">
                A dedicated look at the core processes that power modern HRMS operations across complex teams, including employee lifecycle management, attendance tracking, payroll processing, performance evaluation, and real-time analytics. This ensures streamlined workflows, improved productivity, and better decision-making for organizations of all sizes.              </p>
            </Col>
            <Col lg={6}>
              <div className="visual-panel premium-shadow">
                <img
                  src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=1200"
                  alt="Enterprise capability workshop"
                />
                <div className="image-scrim"></div>
                <div className="position-absolute bottom-0 start-0 p-4 text-white">
                  <Badge bg="light" text="dark" className="mb-3">Capability stack</Badge>
                  <h3 className="fw-bold">Scale the rules without losing the human work.</h3>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <CapabilitiesCarousel />

      <section className="section-shell">
        <Container>
          <Row className="g-4">
            {capabilityProof.map((item) => (
              <Col md={4} key={item.label}>
                <div className="glass-panel metric-tile p-4 h-100 premium-shadow text-center">
                  <h3 className="fw-bolder text-primary">{item.value}</h3>
                  <p className="text-muted mb-0">{item.label}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section className="soft-band section-shell">
        <Container>
          <Row className="g-4 align-items-stretch">
            <Col lg={6}>
              <div className="page-motion-strip premium-shadow h-100">
                <img className="motion-bg-image" src={capabilityImages[0]} alt="Capability planning" />
                <div className="motion-copy">
                  <p className="section-eyebrow text-white-50">Operating layers</p>
                  <h3 className="fw-bold mb-0">Capabilities that support planning, action, and measurement.</h3>
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <Row className="g-3">
                {capabilityLayers.map((item) => (
                  <Col md={12} key={item.title}>
                    <div className="glass-panel layer-card p-4 premium-shadow">
                      <h5 className="fw-bold">{item.title}</h5>
                      <p className="text-muted mb-0">{item.desc}</p>
                    </div>
                  </Col>
                ))}
              </Row>
              <Button as={Link} to="/contact" variant="primary" size="lg" className="mt-4 px-4 shadow">
                Discuss Capabilities
              </Button>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default CoreCapabilities;
