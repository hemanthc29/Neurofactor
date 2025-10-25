import React from 'react';
import './Features.css';

const Features = () => {
  const features = [
    {
      id: 1,
      title: "Authentic Recipes",
      description: "Traditional recipes passed down through generations for an authentic taste",
      icon: "🍽️"
    },
    {
      id: 2,
      title: "Fresh Ingredients",
      description: "Locally sourced, organic ingredients for the best quality and taste",
      icon: "🌱"
    },
    {
      id: 3,
      title: "Fast Delivery",
      description: "Quick and reliable delivery to your doorstep",
      icon: "🚚"
    }
  ];

  return (
    <section className="features">
      <div className="features-container">
        <div className="section-header animate-fade-in">
          <h2>Why Choose ChutNee?</h2>
          <p>Experience the difference with our unique offerings</p>
        </div>
        <div className="features-grid">
          {features.map((feature) => (
            <div key={feature.id} className="feature-card animate-fade-in-up">
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;