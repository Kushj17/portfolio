import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaCode } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  return (
    <motion.nav 
      className="navbar glass-panel"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="navbar-container">
        <NavLink to="/" className="navbar-logo">
          <FaCode size={28} color="var(--accent-blue)" />
          <span className="logo-text">Dev<span className="text-gradient">Portfolio</span></span>
        </NavLink>
        
        <ul className="navbar-links">
          <li>
            <NavLink 
              to="/" 
              className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/projects" 
              className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
            >
              Projects
            </NavLink>
          </li>
        </ul>
      </div>
    </motion.nav>
  );
};

export default Navbar;
