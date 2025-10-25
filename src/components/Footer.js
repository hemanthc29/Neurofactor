import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>ChutNee</h3>
            <p>Bringing authentic flavors to your table since 2020.</p>
          </div>
          
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#menu">Menu</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Contact Us</h4>
            <address>
              <p>123 Flavor Street<br />Taste City, TC 12345</p>
              <p>Email: info@chutnee.com<br />Phone: (123) 456-7890</p>
            </address>
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