import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-links">
        <a
          href="https://facebook.com/velvetlifestyle"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Velvet Lifestyle Facebook"
        >
          <span role="img" aria-label="Facebook">🌐</span> Facebook
        </a>
        <a
          href="https://instagram.com/velvetlifestyle"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Velvet Lifestyle Instagram"
        >
          <span role="img" aria-label="Instagram">📸</span> Instagram
        </a>
        <a
          href="https://twitter.com/velvetlifestyle"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Velvet Lifestyle Twitter"
        >
          <span role="img" aria-label="Twitter">🐦</span> Twitter
        </a>
      </div>
      <p className="copyright">
        © 2025 Velvet Lifestyle. All rights reserved. | <a href="/terms" target="_blank">Terms</a> |{' '}
        <a href="/privacy" target="_blank">Privacy</a>
      </p>
    </footer>
  );
};

export default Footer;