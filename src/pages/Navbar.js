import React from 'react';
import "./HomeNav.css";

function Navbar() {
    return (
        <header className="navbar">
          <div className="navbar-title"><a href="/CS1300_Portfolio">Juliana Han</a></div>
          <div className="navbar-menu">
            <a href="/CS1300_Portfolio">Projects</a>
            <a href="#/art">Art</a>
            {/* <a href="/CS1300_Portfolio/about">About</a> */}
          </div>
        </header>

    );
  }
  
  export default Navbar;