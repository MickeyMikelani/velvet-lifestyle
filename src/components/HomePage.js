import React, { useState } from 'react';
import './HomePage.css';
// Placeholder for the background image (replace with your image path)
import backgroundImage from '../assets/luxury-candles.jpg';

const HomePage = () => {
  const [welcomeMessage, setWelcomeMessage] = useState('Welcome to Velvet Lifestyle');

  const handleDownloadClick = () => {
    setWelcomeMessage('Thank you for choosing Velvet Lifestyle!');
    alert('Redirecting to app download page... (Replace with actual app store links)');
  };

  return (
    <main
      className="hero"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white', // Ensure text is readable on the background
        textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)', // Add shadow for readability
      }}
    >
      <h1>{welcomeMessage}</h1>
      <p className="description">Luxury handmade candles and home fragrances.</p>
      <p className="cta-text">Download our app for exclusive offers and updates!</p>
      <div className="cta-buttons">
        <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer">
          <button className="cta-button">App Store</button>
        </a>
        <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer">
          <button className="cta-button">Google Play</button>
        </a>
      </div>
    </main>
  );
};

export default HomePage;