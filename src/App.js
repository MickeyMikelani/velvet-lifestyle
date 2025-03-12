import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './components/HomePage';
import ProductSection from './components/ProductSection';
import TestimonialsSection from './components/TestimonialsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer'; // Import Footer
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductSection />} />
          <Route path="/testimonials" element={<TestimonialsSection />} />
          <Route path="/contact" element={<ContactSection />} />
          <Route path="/login" element={<h2>Login Page</h2>} />
          <Route path="/register" element={<h2>Register Page</h2>} />
          <Route path="/my-account" element={<h2>My Account Page</h2>} />
        </Routes>
        <Footer /> {/* Add Footer component */}
      </div>
    </Router>
  );
};

export default App;