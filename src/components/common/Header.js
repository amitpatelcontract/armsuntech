import React from "react";
import Logo from "../../assets/images/logo.png";

const Header = () => {
  return (
    <div className="header" style={{ background: 'transparent' }}>
      <nav className="navbar navbar-expand-sm">
        <div className="container-fluid">
          {/* <div id="navbarID" className="navbar-brand">
            <img 
              src={Logo} 
              alt="Armsuntech Logo"
              height={65} 
              className="ms-4" 
            />
          </div> */}
        </div>
      </nav>
    </div>
  );
};

export default Header;
