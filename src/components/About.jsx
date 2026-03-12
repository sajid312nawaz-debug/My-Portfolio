import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
  return (
    <section id="about" className="section about-section bg-secondary">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>

        <div className="about-content">
          <motion.div 
            className="about-text"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="lead">
              A dynamic and self-motivated BSCS student at the Kohat University of Science and Technology.
            </p>
            <p>
              My journey in software development began with a strong curiosity for creating things that live on the internet. Since then, I have immersed myself in modern web technologies with a primary focus on frontend development and modern JavaScript ecosystems.
            </p>
            <p>
              I specialize in creating pixel-perfect, highly responsive, and accessible user interfaces. Whether tackling complex UI challenges or setting up robust component architectures, my aim is to bridge the gap between solid engineering and exceptional design.
            </p>
            
            <div className="about-stats">
              <div className="stat-card">
                <h3>3+</h3>
                <p>Years Learning</p>
              </div>
              <div className="stat-card">
                <h3>10+</h3>
                <p>Projects Built</p>
              </div>
              <div className="stat-card">
                <h3>100%</h3>
                <p>Commitment</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="about-visual"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="tech-sphere-placeholder">
              <div className="circle circle-1">React</div>
              <div className="circle circle-2">JS</div>
              <div className="circle circle-3">CSS</div>
              <div className="circle circle-core">Frontend</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
