import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import './ProjectCard.css';

const ProjectCard = ({ title, description, techStack, githubLink }) => {
  return (
    <motion.div 
      className="project-card glass-panel"
      whileHover={{ scale: 1.05, translateY: -10 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <div className="project-content">
        <h3 className="project-title text-gradient">{title}</h3>
        <p className="project-description">{description}</p>
        
        <div className="tech-stack">
          {techStack.map((tech, index) => (
            <span key={index} className="tech-badge">{tech}</span>
          ))}
        </div>
        
        <div className="project-links">
          {githubLink && (
            <a href={githubLink} target="_blank" rel="noopener noreferrer" className="btn-icon">
              <FaGithub size={20} />
              <span>Source</span>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
