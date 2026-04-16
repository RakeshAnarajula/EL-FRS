import { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const slides = [
  {
    title: 'Multi-Branch Management',
    content: 'Manage employees across multiple metropolitan and regional locations with centralized analytics, unified payroll processing, and real-time branch synchronization. Empower your location managers with localized dashboards while maintaining robust global administrative oversight from a single pane of glass.',
    image: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'Advanced Roster Planning',
    content: 'Automate complex shift creation and distribution, strictly map branch-specific operational types, and proactively oversee complex workforce logistics with powerful AI-driven policy validations. Minimize schedule conflicts and dramatically reduce employee overtime costs automatically.',
    image: 'https://images.unsplash.com/photo-1542626991-cbc4e32524cc?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'Workforce Compliance',
    content: 'Ensure 100% rigorous adherence to evolving labor laws with highly dynamic built-in policy templates, multi-tiered custom leave structures, and seamless biometric attendance tracking. Secure your entire organization against operational liabilities natively.',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=800'
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
      <div className="text-center">
        <h2 className="display-5 fw-bold text-gradient">Core Capabilities</h2>
        <p className="text-muted">Enterprise scale features designed for modern teams.</p>
      </div>

      <div className="glass-panel position-relative overflow-hidden premium-shadow" style={{ minHeight: '400px', borderRadius: '24px' }}>
        <Row className="g-0 h-100 align-items-stretch">
          {/* Left Side: Background Image Area */}
          <Col md={7} className="d-flex align-items-stretch p-4" style={{ minHeight: '400px' }}>
            <div className="position-relative w-100 h-100 rounded-4 overflow-hidden premium-shadow" style={{ border: '5px solid #fff' }}>
              {slides.map((slide, i) => (
                <div
                  key={i}
                  className="position-absolute top-0 start-0 w-100 h-100 transition-opacity"
                  style={{
                    opacity: i === currentIndex ? 1 : 0,
                    transition: 'opacity 1s ease-in-out',
                    backgroundImage: `url(${slide.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                >
                </div>
              ))}
            </div>
          </Col>

          {/* Right Side: Content Box */}
          <Col md={5} className="d-flex flex-column justify-content-center p-5 position-relative" style={{ zIndex: 5 }}>
            <div className="capabilities-content-wrapper position-relative w-100 h-100 d-flex flex-column justify-content-center">
              {slides.map((slide, i) => (
                <div
                  key={`content-${i}`}
                  className="position-absolute w-100"
                  style={{
                    opacity: i === currentIndex ? 1 : 0,
                    transform: i === currentIndex ? 'translateY(0)' : 'translateY(20px)',
                    transition: 'all 0.8s cubic-bezier(0.25, 1, 0.5, 1)',
                    pointerEvents: i === currentIndex ? 'auto' : 'none'
                  }}
                >
                  <h3 className="fw-bolder mb-3 text-dark">{slide.title}</h3>
                  <p className="text-muted lead" style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                    {slide.content}
                  </p>
                  <div className="mt-4">
                    <div style={{ width: '100%', height: '8px', background: '#e9ecef', borderRadius: '4px', overflow: 'hidden' }}>
                      {i === currentIndex && (
                        <div
                          key={`prog-${currentIndex}`}
                          style={{
                            height: '100%',
                            background: 'linear-gradient(90deg, #0b5ed7, #6610f2)',
                            animation: 'progressFill 3s linear forwards'
                          }}
                        ></div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default CapabilitiesCarousel;
