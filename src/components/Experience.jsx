import React from 'react';
import { motion } from 'framer-motion';
import { FiBriefcase, FiBookOpen } from 'react-icons/fi';
import './Experience.css';

const timelineData = [
  {
    type: "education",
    title: "BS Computer Science",
    subtitle: "Kohat University of Science and Technology",
    date: "2023 - Present",
    description: "Studying core computer science concepts including data structures, algorithms, databases, and software engineering. Consistently maintaining a high GPA while participating in coding competitions."
  },
  {
    type: "experience",
    title: "Freelance Web Developer",
    subtitle: "Self-Employed",
    date: "2024 - Present",
    description: "Designing and developing custom websites for local businesses and independent clients. Focusing on responsive design, modern UI/UX, and performance optimization."
  },
  {
    type: "education",
    title: "Frontend Development Bootcamp",
    subtitle: "Online Platform",
    date: "2023 - 2024",
    description: "Completed an intensive program focused on HTML, CSS, JavaScript, and React. Built several full-stack projects using the MERN stack."
  },
  {
    type: "experience",
    title: "Open Source Contributor",
    subtitle: "GitHub",
    date: "2023 - Present",
    description: "Contributing to various open-source projects, focusing on bug fixes, documentation improvements, and UI enhancements in React-based repositories."
  }
];

const Experience = () => {
  return (
    <section id="experience" className="section experience-section">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          My Journey
        </motion.h2>

        <div className="timeline-container">
          {timelineData.map((item, index) => (
            <motion.div 
              key={index}
              className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="timeline-content card">
                <div className="timeline-icon">
                  {item.type === 'education' ? <FiBookOpen /> : <FiBriefcase />}
                </div>
                <div className="timeline-header">
                  <span className="timeline-date">{item.date}</span>
                  <h3>{item.title}</h3>
                  <h4>{item.subtitle}</h4>
                </div>
                <p>{item.description}</p>
              </div>
            </motion.div>
          ))}
          <div className="timeline-line"></div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
