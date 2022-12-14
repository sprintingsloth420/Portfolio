import React from 'react';
import "./Home.css";

function Navbar() {
    return (
        <header className="navbar">
          <div className="navbar-title">SprintingSloth</div>
          <div className="navbar-menu">
            <div className="navbar-item"><a href="/CS1300_Portfolio">About</a></div>
            <div className="navbar-item"><a href="/CS1300_Portfolio/about">Projects</a></div>
          </div>
        </header>

    );
  }
  
  export default Navbar;