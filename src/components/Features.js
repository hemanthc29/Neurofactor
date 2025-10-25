import React, { useState, useEffect } from 'react';
import './Features.css';

const Features = () => {
  const [visibleFeatures, setVisibleFeatures] = useState([]);
  const [hoveredFeature, setHoveredFeature] = useState(null);

  const features = [
    {
      id: 1,
      title: "Authentic Recipes",
      description: "Traditional recipes passed down through generations for an authentic taste",
      icon: "🍽️",
      color: "#ff6b6b"
    },
    {
      id: 2,
      title: "Fresh Ingredients",
      description: "Locally sourced, organic ingredients for the best quality and taste",
      icon: "🌱",
      color: "#6bcf7f"
    },
    {
      id: 3,
      title: "Fast Delivery",
      description: "Quick and reliable delivery to your doorstep",
      icon: "🚚",
      color: "#4d9be6"
    }
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisibleFeatures(features.map(f => f.id));
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  const handleFeatureHover = (featureId, isHovered) => {
    setHoveredFeature(isHovered ? featureId : null);
  };

  return (
    <section className="features" id="features">
      <div className="features-container">
        <div className="section-header animate-fade-in">
          <h2>Why Choose ChutNee?</h2>
          <p>Experience the difference with our unique offerings</p>
        </div>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div 
              key={feature.id} 
              className={`feature-card animate-fade-in-up ${visibleFeatures.includes(feature.id) ? 'visible' : ''} ${hoveredFeature === feature.id ? 'hovered' : ''}`}
              style={{ animationDelay: `${index * 0.2}s` }}
              onMouseEnter={() => handleFeatureHover(feature.id, true)}
              onMouseLeave={() => handleFeatureHover(feature.id, false)}
            >
              <div className="feature-icon" style={{ color: feature.color }}>
                {feature.icon}
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
              <div className="feature-hover-effect" style={{ backgroundColor: feature.color }}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;