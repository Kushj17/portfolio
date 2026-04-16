import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <span className="logo-text">Dev<span className="text-gradient">Portfolio</span></span>
        </div>
        
        <div className="social-links">
          <a href="https://github.com/Kushj17" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaGithub size={24} />
          </a>
          <a href="https://www.linkedin.com/in/kush-jalan157" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaLinkedin size={24} />
          </a>
          
        </div>
        
        <div className="footer-text">
          <p>&copy; {new Date().getFullYear()} Kush Jalan. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
