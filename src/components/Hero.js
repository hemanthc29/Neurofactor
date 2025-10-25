import React, { useState, useEffect } from 'react';
import './Hero.css';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [buttonHover, setButtonHover] = useState({ primary: false, secondary: false });

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handlePrimaryHover = (isHovered) => {
    setButtonHover(prev => ({ ...prev, primary: isHovered }));
  };

  const handleSecondaryHover = (isHovered) => {
    setButtonHover(prev => ({ ...prev, secondary: isHovered }));
  };

  const scrollToMenu = () => {
    const menuSection = document.getElementById('menu');
    if (menuSection) {
      menuSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero" id="home">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className={`hero-title ${isVisible ? 'animate-pop-in' : ''}`}>
            Welcome to <span className="highlight">ChutNee</span>
          </h1>
          <p className={`hero-subtitle ${isVisible ? 'animate-fade-in' : ''}`}>
            Experience the perfect blend of taste and tradition with our authentic recipes
          </p>
          <div className={`hero-buttons ${isVisible ? 'animate-slide-up' : ''}`}>
            <button 
              className={`btn primary-btn ${buttonHover.primary ? 'hovered' : ''}`}
              onMouseEnter={() => handlePrimaryHover(true)}
              onMouseLeave={() => handlePrimaryHover(false)}
              onClick={scrollToMenu}
            >
              Explore Menu
            </button>
            <button 
              className={`btn secondary-btn ${buttonHover.secondary ? 'hovered' : ''}`}
              onMouseEnter={() => handleSecondaryHover(true)}
              onMouseLeave={() => handleSecondaryHover(false)}
            >
              Order Now
            </button>
          </div>
        </div>
        <div className={`hero-image ${isVisible ? 'animate-fade-in-up' : ''}`}>
          <div className="image-placeholder">
            <div className="image-content">
              <div className="image-circle"></div>
              <div className="image-circle small"></div>
              <div className="image-circle large"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;