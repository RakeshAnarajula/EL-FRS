import { Container, Row, Col, Badge, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {
  MdApproval,
  MdFingerprint,
  MdLocationOn,
  MdManageAccounts,
  MdNotificationsActive,
  MdQueryStats,
  MdSettingsSuggest,
  MdShield,
  MdVisibility
} from 'react-icons/md';

const features = [
  { title: "End-to-End Designation Mapping", icon: <MdManageAccounts size={24} /> },
  { title: "Real-time Work Log Submission", icon: <MdQueryStats size={24} /> },
  { title: "Holiday and Shift Validation", icon: <MdApproval size={24} /> },
  { title: "Comprehensive Policy Management", icon: <MdManageAccounts size={24} /> },
  { title: "Custom Branch Types Configuration", icon: <MdLocationOn size={24} /> },
  { title: "Automated Performance Tracking", icon: <MdQueryStats size={24} /> },
  { title: "Role-Based Access Constraints", icon: <MdFingerprint size={24} /> },
  { title: "Dynamic Route and Geo-fencing Support", icon: <MdLocationOn size={24} /> },
  { title: "Smart Shift and Leave Notifications", icon: <MdNotificationsActive size={24} /> }
];

const featureGroups = [
  {
    icon: <MdSettingsSuggest size={24} />,
    title: "Workforce control",
    desc: "Map branch rules, manager approvals, designations, shifts, and employee movement without rebuilding spreadsheets every week."
  },
  {
    icon: <MdShield size={24} />,
    title: "Operational accuracy",
    desc: "Validate holidays, rosters, geo-fencing, late marks, leave balance, and daily logs before they become payroll problems."
  },
  {
    icon: <MdVisibility size={24} />,
    title: "Team visibility",
    desc: "Give HR, admins, and managers reliable views into attendance health, pending actions, and team performance."
  }
];

const featureImages = [
  "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=600"
];

const dailyUse = [
  { title: "Start the day", desc: "Validate attendance, late marks, roster coverage, and active leave requests." },
  { title: "Manage the work", desc: "Review work logs, project status, employee updates, and manager actions." },
  { title: "Close the loop", desc: "Prepare reports, policy exceptions, payroll inputs, and performance signals." }
];

const Features = () => {
  return (
    <>
      <Container className="section-shell">
        <Row className="align-items-center g-5 mb-5">
          <Col lg={6}>
            <p className="section-eyebrow">Feature library</p>
            <h1 className="display-4 fw-bold text-gradient">Platform Features</h1>
            <p className="lead text-muted mt-3">
              Explore the practical tools that make ElevateHR a powerful operating layer for growing enterprise teams. From automated workflows and real-time analytics to seamless integrations, employee self-service, and secure data management, every feature is designed to improve efficiency, reduce manual effort, and enhance decision-making. Empower your organization with a scalable, reliable, and user-friendly HR platform built for modern workforce needs.            </p>
          </Col>
          <Col lg={6}>
            <div className="visual-panel premium-shadow">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1200"
                alt="Team feature planning"
              />
              <div className="image-scrim"></div>
              <div className="position-absolute bottom-0 start-0 p-4 text-white">
                <Badge bg="light" text="dark" className="mb-3">Feature depth</Badge>
                <h3 className="fw-bold">Small controls that protect big operations.</h3>
              </div>
            </div>
          </Col>
        </Row>

        <Row className="g-4">
          {features.map((feature, i) => (
            <Col md={6} lg={4} key={i}>
              <div className="glass-panel p-4 h-100 premium-shadow d-flex align-items-center gap-3">
                <span className="check-badge">{feature.icon}</span>
                <h6 className="mb-0 fw-bold">{feature.title}</h6>
              </div>
            </Col>
          ))}
        </Row>
      </Container>

      <section className="soft-band section-shell">
        <Container>
          <div className="text-center mb-5">
            <p className="section-eyebrow">Built around real teams</p>
            <h2 className="fw-bold">Everything has a job to do.</h2>
          </div>
          <Row className="g-4">
            {featureGroups.map((group) => (
              <Col md={4} key={group.title}>
                <div className="glass-panel p-4 h-100 premium-shadow orange-hover-card">
                  <div className="d-flex align-items-center gap-3 mb-3">
                    <span className="check-badge">{group.icon}</span>
                    <h4 className="fw-bold mb-0">{group.title}</h4>
                  </div>
                  <p className="text-muted mb-0">{group.desc}</p>
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
              <img className="motion-bg-image" src={featureImages[0]} alt="Feature workflow" />
              <div className="motion-copy">
                <p className="section-eyebrow text-white-50">Daily workflow</p>
                <h3 className="fw-bold mb-0">Useful features for the moments your teams repeat every day.</h3>
              </div>
            </div>
          </Col>
          <Col lg={6}>
            <Row className="g-3">
              {dailyUse.map((item) => (
                <Col md={12} key={item.title}>
                  <div className="glass-panel layer-card p-4 premium-shadow">
                    <h5 className="fw-bold">{item.title}</h5>
                    <p className="text-muted mb-0">{item.desc}</p>
                  </div>
                </Col>
              ))}
            </Row>
            <Button as={Link} to="/contact" variant="primary" size="lg" className="mt-4 px-4 shadow">
              Request Feature Demo
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Features;
