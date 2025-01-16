import React, { useState, useEffect } from 'react';

const Header = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  return (
    <nav className={`navbar navbar-expand-lg fixed-top ${
      scrollPosition > 20 ? 'bg-dark bg-opacity-75 navbar-dark shadow' : 'navbar-dark'
    }`}>
      <div className="container">
        {/* Brand with Logo */}
        <a className="navbar-brand d-flex align-items-center" href="#home">
          <img
            src="/path-to-your-logo.png"
            alt="Armsuntech Logo"
            height="40"
            className="me-2"
          />
          <span className="fw-bold fs-4">Armsuntech</span>
        </a>

        {/* Mobile Toggle Button */}
        <button 
          className="navbar-toggler border-0" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav" 
          aria-controls="navbarNav" 
          aria-expanded={!isNavCollapsed ? true : false} 
          aria-label="Toggle navigation"
          onClick={handleNavCollapse}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navigation Links */}
        <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-center">
            <li className="nav-item">
              <a className="nav-link px-3" href="#home">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link px-3" href="#about">About Us</a>
            </li>
            <li className="nav-item">
              <a className="nav-link px-3" href="#clients">Past Clients</a>
            </li>
            <li className="nav-item">
              <a className="nav-link px-3" href="#services">Services</a>
            </li>
            <li className="nav-item ms-lg-2">
              <a 
                className="nav-link btn btn-outline-light px-4" 
                href="#contact"
                style={{
                  borderRadius: '50px',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = 'transparent';
                }}
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header; 