import { useState, useEffect, useLayoutEffect } from 'react';
import { Button } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import { MdKeyboardArrowUp } from 'react-icons/md';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    setIsVisible(false);
  }, [pathname]);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (!isVisible) {
    return null;
  }

  return (
    <Button
      variant="primary"
      className="rounded-circle shadow-lg d-flex align-items-center justify-content-center"
      onClick={scrollToTop}
      style={{
        position: 'fixed',
        bottom: '40px',
        right: '40px',
        width: '50px',
        height: '50px',
        zIndex: 9999,
        fontSize: '20px',
        padding: '0'
      }}
    >
      <MdKeyboardArrowUp size={28} />
    </Button>
  );
};

export default ScrollToTop;
