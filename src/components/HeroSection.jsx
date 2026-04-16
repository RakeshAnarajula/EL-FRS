import { useState, useEffect } from 'react';
import { Container, Badge } from 'react-bootstrap';


const images = [
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=400", // dashboard analytics
  "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=400", // employee management
  "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=400", // attendance
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=400", // shift planning
  "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=400", // work log
];

const heroTitles = [
  "Transform Your HR Operations",
  "Automate Your Roster Planning",
  "Simplify Your Leave Management",
  "Scale Your Enterprise Setup"
];

const HeroSection = () => {
  const [titleIndex, setTitleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % heroTitles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero-wrapper text-center position-relative">
      <div className="diagonal-container">
        <div className="diagonal-row row-right">
          {[...images, ...images, ...images].map((src, i) => (
            <div className="hero-card" key={`r1-${i}`}>
              <img src={src} alt="HR Dashboard Element" />
            </div>
          ))}
        </div>
        <div className="diagonal-row row-left">
          {[...images, ...images, ...images].reverse().map((src, i) => (
            <div className="hero-card" key={`r2-${i}`}>
              <img src={src} alt="HR Module Element" />
            </div>
          ))}
        </div>
        <div className="diagonal-row row-right">
          {[...images, ...images, ...images].map((src, i) => (
            <div className="hero-card" key={`r3-${i}`}>
              <img src={src} alt="Analytics Screen" />
            </div>
          ))}
        </div>
      </div>

      <Container className="hero-content position-relative d-flex flex-column align-items-center justify-content-center gap-3" style={{ zIndex: 10, minHeight: '550px' }}>
        <div>
          <Badge bg="primary" className="px-4 py-2 rounded-pill shadow-sm" style={{ fontSize: '1rem' }}>
            Premium Workforce Management SaaS
          </Badge>
        </div>

        <div className="glass-panel py-2 rounded-4 premium-shadow" style={{ width: '60%', border: '1px solid rgba(255,255,255,0.4)', backgroundColor: 'rgba(255,255,255,0.6)' }}>
          <div style={{ minHeight: '90px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <h3 key={titleIndex} className="display-6 fw-bolder mb-0 text-gradient title-animation text-center">
              {heroTitles[titleIndex]}
            </h3>
          </div>
        </div>

        <div className="bg-white px-5 py-3 rounded-4 shadow-sm" style={{ maxWidth: '700px', width: '100%', border: '1px solid rgba(0,0,0,0.05)' }}>
          <p className="lead text-muted fw-medium mx-auto mb-0 text-center" style={{ lineHeight: '1.6' }}>
            Centralize Analytics, Attendance, Shift Planning, and Payroll with an Enterprise-grade beautifully designed platform.
          </p>
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;
