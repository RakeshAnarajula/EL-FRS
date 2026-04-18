import { Container, Row, Col, Badge, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { MdGroups, MdInsights, MdStorefront } from 'react-icons/md';
import ModulesOverlay from '../components/ModulesOverlay';
import dashboardAnalytics from '../assets/dashboard-analytics.jpg';
import enterpriseOffice from '../assets/enterprise-office.jpg';

const moduleStories = [
  {
    icon: <MdGroups size={24} />,
    title: "For HR teams",
    desc: "Handle employee records, leaves, attendance exceptions, and policy changes from a single controlled workspace."
  },
  {
    icon: <MdStorefront size={24} />,
    title: "For branch managers",
    desc: "See who is present, who is on leave, what work is pending, and where roster gaps need attention."
  },
  {
    icon: <MdInsights size={24} />,
    title: "For leadership",
    desc: "Read workforce health through trends, utilization, compliance status, and performance-ready reports."
  }
];

const moduleImage = dashboardAnalytics;

const moduleJourney = [
  { title: "Capture", desc: "Collect attendance, leave requests, work logs, and employee changes from the right users." },
  { title: "Validate", desc: "Apply branch, role, holiday, shift, and security rules before data reaches leadership reports." },
  { title: "Act", desc: "Route approvals, trigger notifications, prepare payroll inputs, and surface manager priorities." }
];

const Modules = () => {
  return (
    <>
      <div className="section-shell">
        <Container>
          <Row className="align-items-center g-5">
            <Col lg={6}>
              <p className="section-eyebrow">Module command center</p>
              <h1 className="display-4 fw-bold text-gradient">Platform Modules</h1>
              <p className="lead text-muted mt-3">
                Move through every major workforce operation with modules designed to work seamlessly together from day one. From employee management and attendance tracking to payroll, performance evaluation, and reporting, each module is built to simplify processes, improve efficiency, and provide real-time insights. Experience a unified platform that scales with your organization and supports smarter workforce decisions.              </p>
            </Col>
            <Col lg={6}>
              <div className="visual-panel premium-shadow">
                <img
                  src={enterpriseOffice}
                  alt="Modern operations workspace"
                />
                <div className="image-scrim"></div>
                <div className="position-absolute bottom-0 start-0 p-4 text-white">
                  <Badge bg="light" text="dark" className="mb-3">Interactive modules</Badge>
                  <h3 className="fw-bold mb-0">Choose a module and see the work change instantly.</h3>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <ModulesOverlay />

      <section className="soft-band section-shell mt-5">
        <Container>
          <Row className="g-4">
            {moduleStories.map((story) => (
              <Col md={4} key={story.title}>
                <div className="glass-panel p-4 h-100 premium-shadow orange-hover-card">
                  <div className="d-flex align-items-center gap-3 mb-3">
                    <span className="check-badge">{story.icon}</span>
                    <h4 className="fw-bold mb-0">{story.title}</h4>
                  </div>
                  <p className="text-muted mb-0">{story.desc}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <Container className="section-shell">
        <Row className="g-4 align-items-stretch">
          <Col lg={6}>
            <div className="page-motion-strip premium-shadow h-100">
              <img className="motion-bg-image" src={moduleImage} alt="Module workspace" />
              <div className="motion-copy">
                <p className="section-eyebrow text-white-50">Module journey</p>
                <h3 className="fw-bold mb-0">Every module moves work from capture to action.</h3>
              </div>
            </div>
          </Col>
          <Col lg={6}>
            <Row className="g-3">
              {moduleJourney.map((item) => (
                <Col md={12} key={item.title}>
                  <div className="glass-panel layer-card p-4 premium-shadow">
                    <h5 className="fw-bold">{item.title}</h5>
                    <p className="text-muted mb-0">{item.desc}</p>
                  </div>
                </Col>
              ))}
            </Row>
            <Button as={Link} to="/contact" variant="primary" size="lg" className="mt-4 px-4 shadow">
              Build Your Module Stack
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Modules;
