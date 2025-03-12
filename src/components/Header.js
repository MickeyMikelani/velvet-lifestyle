import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
// Import the logo image
import velvetLogo from '../assets/velvet-logo.jpg'; 

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="header">
      <div className="logo">
        <Link to="/" aria-label="Velvet Lifestyle Homepage">
          <img src={velvetLogo} alt="Velvet Lifestyle Logo" className="logo-image" />
        </Link>
      </div>
      <nav className="nav">
        <ul className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
          <li>
            <Link to="/" onClick={toggleMobileMenu} aria-label="Home">
              Home
            </Link>
          </li>
          <li>
            <Link to="/products" onClick={toggleMobileMenu} aria-label="Products">
              Products
            </Link>
          </li>
          <li>
            <Link to="/testimonials" onClick={toggleMobileMenu} aria-label="Testimonials">
              Testimonials
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={toggleMobileMenu} aria-label="Contact">
              Contact
            </Link>
          </li>
        </ul>
        <div className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`} onClick={toggleMobileMenu} aria-label="Toggle Menu">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
    </header>
  );
};

export default Header;