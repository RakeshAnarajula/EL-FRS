import { useState, useEffect } from 'react';
import { Container, Badge } from 'react-bootstrap';
import dashboardAnalytics from '../assets/dashboard-analytics.jpg';
import employeeManagement from '../assets/employee-management.jpg';
import attendanceLeaves from '../assets/attendance-leaves.jpg';
import shiftPlanning from '../assets/shift-planning.jpg';
import workLog from '../assets/work-log.jpg';

const images = [
  dashboardAnalytics,
  employeeManagement,
  attendanceLeaves,
  shiftPlanning,
  workLog
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

      <Container className="hero-content position-relative d-flex flex-column align-items-center justify-content-center gap-3">
        <div>
          <Badge bg="primary" className="hero-badge px-4 py-2 rounded-pill shadow-sm">
            Premium Workforce Management SaaS
          </Badge>
        </div>

        <div className="glass-panel hero-title-panel py-2 premium-shadow">
          <div className="hero-title-slot">
            <h3 key={titleIndex} className="hero-display-title display-6 fw-bolder mb-0 text-gradient title-animation text-center">
              {heroTitles[titleIndex]}
            </h3>
          </div>
        </div>

        <div className="hero-description-panel bg-white px-5 py-3 shadow-sm">
          <p className="lead text-muted fw-medium mx-auto mb-0 text-center hero-description-copy">
            Centralize Analytics, Attendance, Shift Planning, and Payroll with an Enterprise-grade beautifully designed platform.
          </p>
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;
