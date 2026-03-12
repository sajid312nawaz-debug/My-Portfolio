import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt, FaGithub, FaLinux 
} from 'react-icons/fa';
import { SiExpress, SiMongodb, SiMysql } from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';
import './Skills.css';

const skillCategories = [
  {
    title: "Frontend Development",
    icon: <FaReact />,
    skills: [
      { name: "HTML", icon: <FaHtml5 fill="#E34F26" />, level: 95 },
      { name: "CSS", icon: <FaCss3Alt fill="#1572B6" />, level: 90 },
      { name: "JavaScript", icon: <FaJs fill="#F7DF1E" />, level: 85 },
      { name: "React.js", icon: <FaReact fill="#61DAFB" />, level: 80 },
    ]
  },
  {
    title: "Backend Development",
    icon: <FaNodeJs />,
    skills: [
      { name: "Node.js", icon: <FaNodeJs fill="#339933" />, level: 75 },
      { name: "Express.js", icon: <SiExpress fill="currentColor" />, level: 70 },
    ]
  },
  {
    title: "Database",
    icon: <SiMongodb />,
    skills: [
      { name: "MongoDB", icon: <SiMongodb fill="#47A248" />, level: 80 },
      { name: "MySQL", icon: <SiMysql fill="#4479A1" />, level: 75 },
    ]
  },
  {
    title: "Tools & Environment",
    icon: <FaGitAlt />,
    skills: [
      { name: "Git", icon: <FaGitAlt fill="#F05032" />, level: 85 },
      { name: "GitHub", icon: <FaGithub fill="currentColor" />, level: 85 },
      { name: "VS Code", icon: <VscVscode fill="#007ACC" />, level: 95 },
      { name: "Linux", icon: <FaLinux fill="currentColor" />, level: 80 },
    ]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
};

const Skills = () => {
  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          My Skills
        </motion.h2>

        <div className="skills-grid">
          {skillCategories.map((category, idx) => (
            <motion.div 
              key={category.title}
              className="skill-category-card card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              <div className="category-header">
                <span className="category-icon">{category.icon}</span>
                <h3>{category.title}</h3>
              </div>
              
              <motion.div 
                className="skills-list"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {category.skills.map((skill) => (
                  <motion.div key={skill.name} className="skill-item" variants={itemVariants}>
                    <div className="skill-info">
                      <div className="skill-name">
                        <span className="icon-badge">{skill.icon}</span>
                        <span>{skill.name}</span>
                      </div>
                      <span className="skill-percent">{skill.level}%</span>
                    </div>
                    <div className="progress-bar-container">
                      <motion.div 
                        className="progress-bar"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.3 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
