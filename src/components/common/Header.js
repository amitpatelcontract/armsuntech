import React from "react";

const Header = () => {
  return (
    <div className="header" style={{ background: 'transparent' }}>
      <nav className="navbar navbar-expand-sm">
        <div className="container-fluid">
          <div id="navbarID" className="navbar-brand">
            <div style={{
              height: 65,
              display: 'flex',
              alignItems: 'center',
              marginLeft: '1rem',
              gap: '0.5rem'
            }}>
              <svg 
                width="40" 
                height="40" 
                viewBox="0 0 40 40" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Tech-styled hexagonal background */}
                <path 
                  d="M20 0L37.3205 10V30L20 40L2.67949 30V10L20 0Z" 
                  fill="#1A1A1A"
                  stroke="#333333"
                  strokeWidth="1"
                />
                {/* Letter A */}
                <path 
                  d="M13 30L20 10L27 30M15.5 24H24.5" 
                  stroke="#FF3E3E"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <div style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '1.5rem',
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
