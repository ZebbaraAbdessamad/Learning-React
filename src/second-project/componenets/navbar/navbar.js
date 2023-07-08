import React from 'react';
import logo  from 'images/logo.svg';
import '../../style.css'

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <h1>React With Zebbara</h1>
      
      <h2>Project 2</h2>
    </nav>
  );
}
