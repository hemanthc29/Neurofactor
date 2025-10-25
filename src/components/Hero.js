import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title animate-pop-in">
            Welcome to <span className="highlight">ChutNee</span>
          </h1>
          <p className="hero-subtitle animate-fade-in">
            Experience the perfect blend of taste and tradition with our authentic recipes
          </p>
          <div className="hero-buttons">
            <button className="btn primary-btn animate-slide-up">Explore Menu</button>
            <button className="btn secondary-btn animate-slide-up delay-1">Order Now</button>
          </div>
        </div>
        <div className="hero-image animate-fade-in-up">
          <div className="image-placeholder">
            <span>Delicious Food Image</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;