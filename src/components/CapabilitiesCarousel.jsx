import { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import multiBranchManagement from '../assets/multi-branch-management.jpg';
import advancedRosterPlanning from '../assets/advanced-roster-planning.jpg';
import workforceCompliance from '../assets/workforce-compliance.jpg';

const slides = [
  {
    title: 'Multi-Branch Management',
    content: 'Manage employees across multiple metropolitan and regional locations with centralized analytics, unified payroll processing, and real-time branch synchronization. Empower your location managers with localized dashboards while maintaining robust global administrative oversight from a single pane of glass.',
    image: multiBranchManagement
  },
  {
    title: 'Advanced Roster Planning',
    content: 'Automate complex shift creation and distribution, strictly map branch-specific operational types, and proactively oversee complex workforce logistics with powerful AI-driven policy validations. Minimize schedule conflicts and dramatically reduce employee overtime costs automatically.',
    image: advancedRosterPlanning
  },
  {
    title: 'Workforce Compliance',
    content: 'Ensure 100% rigorous adherence to evolving labor laws with highly dynamic built-in policy templates, multi-tiered custom leave structures, and seamless biometric attendance tracking. Secure your entire organization against operational liabilities natively.',
    image: workforceCompliance
  }
];

const CapabilitiesCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <Container>
      <style>{`
        @keyframes progressFill {
          from { width: 0%; }
          to { width: 100%; }
        }
      `}</style>
      <div className="text-center mb-4">
        <h2 className="display-5 fw-bold text-gradient">Core Capabilities</h2>
        <p className="text-muted">Enterprise scale features designed for modern teams.</p>
      </div>

      <div className="glass-panel capabilities-shell position-relative overflow-hidden premium-shadow">
        <Row className="g-0 h-100 align-items-stretch">
          <Col md={7} className="capabilities-image-column d-flex align-items-stretch p-4">
            <div className="capabilities-image-frame position-relative w-100 h-100 premium-shadow">
              {slides.map((slide, i) => (
                <div
                  key={i}
                  className="capabilities-image-layer position-absolute top-0 start-0 w-100 h-100"
                  style={{
                    opacity: i === currentIndex ? 1 : 0,
                    transition: 'opacity 1s ease-in-out',
                    backgroundImage: `url(${slide.image})`
                  }}
                />
              ))}
            </div>
          </Col>

          <Col md={5} className="capabilities-content-column d-flex flex-column justify-content-center p-5 position-relative">
            <div className="capabilities-content-wrapper position-relative w-100 h-100 d-flex flex-column justify-content-center">
              <div
                key={`content-${currentIndex}`}
                className="capabilities-content-panel w-100"
                style={{
                  transition: 'all 0.8s cubic-bezier(0.25, 1, 0.5, 1)'
                }}
              >
                <h3 className="fw-bolder mb-3 text-dark">{slides[currentIndex].title}</h3>
                <p className="text-muted lead capabilities-copy">
                  {slides[currentIndex].content}
                </p>
                <div className="mt-4">
                  <div className="capabilities-progress-track">
                    <div
                      key={`prog-${currentIndex}`}
                      className="capabilities-progress-fill"
                      style={{ animation: 'progressFill 3s linear forwards' }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default CapabilitiesCarousel;
