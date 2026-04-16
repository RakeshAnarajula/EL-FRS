import { Container, Row, Col, Badge, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { SiWhatsapp, SiSalesforce } from 'react-icons/si';
import { MdPayment, MdApi } from 'react-icons/md';

const integrationsList = [
  {
    icon: <SiWhatsapp size={40} className="text-success mb-3" />,
    title: "SMS & WhatsApp API",
    description: "Paid SMS and WhatsApp API integration at Rs. 30 per employee for seamless communication and shift alerts."
  },
  {
    icon: <MdPayment size={40} className="text-primary mb-3" />,
    title: "BBPS Integration Support",
    description: "Built-in support for Bharat Bill Payment System (BBPS), allowing seamless financial transactions and bill tracking directly from the dashboard."
  },
  {
    icon: <MdApi size={40} className="text-warning mb-3" />,
    title: "RESTful Data Export",
    description: "Export all your attendance, leave logs, and roster histories cleanly into your existing business intelligence tools."
  },
  {
    icon: <SiSalesforce size={40} className="text-info mb-3" />,
    title: "CRM Sync",
    description: "Sync employee data, projects, and work statuses with major CRM platforms to align HR metrics with business performance."
  }
];

const integrationFlow = [
  "Connect communication and business systems",
  "Sync employee, attendance, roster, and billing data",
  "Trigger alerts, exports, approvals, and reporting updates"
];

const integrationImage = "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=600";

const automationCards = [
  { title: "Employee alerts", desc: "Send shift, leave, attendance, and approval notifications through connected channels." },
  { title: "Data exports", desc: "Move clean workforce records into reporting, finance, and business intelligence tools." },
  { title: "System sync", desc: "Keep HR, CRM, billing, and branch workflows aligned with fewer manual updates." }
];

const Integrations = () => {
  return (
    <>
      <Container className="section-shell">
        <Row className="align-items-center g-5 mb-5">
          <Col lg={6}>
            <p className="section-eyebrow">Connected operations</p>
            <h1 className="display-4 fw-bold text-gradient">Seamless Integrations</h1>
            <p className="lead text-muted mt-3">
              Connect your HR operations with the tools your business already relies on. Integrate effortlessly with payroll systems, communication platforms, accounting software, and third-party services to create a unified workflow. Reduce manual data entry, improve accuracy, and ensure real-time data synchronization across systems—enabling smoother operations and better collaboration across your organization.            </p>
          </Col>
          <Col lg={6}>
            <div className="visual-panel premium-shadow">
              <img
                src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=1200"
                alt="Connected data systems"
              />
              <div className="image-scrim"></div>
              <div className="position-absolute bottom-0 start-0 p-4 text-white">
                <Badge bg="light" text="dark" className="mb-3">API ready</Badge>
                <h3 className="fw-bold mb-0">Your workforce data can move where work already happens.</h3>
              </div>
            </div>
          </Col>
        </Row>

        <Row className="g-4">
          {integrationsList.map((item, index) => (
            <Col md={6} key={index}>
              <div className="glass-panel p-5 d-flex align-items-start gap-4 premium-shadow h-100 transition-all">
                <div className="flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h4 className="fw-bold mb-2 text-dark">{item.title}</h4>
                  <p className="text-muted mb-0 lh-lg">{item.description}</p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>

      <section className="soft-band section-shell">
        <Container>
          <Row className="align-items-center g-5">
            <Col lg={5}>
              <p className="section-eyebrow">Integration flow</p>
              <h2 className="fw-bold">Clean movement from people data to action.</h2>
            </Col>
            <Col lg={7}>
              <div className="d-flex flex-column gap-3">
                {integrationFlow.map((step, index) => (
                  <div className="glass-panel p-3 d-flex align-items-center gap-3" key={step}>
                    <span className="check-badge">{index + 1}</span>
                    <span className="fw-semibold">{step}</span>
                  </div>
                ))}
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <Container className="section-shell">
        <Row className="g-4 align-items-stretch">
          <Col lg={6}>
            <div className="page-motion-strip premium-shadow h-100">
              <img className="motion-bg-image" src={integrationImage} alt="Integration data workflow" />
              <div className="motion-copy">
                <p className="section-eyebrow text-white-50">Automation layer</p>
                <h3 className="fw-bold mb-0">Keep every system updated from the same workforce truth.</h3>
              </div>
            </div>
          </Col>
          <Col lg={6}>
            <Row className="g-3">
              {automationCards.map((item) => (
                <Col md={12} key={item.title}>
                  <div className="glass-panel layer-card p-4 premium-shadow">
                    <h5 className="fw-bold">{item.title}</h5>
                    <p className="text-muted mb-0">{item.desc}</p>
                  </div>
                </Col>
              ))}
            </Row>
            <Button as={Link} to="/contact" variant="primary" size="lg" className="mt-4 px-4 shadow">
              Connect Your Stack
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Integrations;
