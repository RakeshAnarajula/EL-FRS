import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ELlogo from "../assets/ELlogo.png";

const PageLoader = () => {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800); // Premium delay

    return () => clearTimeout(timer);
  }, [location.pathname]);

  if (!loading) return null;

  return (
    <div className="global-loader">
      <div className="text-center d-flex flex-column align-items-center justify-content-center">
        <img src={ELlogo} alt="Loading EL-FRS..." style={{ height: '50px', objectFit: 'contain' }} className="mb-4 fade-in" />
        <div className="spinner-premium mx-auto"></div>
      </div>
    </div>
  );
};

export default PageLoader;
