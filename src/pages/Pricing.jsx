import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { MdNotificationsActive, MdRocketLaunch, MdTune } from 'react-icons/md';

const plans = [
  {
    name: "Premium Plan",
    price: "Custom",
    tone: "text-primary",
    button: "Get Started",
    variant: "outline-primary",
    features: [
      "Full Dashboard & Analytics",
      "Advanced Attendance Tracking",
      "Leave Management Approvals",
      "Shift & Roster Planning",
      "Basic Reporting Tools"
    ]
  },
  {
    name: "Enterprise Plan",
    price: "Let's Talk",
    tone: "text-dark",
    button: "Contact Sales",
    variant: "primary",
    recommended: true,
    features: [
      "All Premium Features",
      "Custom Policy & Compliance Templates",
      "Dedicated Account Manager",
      "Performance-based Incentives Engine",
      "Hiring tools for team age group 21 to 24"
    ]
  }
];

const buyingNotes = [
  {
    icon: <MdRocketLaunch size={24} />,
    text: "Implementation planning for multi-branch rollout"
  },
  {
    icon: <MdTune size={24} />,
    text: "Configuration support for policies, designations, and approvals"
  },
  {
    icon: <MdNotificationsActive size={24} />,
    text: "Optional communication pack for employee notifications"
  }
];

const pricingImages = [
  "https://images.unsplash.com/photo-1554224154-26032ffc0d07?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=600"
];

const valueCards = [
  { title: "No surprise setup", desc: "Plan modules, policies, branches, and reporting before launch." },
  { title: "Scale when ready", desc: "Start with the essentials and add enterprise controls when operations grow." },
  { title: "Clear add-ons", desc: "Keep communication and advanced workflow costs visible from the beginning." }
];

const Pricing = () => {
  return (
    <>
      <Container className="section-shell">
        <Row className="align-items-center g-5 mb-5">
          <Col lg={6}>
            <p className="section-eyebrow">Flexible plans</p>
            <h1 className="display-4 fw-bold text-gradient">Simple, Transparent Pricing</h1>
            <p className="lead text-muted mt-3">Choose the right setup for your workforce operations with flexible and clearly defined plans. Whether you’re a growing team or a large enterprise, our pricing is designed to scale with your needs. Enjoy predictable costs, no hidden charges, and access to powerful features that deliver real value—helping you manage your workforce efficiently and confidently.</p>
          </Col>
          <Col lg={6}>
            <div className="visual-panel premium-shadow">
              <img
                src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=1200"
                alt="Pricing and finance planning"
              />
              <div className="image-scrim"></div>
              <div className="position-absolute bottom-0 start-0 p-4 text-white">
                <h3 className="fw-bold">Pay for the operating depth your teams need.</h3>
                <p className="mb-0 text-white-50">Scale from structured HRMS basics to enterprise governance.</p>
              </div>
            </div>
          </Col>
        </Row>

        <Row className="g-4 justify-content-center">
          {plans.map((plan) => (
            <Col md={5} key={plan.name}>
              <div className={`glass-panel text-center p-5 h-100 premium-shadow position-relative ${plan.recommended ? 'border border-primary' : ''}`}>
                {plan.recommended && (
                  <div className="position-absolute top-0 start-50 translate-middle badge p-2 px-3 shadow" style={{ background: 'linear-gradient(135deg, #0b5ed7 0%, #0f766e 100%)' }}>
                    RECOMMENDED
                  </div>
                )}
                <h3 className={`fw-bold mb-3 ${plan.tone}`}>{plan.name}</h3>
                <h2 className="display-5 fw-bold mb-4">{plan.price}</h2>
                <p className="text-muted mb-4">Complete HRMS tools tailored for scaling teams, branches, approvals, and compliance needs.</p>
                <ul className="list-unstyled text-start mb-5 d-inline-block mx-auto">
                  {plan.features.map((feature) => (
                    <li className="mb-3 d-flex align-items-start gap-2" key={feature}>
                      <span className="check-badge">OK</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button as={Link} to="/contact" variant={plan.variant} size="lg" className="w-100 shadow">
                  {plan.button}
                </Button>
              </div>
            </Col>
          ))}
        </Row>

        <Row className="mt-5 pt-5 justify-content-center border-top">
          <Col md={8} className="text-center">
            <h3 className="fw-bold mb-4">Available Add-ons</h3>
            <div className="bg-white p-4 rounded-4 shadow-sm border border-light">
              <h5 className="fw-bold text-dark">Communication Pack</h5>
              <p className="text-muted mb-2">Automate notifications directly to your employees' mobile devices for shifts, approvals, and payroll.</p>
              <h4 className="text-primary fw-bolder mt-3">Paid SMS and WhatsApp API integration at Rs. 30 per employee</h4>
            </div>
          </Col>
        </Row>
      </Container>

      <section className="soft-band section-shell">
        <Container>
          <Row className="align-items-center g-4">
            <Col lg={5}>
              <p className="section-eyebrow">What comes with setup</p>
              <h2 className="fw-bold">Pricing that includes the operational details.</h2>
            </Col>
            <Col lg={7}>
              <Row className="g-3">
                {buyingNotes.map((note) => (
                  <Col md={4} key={note.text}>
                    <div className="glass-panel p-3 h-100 premium-shadow orange-hover-card">
                      <span className="check-badge mb-3">{note.icon}</span>
                      <p className="fw-semibold mb-0">{note.text}</p>
                    </div>
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
        </Container>
      </section>

      <Container className="section-shell">
        <Row className="g-4 align-items-stretch">
          <Col lg={6}>
            <div className="page-motion-strip premium-shadow h-100">
              <img className="motion-bg-image" src={pricingImages[0]} alt="Pricing planning session" />
              <div className="motion-copy">
                <p className="section-eyebrow text-white-50">Plan with confidence</p>
                <h3 className="fw-bold mb-0">Choose a plan around how your teams actually operate.</h3>
              </div>
            </div>
          </Col>
          <Col lg={6}>
            <Row className="g-3">
              {valueCards.map((item) => (
                <Col md={12} key={item.title}>
                  <div className="glass-panel layer-card p-4 premium-shadow">
                    <h5 className="fw-bold">{item.title}</h5>
                    <p className="text-muted mb-0">{item.desc}</p>
                  </div>
                </Col>
              ))}
            </Row>
            <Button as={Link} to="/contact" variant="primary" size="lg" className="mt-4 px-4 shadow">
              Talk to Sales
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Pricing;
