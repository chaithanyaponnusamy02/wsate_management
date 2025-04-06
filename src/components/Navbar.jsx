import React from 'react';
import '../styles/main.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <a href="/" className="navbar-logo">FoodShare</a>
        
        <div className="navbar-links">
          <a href="/foods" className="navbar-link">Browse Foods</a>
          <a href="/login" className="navbar-link">Login</a>
          <a href="/register" className="navbar-button">Sign Up</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;