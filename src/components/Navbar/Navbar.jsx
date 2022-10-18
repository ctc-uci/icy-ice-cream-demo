import React from 'react';
import './Navbar.css';
import logo from '../../images/Logo.svg';

const Navbar = () => {
  return (
    <div className="header">
      <div className="navbar">
        <a className="icy-logo" href="/">
          <img src={logo} alt="" />
        </a>
        <div className="links">
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
          <a href="/locations">Locations</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
