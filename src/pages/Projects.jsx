import React from 'react';
import { motion } from 'framer-motion';
import { FaCode } from 'react-icons/fa';
import ProjectCard from '../components/ProjectCard';
import './Projects.css';

const projects = [
  {
    title: 'Low-Latency Order Matching Engine',
    description: 'A highly optimized trading engine built with C++ and multithreading. It implements price-time priority with O(log n) complexity, relies on mutex locks for concurrency control, and is containerized via Docker for seamless deployment.',
    techStack: ['C++', 'Multithreading', 'Docker', 'Systems Design'],
    githubLink: 'https://github.com/Kushj17/Order-matching-engine.git'
  },
  {
    title: 'Racism and Hate Speech Detector',
    description: 'An advanced Natural Language Processing pipeline engineered to detect racism and hate speech. It utilizes cutting-edge BERT and LSTM models from Hugging Face Transformers, achieving an impressive 95% classification accuracy.',
    techStack: ['Python', 'BERT', 'LSTM', 'Hugging Face'],
    githubLink: 'https://github.com/Kushj17/Racism-and-Hate-Speech-Detector.git'
  },
  {
    title: 'Predictive Maintenance System',
    description: 'A machine learning system crafted to predict the Remaining Useful Life (RUL) of industrial equipment. It incorporates an ensemble learning approach using Random Forest and XGBoost to attain an 87% predictive accuracy.',
    techStack: ['Python', 'Random Forest', 'XGBoost', 'Machine Learning'],
    githubLink: 'https://github.com/Kushj17/Predictive-Maintenance-System.git'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  },
  exit: { opacity: 0, transition: { duration: 0.5 } }
};

const Projects = () => {
  return (
    <motion.div 
      className="page-container projects-page"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className="projects-header">
        <motion.h1 
          className="page-title"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Featured <span className="text-gradient">Projects</span> <FaCode className="header-icon" />
        </motion.h1>
        <motion.p 
          className="page-subtitle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          A selection of my recent work in web development and artificial intelligence.
        </motion.p>
      </div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 + 0.4, type: 'spring', stiffness: 100 }}
            style={{ height: '100%' }}
          >
            <ProjectCard {...project} />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Projects;
