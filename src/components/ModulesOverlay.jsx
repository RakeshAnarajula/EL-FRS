import { useState } from 'react';
import { Container } from 'react-bootstrap';
import dashboardAnalytics from '../assets/dashboard-analytics.jpg';
import attendanceLeaves from '../assets/attendance-leaves.jpg';
import shiftPlanning from '../assets/shift-planning.jpg';
import securitySettings from '../assets/security-settings.jpg';
import enterpriseOperations from '../assets/enterprise-operations.jpg';
import payrollFinance from '../assets/payroll-finance.jpg';
import branchManagement from '../assets/branch-management.jpg';
import performanceKpis from '../assets/performance-kpis.jpg';

const modulesData = [
  {
    id: 1,
    name: "Dashboard & Analytics",
    image: dashboardAnalytics,
    title: "Real-time Metrics",
    description: "Get a bird's eye view of attendance metrics, leave approvals, and employee distribution instantly with deeply integrated visual analytics."
  },
  {
    id: 2,
    name: "Attendance & Leaves",
    image: attendanceLeaves,
    title: "Smart Leave Management",
    description: "Automate leave accruals, track daily punch-ins, and allow employees to request out-of-office plans directly from their portal."
  },
  {
    id: 3,
    name: "Shift & Roster Planning",
    image: shiftPlanning,
    title: "Dynamic Rostering",
    description: "Plan dynamic shifts mapped perfectly to various branch types, managing time-zones and avoiding employee burnout."
  },
  {
    id: 4,
    name: "Policy & Security Settings",
    image: securitySettings,
    title: "Granular Control",
    description: "Configure role-based access, securely track compliance to labor laws, and deploy customized hr policies instantaneously."
  },
  {
    id: 5,
    name: "Work Status & Projects",
    image: enterpriseOperations,
    title: "Track Workflow Progress",
    description: "Monitor daily work logs, project-wise progress, and task assignments seamlessly."
  },
  {
    id: 6,
    name: "Payroll & Compensation",
    image: payrollFinance,
    title: "Unified Payroll",
    description: "Manage salaries, deductions, taxes, and incentives with zero manual errors."
  },
  {
    id: 7,
    name: "Branch Management",
    image: branchManagement,
    title: "Multi-Branch Control",
    description: "Centralize employee data and structural logic across multiple branch locations effortlessly."
  },
  {
    id: 8,
    name: "Performance & KPIs",
    image: performanceKpis,
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

      <div className="module-button-row d-flex flex-wrap justify-content-center gap-3 mb-5">
        {modulesData.map((mod) => (
          <button
            key={mod.id}
            onClick={() => handleModuleClick(mod)}
            className={`btn rounded-pill px-4 py-2 fw-bold premium-shadow border-0 module-btn module-filter-button ${activeModule.id === mod.id ? 'module-btn-active' : 'bg-white text-dark'
              }`}
          >
            {mod.name}
          </button>
        ))}
      </div>

      <div
        className="module-showcase position-relative overflow-hidden premium-shadow w-100 mx-auto"
      >
        <img
          src={activeModule.image}
          alt={activeModule.name}
          className="w-100 h-100 object-fit-cover module-showcase-image"
          style={{
            opacity: fade ? 0 : 0.8,
            transition: 'opacity 0.3s ease-in-out'
          }}
        />

        <div
          className="module-showcase-copy position-absolute bottom-0 start-0 w-100 d-flex flex-column justify-content-end"
          style={{
            opacity: fade ? 0 : 1,
            transform: fade ? 'translateY(10px)' : 'translateY(0)',
            transition: 'all 0.4s ease-in-out'
          }}
        >
          <div className="glass-panel module-showcase-card border-0 bg-transparent text-white">
            <h3 className="display-6 fw-bolder mb-3">{activeModule.title}</h3>
            <p className="lead mb-0 text-white-50 module-showcase-description">
              {activeModule.description}
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ModulesOverlay;
