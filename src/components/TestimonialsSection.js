import React, { useState, useEffect } from 'react';
import './TestimonialsSection.css';

const TestimonialsSection = () => {
  // Sample testimonial data
  const testimonials = [
    {
      id: 1,
      name: 'Sarah M.',
      review: 'The Vanilla Bliss Candle transformed my living room into a cozy haven. Highly recommend!',
      rating: 5,
    },
    {
      id: 2,
      name: 'John D.',
      review: 'The Lavender Dream Candle helped me relax after a long day. Amazing quality!',
      rating: 4,
    },
    {
      id: 3,
      name: 'Emily R.',
      review: 'The Rose Petal Diffuser is elegant and fills my home with a beautiful scent.',
      rating: 5,
    },
    {
      id: 4,
      name: 'Michael T.',
      review: 'Sandalwood Incense is my new favorite. Great value for the price!',
      rating: 4,
    },
  ];

  // State for current testimonial index and auto-slide
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoSlide, setAutoSlide] = useState(true);

  // Auto-slide effect
  useEffect(() => {
    let interval;
    if (autoSlide) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
        );
      }, 5000); // Change testimonial every 5 seconds
    }
    return () => clearInterval(interval); // Cleanup on unmount or autoSlide change
  }, [autoSlide, testimonials.length]);

  // Handle manual navigation
  const goToPrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
    setAutoSlide(false); // Pause auto-slide on manual interaction
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
    setAutoSlide(false); // Pause auto-slide on manual interaction
  };

  return (
    <section className="testimonials-section">
      <h2>Customer Testimonials</h2>
      <div className="slider">
        <button className="slider-btn prev" onClick={goToPrev}>
          &lt;
        </button>
        <div className="testimonial-card">
          <p className="review">{testimonials[currentIndex].review}</p>
          <p className="author">
            - {testimonials[currentIndex].name}{' '}
            <span className="rating">
              {'★'.repeat(testimonials[currentIndex].rating) +
                '☆'.repeat(5 - testimonials[currentIndex].rating)}
            </span>
          </p>
        </div>
        <button className="slider-btn next" onClick={goToNext}>
          &gt;
        </button>
      </div>
      <div className="dots">
        {testimonials.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => {
              setCurrentIndex(index);
              setAutoSlide(false);
            }}
          ></span>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;