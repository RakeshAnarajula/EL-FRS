import HeroSection from '../components/HeroSection';
import CapabilitiesCarousel from '../components/CapabilitiesCarousel';
import ModulesOverlay from '../components/ModulesOverlay';
import FeatureSplit from '../components/FeatureSplit';
import { Container, Row, Col } from 'react-bootstrap';
import { MdCalendarMonth, MdQueryStats, MdSchedule } from 'react-icons/md';
import mobileApp1 from '../assets/mobile_app_1.png';
import mobileApp2 from '../assets/mobile_app_2.png';
import mobileApp3 from '../assets/mobile_app_3.png';

const homeSummaries = [
  {
    icon: <MdCalendarMonth size={26} />,
    title: "Attendance & Leaves",
    desc: "Automated workflows, biometric sync, and custom policy templates."
  },
  {
    icon: <MdSchedule size={26} />,
    title: "Shift & Roster",
    desc: "Dynamic roster planning for diverse branch types and timezones."
  },
  {
    icon: <MdQueryStats size={26} />,
    title: "Analytics & Logs",
    desc: "Real-time work logs, performance metrics, and dashboard insights."
  }
];

const homeMetrics = [
  { value: "Multi-branch", label: "ready from setup" },
  { value: "Real-time", label: "attendance and work signals" },
  { value: "Secure", label: "role-based access controls" }
];

const Home = () => {
  return (
    <>
      <HeroSection />

      <Container className="py-5">
        <Row className="text-center g-4">
          {homeSummaries.map((item) => (
            <Col md={4} key={item.title}>
              <div className="glass-panel p-4 premium-shadow h-100 hover-orange-card">
                <div className="d-flex align-items-center justify-content-center gap-3 mb-3">
                  <span className="check-badge text-primary">{item.icon}</span>
                  <h4 className="fw-bold text-primary mb-0">{item.title}</h4>
                </div>
                <p className="text-muted">{item.desc}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>

      {/* <section className="mobile-app-showcase section-shell"> */}
      <section className="section-shell">
        <Container>
          <Row className="align-items-center">
            <Col lg={6}>
              <p className="section-eyebrow">Mobile workforce access</p>
              <h2 className="display-6 fw-bold text-gradient">Our Mobile App</h2>
              <p className="lead text-muted mt-3">
                Our platform is also available as a mobile app, allowing users to manage attendance, tasks, leave requests, and daily activities anytime, anywhere.
              </p>
              <p className="fw-semibold text-dark mb-0">
                A smart and seamless mobile experience for modern workforce management.
              </p>
            </Col>

            <Col lg={6}>
              <div className="mobile-app-grid">
                <div className="mobile-app-screen-card premium-shadow">
                  <img src={mobileApp1} alt="Mobile app attendance screen" />
                </div>
                <div className="mobile-app-screen-card premium-shadow">
                  <img src={mobileApp2} alt="Mobile app task screen" />
                </div>
                <div className="mobile-app-screen-card premium-shadow">
                  <img src={mobileApp3} alt="Mobile app leave screen" />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="soft-band section-shell">
        <Container>
          <Row className="align-items-center g-5">
            <Col lg={5}>
              <p className="section-eyebrow">Modern HRMS workspace</p>
              <h2 className="fw-bold">Make daily people operations feel lighter.</h2>
              <p className="text-muted mb-0">
                ElevateHR brings the noisy parts of attendance, leave, rosters, work logs, and approvals into a calm operating system for growing teams.
              </p>
            </Col>
            <Col lg={7}>
              <Row className="g-3">
                {homeMetrics.map((item) => (
                  <Col md={4} key={item.label}>
                    <div className="glass-panel metric-tile p-4 h-100 premium-shadow">
                      <h4 className="fw-bolder text-primary">{item.value}</h4>
                      <p className="text-muted mb-0">{item.label}</p>
                    </div>
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
        </Container>
      </section>

      <FeatureSplit />

      <div className="py-5">
        <CapabilitiesCarousel />
      </div>

      <div className="py-5">
        <ModulesOverlay />
      </div>
    </>
  );
};

export default Home;
