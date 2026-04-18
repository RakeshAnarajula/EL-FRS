import { Container, Row, Col, Card, Badge, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {
  MdAutoGraph,
  MdGroups,
  MdOutlineSecurity,
  MdOutlineSpaceDashboard,
  MdOutlineWorkHistory,
  MdRule,
  MdSyncAlt,
  MdVerifiedUser
} from 'react-icons/md';
import productDashboardReview from '../assets/product-dashboard-review.jpg';
import teamPlanningWork from '../assets/team-planning-work.jpg';

const overviewCards = [
  { icon: <MdOutlineSpaceDashboard size={32} />, title: "Dashboard & Analytics", desc: "Gain actionable insights into your workforce with real-time attendance, leave, and productivity signals." },
  { icon: <MdGroups size={32} />, title: "Employee Directory", desc: "Keep employee profiles, branch types, designations, and reporting structure connected in one clean view." },
  { icon: <MdOutlineWorkHistory size={32} />, title: "Work Logs & Status", desc: "Track project progress and daily work updates so managers can act before blockers spread." },
  { icon: <MdOutlineSecurity size={32} />, title: "Settings & Security", desc: "Protect sensitive operations with role-based access, IP rules, policy controls, and audit-friendly settings." }
];

const productFlow = [
  "Employee onboarding and designation mapping",
  "Attendance validation, leave routing, and shift checks",
  "Manager review, payroll readiness, and performance insights"
];

const highlights = [
  { value: "8+", label: "core modules" },
  { value: "24/7", label: "operations visibility" },
  { value: "1", label: "unified dashboard" }
];

const ProductOverview = () => {
  return (
    <>
      <Container className="section-shell">
        <Row className="align-items-center g-5">
          <Col lg={6}>
            <p className="section-eyebrow mb-3">Product overview</p>
            <h1 className="display-4 fw-bold text-gradient">Complete People Operations Platform</h1>
            <p className="lead text-muted mt-4">
              Unify login, dashboard insights, employee directories, attendance logging, leave approvals, and work status monitoring in one enterprise UI.
            </p>
            <div className="d-flex flex-wrap gap-3 mt-4">
              <Button as={Link} to="/modules" variant="primary" size="lg" className="px-4 shadow">Explore Modules</Button>
              <Button as={Link} to="/core-capabilities" variant="outline-success" size="lg" className="px-4">View Workflow</Button>
            </div>
          </Col>
          <Col lg={6}>
            <div className="visual-panel premium-shadow">
              <img
                src={productDashboardReview}
                alt="Operations dashboard review"
              />
              <div className="image-scrim"></div>
              <div className="position-absolute bottom-0 start-0 p-4 text-white">
                <Badge bg="light" text="dark" className="mb-3">Live workforce pulse</Badge>
                <h3 className="fw-bold mb-2">Every team, shift, policy, and approval connected.</h3>
                <p className="mb-0 text-white-50">Built for organizations that need structure without slowing daily work.</p>
              </div>
            </div>
          </Col>
        </Row>

        <Row className="g-4 mt-5">
          {overviewCards.map((item, idx) => (
            <Col md={6} lg={3} key={idx}>
              <Card className="h-100 border-0 glass-panel premium-shadow text-center p-4 orange-hover-card">
                <div className="text-primary mb-3 mx-auto">{item.icon}</div>
                <h5 className="fw-bold text-dark">{item.title}</h5>
                <p className="text-muted small mb-0">{item.desc}</p>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      <section className="soft-band section-shell">
        <Container>
          <Row className="g-5 align-items-center">
            <Col lg={5}>
              <p className="section-eyebrow">How the platform moves</p>
              <h2 className="fw-bold mb-4">From employee data to decisions without manual chasing.</h2>
              <div className="d-flex flex-column gap-3">
                {productFlow.map((step, idx) => (
                  <div className="glass-panel p-3 d-flex align-items-center gap-3" key={step}>
                    <span className="check-badge">{idx + 1}</span>
                    <span className="fw-semibold">{step}</span>
                  </div>
                ))}
              </div>
            </Col>
            <Col lg={7}>
              <Row className="g-3">
                <Col md={7}>
                  <img
                    src={teamPlanningWork}
                    alt="Team planning work"
                    className="w-100 image-zoom premium-shadow"
                    style={{ height: '360px', objectFit: 'cover', borderRadius: '8px' }}
                  />
                </Col>
                <Col md={5} className="d-flex flex-column gap-3">
                  {highlights.map((item) => (
                    <div className="glass-panel metric-tile p-4 premium-shadow h-100" key={item.label}>
                      <h3 className="fw-bolder text-primary mb-1">{item.value}</h3>
                      <p className="text-muted mb-0">{item.label}</p>
                    </div>
                  ))}
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>

      <Container className="section-shell">
        <div className="dark-cta p-5 premium-shadow d-flex align-items-center justify-content-between flex-wrap gap-4 text-white">
          <div>
            <p className="section-eyebrow text-white-50 mb-2">Ready for one control center?</p>
            <h3 className="fw-bolder mb-2">Centralize your operations with clarity.</h3>
            <p className="text-white-50 mb-0">Give leadership and branch teams the same reliable source of workforce truth.</p>
          </div>
          <div className="d-flex gap-3 flex-wrap">
            <Button as={Link} to="/contact" variant="light" size="lg" className="px-5 shadow">
              Get a Demo
            </Button>
            <Button as={Link} to="/enterprise" variant="outline-light" size="lg" className="px-5">
              <MdVerifiedUser className="me-2" /> Security Ready
            </Button>
          </div>
        </div>

        <Row className="g-4 mt-5">
          {[
            { icon: <MdSyncAlt size={26} />, title: "Connected data", desc: "Attendance, leave, payroll inputs, and work logs stay aligned across every branch." },
            { icon: <MdRule size={26} />, title: "Policy confidence", desc: "Branch-specific rules make approval flows predictable and easier to audit." },
            { icon: <MdAutoGraph size={26} />, title: "Leadership clarity", desc: "Dashboards turn daily operations into planning signals for faster decisions." }
          ].map((item) => (
            <Col md={4} key={item.title}>
              <div className="glass-panel p-4 h-100 premium-shadow orange-hover-card">
                <div className="text-primary mb-3">{item.icon}</div>
                <h5 className="fw-bold">{item.title}</h5>
                <p className="text-muted mb-0">{item.desc}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default ProductOverview;
