import React, { useState } from 'react';
import './ContactSection.css';

const ContactSection = () => {
  // State for form fields and submission status
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission (replace with actual API call)
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    // Reset form after submission
    setFormData({ name: '', email: '', message: '' });
    // Optional: Clear success message after 3 seconds
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  
  const whatsappNumber = '+27782259821'; 
  const whatsappMessage = encodeURIComponent(
    `Hello Velvet Lifestyle Team, I have a question: ${formData.message || 'Please assist me.'}`
  );
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <section className="contact-section">
      <h2>Contact Us</h2>
      <div className="contact-container">
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Enter your name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Enter your email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Enter your message"
            />
          </div>
          <button type="submit" className="submit-btn">
            Send Message
          </button>
          {isSubmitted && <p className="success-message">Thank you! Your message has been sent.</p>}
        </form>
        <div className="whatsapp-container">
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="whatsapp-btn">
            <span role="img" aria-label="WhatsApp">💬</span> Chat with Us on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;