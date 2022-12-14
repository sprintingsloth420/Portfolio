import React from 'react';
import "./Home.css";

function Navbar() {
    return (
        <header className="navbar">
          <div className="navbar-title"><a href="/">SprintingSloth</a></div>
          <div className="navbar-menu">
            <div className="navbar-item"><a href="/about">About</a></div>
            <div className="navbar-item"><a href="#projects"></a></div>
          </div>
        </header>

    );
  }
  
  export default Navbar;