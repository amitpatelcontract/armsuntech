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
      background: 'rgba(67, 56, 202, 0.95)',
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      transition: 'all 0.3s ease-in-out',
      backdropFilter: `blur(${blurValue}px)`,
      boxShadow: scrollPosition > 20 
        ? '0 8px 32px rgba(49, 46, 129, 0.15)'
        : 'none',
    }}>
      <nav className="navbar navbar-expand-sm">
        <div className="container-fluid">
          <div id="navbarID" className="navbar-brand">
            <div style={{
              height: 65,
              display: 'flex',
              alignItems: 'center',
              marginLeft: '1.5rem',
              gap: '1.2rem'
            }}>
              <svg 
                width="64" 
                height="64" 
                viewBox="0 0 80 80" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Hexagonal background with gradient */}
                <path 
                  d="M40 0L80 23.094V56.906L40 80L0 56.906V23.094L40 0Z" 
                  fill="url(#hexGradient)"
                  stroke="rgba(255, 255, 255, 0.2)"
                  strokeWidth="2"
                />
                {/* Letter A with gradient */}
                <path 
                  d="M26 60L40 20L54 60M31 48H49" 
                  stroke="url(#letterGradient)"
                  strokeWidth="6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                {/* Define gradients */}
                <defs>
                  <linearGradient id="hexGradient" x1="0" y1="0" x2="80" y2="80">
                    <stop offset="0%" stopColor="#1E1B4B" />
                    <stop offset="100%" stopColor="#312E81" />
                  </linearGradient>
                  <linearGradient id="letterGradient" x1="40" y1="20" x2="40" y2="60">
                    <stop offset="0%" stopColor="#818CF8" />
                    <stop offset="100%" stopColor="#6366F1" />
                  </linearGradient>
                </defs>
              </svg>
              <div style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: '1.8rem',
                fontWeight: '600',
                letterSpacing: '0.8px',
                textTransform: 'uppercase',
                background: 'linear-gradient(135deg, #E0E7FF 0%, #FFFFFF 50%, #C7D2FE 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start'
              }}>
                Armsuntech
                <span style={{
                  fontSize: '0.75rem',
                  fontWeight: '400',
                  letterSpacing: '2px',
                  background: 'linear-gradient(to right, #A5B4FC 0%, #818CF8 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  textTransform: 'uppercase',
                  marginTop: '0.2rem'
                }}>
                  Custom Mobile & Web Solutions
                </span>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
