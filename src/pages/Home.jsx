import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaGraduationCap, FaUser, FaTerminal, FaBrain, FaCode, FaMicrochip, FaDatabase, FaTools } from 'react-icons/fa';
import './Home.css';
import heroImg from '../assets/hero.jpg';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  },
  exit: { opacity: 0, transition: { duration: 0.5 } }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: { type: "spring", stiffness: 100 }
  }
};

const skillCategories = [
  {
    title: 'Programming Languages',
    icon: <FaCode />,
    skills: ['C++', 'Java', 'Python', 'JavaScript']
  },
  {
    title: 'Systems & Backend',
    icon: <FaTerminal />,
    skills: ['Multithreading', 'REST APIs', 'Node.js', 'Express']
  },
  {
    title: 'Machine Learning',
    icon: <FaBrain />,
    skills: ['PyTorch', 'Scikit-learn', 'Transformers (BERT)', 'XGBoost']
  },
  {
    title: 'Databases',
    icon: <FaDatabase />,
    skills: ['MySQL', 'PostgreSQL']
  },
  {
    title: 'Tools & DevOps',
    icon: <FaTools />,
    skills: ['Git', 'Docker', 'GitHub Actions', 'Linux']
  }
];

const Home = () => {
  return (
    <motion.div 
      className="page-container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      {/* Hero Section */}
      <section className="hero-section">
        <motion.div 
          className="hero-image-container"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="glow-circle"></div>
          <img src={heroImg} alt="Kush Jalan" className="profile-img" />
        </motion.div>

        <motion.div className="hero-content" variants={itemVariants}>
          <motion.h2 
            className="greeting"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Hello, I'm
          </motion.h2>
          <motion.h1 
            className="name"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Kush <span className="text-gradient">Jalan</span>
          </motion.h1>
          <motion.div 
            className="tagline typewriter"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            Software Engineer | Machine Learning & Systems Developer
          </motion.div>
          <motion.p 
            className="hero-description"
            variants={itemVariants}
          >
            I build interactive, modern web applications and have a deep passion for machine learning and artificial intelligence.
          </motion.p>
        </motion.div>

      </section>

      <div className="content-grid">
        {/* About Me Section */}
        <motion.section 
          className="glass-panel info-section"
          variants={itemVariants}
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h3 className="section-title"><FaUser className="section-icon" /> About Me</h3>
          <p>
            I am a Computer Science student at Mahindra University (GPA: 9.4), specializing in machine learning and high-performance systems.
          </p>
          <br/>
          <p>
            I have built low-latency trading engines using C++ and multithreading, and developed deep learning models using BERT and PyTorch with high accuracy.
          </p>
          <br/>
          <p>
            I enjoy solving complex problems in systems design, AI, and scalable backend development.
          </p>
        </motion.section>

        {/* Research Interests */}
        <motion.section 
          className="glass-panel info-section"
          variants={itemVariants}
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h3 className="section-title"><FaBrain className="section-icon" /> Research Interests</h3>
          <ul className="interests-list">
            <li><FaBrain size={18}/> Machine Learning & Deep Learning (NLP, Transformers)</li>
            <li><FaMicrochip size={18}/> High-Performance Systems & Low-Latency Computing</li>
            <li><FaTerminal size={18}/> Backend Engineering & Distributed Systems</li>
            <li><FaCode size={18}/> Quantitative Systems / Trading Infrastructure</li>
          </ul>
        </motion.section>
      </div>

      <div className="content-grid">
        {/* Personal Details */}
        <motion.section 
          className="glass-panel info-section details-section"
          variants={itemVariants}
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h3 className="section-title">Personal Details</h3>
          <div className="details-grid">
            <div className="detail-item">
              <span className="detail-label">Name:</span>
              <span className="detail-value">Kush Jalan</span>
            </div>
            <div className="detail-item">
              <span className="detail-label"><FaPhone size={16}/> Phone:</span>
              <span className="detail-value">+91 8096753019</span>
            </div>
            <div className="detail-item">
              <span className="detail-label"><FaEnvelope size={16}/> Email:</span>
              <span className="detail-value">kushjalan17@gmail.com</span>
            </div>
            <div className="detail-item">
              <span className="detail-label"><FaGraduationCap size={16}/> College:</span>
              <span className="detail-value">se23ucse244@mahindrauniversity.edu.in</span>
            </div>
          </div>
        </motion.section>

        {/* Skills */}
        <motion.section 
          className="glass-panel info-section"
          variants={itemVariants}
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h3 className="section-title">Technical Skills</h3>
          <div className="skills-cards-container">
            {skillCategories.map((category, index) => (
              <motion.div 
                key={index} 
                className="skill-category-card glass-panel"
                whileHover={{ 
                  y: -5, 
                  boxShadow: "0 10px 30px -10px var(--accent-purple)", 
                  borderColor: "rgba(138, 43, 226, 0.4)" 
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className="skill-category-header">
                  <span className="skill-icon">{category.icon}</span>
                  <h4>{category.title}</h4>
                </div>
                <div className="skill-category-list">
                  {category.skills.map((skill, i) => (
                    <span key={i} className="tech-badge">{skill}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </motion.div>
  );
};

export default Home;
