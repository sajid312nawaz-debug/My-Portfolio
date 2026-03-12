import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiDownload } from 'react-icons/fi';
import './Hero.css';
import profilePic from '../assets/profile-pic.png';

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="container hero-container">
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="hero-greeting">Hello, I'm</span>
          <h1 className="hero-title">Shafaqat Iqbal</h1>
          <h2 className="hero-subtitle">Frontend Developer</h2>
          
          <p className="hero-description">
            Passionate about building modern, scalable, and user-friendly web applications.
          </p>
          
          <div className="hero-actions">
            <a href="/Shafaqat_Iqbal_CV.jpg" download="Shafaqat_Iqbal_CV.jpg" className="btn btn-primary" aria-label="Download CV">
              <FiDownload /> Download CV
            </a>
            <div className="hero-socials">
              <a href="https://github.com/ShafaqatIqbal77" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <FiGithub />
              </a>
              <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FiLinkedin />
              </a>
              <a href="mailto:shafaqatiqbaaal@gmail.com" aria-label="Email">
                <FiMail />
              </a>
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          className="hero-image-container"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="hero-image-wrapper">
            <div className="hero-blob"></div>
            <img src={profilePic} alt="Shafaqat Iqbal" className="hero-profile-image" />
          </div>
        </motion.div>
      </div>
      
      <div className="scroll-indicator">
        <a href="#about" aria-label="Scroll Down">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="mouse-icon"
          >
            <div className="mouse-wheel"></div>
          </motion.div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
