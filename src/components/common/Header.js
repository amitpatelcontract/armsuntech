import React, { useState, useEffect } from "react";

const Header = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const blurValue = Math.min(scrollPosition / 100 * 8, 12);

  return (
    <div className="header" style={{
      background: 'rgba(105, 114, 207, 0.8)',
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      transition: 'all 0.3s ease-in-out',
      backdropFilter: `blur(${blurValue}px)`,
      boxShadow: scrollPosition > 20 
        ? '0 4px 16px rgba(0, 0, 0, 0.08)'
        : 'none',
    }}>
      <nav className="navbar navbar-expand-sm">
        <div className="container-fluid">
          <div id="navbarID" className="navbar-brand">
            <div style={{
              height: 65,
              display: 'flex',
              alignItems: 'center',
              marginLeft: '1rem',
              gap: '1rem'
            }}>
              <svg 
                width="64" 
                height="64" 
                viewBox="0 0 80 80" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Tech-styled hexagonal background */}
                <path 
                  d="M40 0L80 23.094V56.906L40 80L0 56.906V23.094L40 0Z" 
                  fill="#1A1A1A"
                  stroke="#333333"
                  strokeWidth="2"
                />
                {/* Letter A */}
                <path 
                  d="M26 60L40 20L54 60M31 48H49" 
                  stroke="#FF3E3E"
                  strokeWidth="6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <div style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '1.8rem',
                fontWeight: '700',
                color: 'white',
                letterSpacing: '0.5px'
              }}>
                Armsuntech
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
