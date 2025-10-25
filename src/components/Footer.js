import React, { useState } from 'react';
import './Footer.css';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email && email.includes('@')) {
      setIsSubscribed(true);
      setEmail('');
      // Reset after 3 seconds
      setTimeout(() => {
        setIsSubscribed(false);
      }, 3000);
    }
  };

  const handleLinkHover = (linkName, isHovered) => {
    setHoveredLink(isHovered ? linkName : null);
  };

  return (
    <footer className="footer" id="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>ChutNee</h3>
            <p>Bringing authentic flavors to your table since 2020.</p>
            <div className="social-links">
              <a href="#" className="social-link" onMouseEnter={() => handleLinkHover('fb', true)} onMouseLeave={() => handleLinkHover('fb', false)}>📱</a>
              <a href="#" className="social-link" onMouseEnter={() => handleLinkHover('ig', true)} onMouseLeave={() => handleLinkHover('ig', false)}>📸</a>
              <a href="#" className="social-link" onMouseEnter={() => handleLinkHover('tw', true)} onMouseLeave={() => handleLinkHover('tw', false)}>💬</a>
            </div>
          </div>
          
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home" onMouseEnter={() => handleLinkHover('home', true)} onMouseLeave={() => handleLinkHover('home', false)}>Home</a></li>
              <li><a href="#features" onMouseEnter={() => handleLinkHover('about', true)} onMouseLeave={() => handleLinkHover('about', false)}>About</a></li>
              <li><a href="#menu" onMouseEnter={() => handleLinkHover('menu', true)} onMouseLeave={() => handleLinkHover('menu', false)}>Menu</a></li>
              <li><a href="#footer" onMouseEnter={() => handleLinkHover('contact', true)} onMouseLeave={() => handleLinkHover('contact', false)}>Contact</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Contact Us</h4>
            <address>
              <p>123 Flavor Street<br />Taste City, TC 12345</p>
              <p>Email: info@chutnee.com<br />Phone: (123) 456-7890</p>
            </address>
          </div>
          
          <div className="footer-section">
            <h4>Newsletter</h4>
            <p>Subscribe to get updates on new dishes and offers.</p>
            <form className="newsletter-form" onSubmit={handleSubscribe}>
              <input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="newsletter-input"
                required
              />
              <button type="submit" className="newsletter-btn">
                {isSubscribed ? '✓ Subscribed!' : 'Subscribe'}
              </button>
            </form>
            {isSubscribed && (
              <p className="subscription-success">Thank you for subscribing!</p>
            )}
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} ChutNee. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;