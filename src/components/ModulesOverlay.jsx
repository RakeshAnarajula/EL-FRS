import { useState } from 'react';
import { Container, Row, Col, ListGroup } from 'react-bootstrap';

const modulesData = [
  {
    id: 1,
    name: "Dashboard & Analytics",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200",
    title: "Real-time Metrics",
    description: "Get a bird's eye view of attendance metrics, leave approvals, and employee distribution instantly with deeply integrated visual analytics."
  },
  {
    id: 2,
    name: "Attendance & Leaves",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1200",
    title: "Smart Leave Management",
    description: "Automate leave accruals, track daily punch-ins, and allow employees to request out-of-office plans directly from their portal."
  },
  {
    id: 3,
    name: "Shift & Roster Planning",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200",
    title: "Dynamic Rostering",
    description: "Plan dynamic shifts mapped perfectly to various branch types, managing time-zones and avoiding employee burnout."
  },
  {
    id: 4,
    name: "Policy & Security Settings",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200",
    title: "Granular Control",
    description: "Configure role-based access, securely track compliance to labor laws, and deploy customized hr policies instantaneously."
  },
  {
    id: 5,
    name: "Work Status & Projects",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1200",
    title: "Track Workflow Progress",
    description: "Monitor daily work logs, project-wise progress, and task assignments seamlessly."
  },
  {
    id: 6,
    name: "Payroll & Compensation",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=1200",
    title: "Unified Payroll",
    description: "Manage salaries, deductions, taxes, and incentives with zero manual errors."
  },
  {
    id: 7,
    name: "Branch Management",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200",
    title: "Multi-Branch Control",
    description: "Centralize employee data and structural logic across multiple branch locations effortlessly."
  },
  {
    id: 8,
    name: "Performance & KPIs",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200",
    title: "Evaluate Output",
    description: "Set KPIs, track team milestones, and generate robust performance reports instantly."
  }
];

const ModulesOverlay = () => {
  const [activeModule, setActiveModule] = useState(modulesData[0]);
  const [fade, setFade] = useState(false);

  const handleModuleClick = (mod) => {
    if (mod.id === activeModule.id) return;
    setFade(true);
    setTimeout(() => {
      setActiveModule(mod);
      setFade(false);
    }, 300); // fade out duration
  };

  return (
    <Container>
      <div className="text-center mb-5">
        <h2 className="display-5 fw-bold text-gradient">Comprehensive Modules</h2>
        <p className="text-muted">A fully unified platform managing every stage of the employee lifecycle.</p>
      </div>

      {/* Top Inline Module Selection */}
      <div className="d-flex flex-wrap justify-content-center gap-3 mb-5">
        {modulesData.map((mod) => (
          <button
            key={mod.id}
            onClick={() => handleModuleClick(mod)}
            className={`btn rounded-pill px-4 py-2 fw-bold premium-shadow border-0 module-btn ${activeModule.id === mod.id ? 'module-btn-active' : 'bg-white text-dark'
              }`}
            style={{ fontSize: '0.95rem' }}
          >
            {mod.name}
          </button>
        ))}
      </div>

      {/* Dynamic Image Display with Overlay text */}
      <div
        className="position-relative overflow-hidden premium-shadow rounded-4 w-100 mx-auto"
        style={{ height: '500px', backgroundColor: '#000', maxWidth: '1200px' }}
      >
        {/* The Image */}
        <img
          src={activeModule.image}
          alt={activeModule.name}
          className="w-100 h-100 object-fit-cover"
          style={{
            opacity: fade ? 0 : 0.8,
            transition: 'opacity 0.3s ease-in-out',
            objectFit: 'cover'
          }}
        />
        {/* The Gradient Overlay for text contrast */}
        <div
          className="position-absolute top-0 start-0 w-100 h-100"
        ></div>

        {/* The Text overlay directly on the image */}
        <div
          className="position-absolute bottom-0 start-0 w-100 p-5 p-md-5 d-flex flex-column justify-content-end"
          style={{
            opacity: fade ? 0 : 1,
            transform: fade ? 'translateY(10px)' : 'translateY(0)',
            transition: 'all 0.4s ease-in-out'
          }}
        >
          <div className="glass-panel p-4 p-md-5 border-0 bg-transparent text-white" style={{ backdropFilter: 'blur(5px)', backgroundColor: 'rgba(0,0,0,0.3)' }}>
            <h3 className="display-6 fw-bolder mb-3">{activeModule.title}</h3>
            <p className="lead mb-0 text-white-50" style={{ maxWidth: '800px', lineHeight: '1.6' }}>
              {activeModule.description}
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ModulesOverlay;
