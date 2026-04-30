import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import './Projects.css';

const projectsList = [
  {
    title: "Personal Portfolio Website",
    description: "A modern, fully responsive personal portfolio website built to showcase my projects, skills, and experience with dark/light mode functionality.",
    technologies: ["React.js", "Vite", "Framer Motion", "Vanilla CSS"],
    githubLink: "https://github.com/",
    liveLink: "https://example.com",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Task Management App",
    description: "A full-stack task tracking application allowing users to create, update, and manage daily goals with authentication and progress tracking.",
    technologies: ["MERN Stack", "React", "Node.js", "MongoDB", "Express"],
    githubLink: "https://github.com/",
    liveLink: "https://example.com",
    image: "https://images.unsplash.com/photo-1512314889357-e157c22f938d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "E-commerce Website",
    description: "A comprehensive e-commerce platform with product catalogs, shopping cart logic, user profiles, and secure payment gateway integration.",
    technologies: ["React", "Redux", "Stripe API", "Node.js", "MongoDB"],
    githubLink: "https://github.com/",
    liveLink: "https://example.com",
    image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "College Management System",
    description: "An administrative tool for colleges that manages student enrollments, grading structures, and faculty scheduling all from a unified dashboard.",
    technologies: ["HTML/CSS", "JavaScript", "PHP", "MySQL"],
    githubLink: "https://github.com/",
    liveLink: "https://example.com",
    image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "TO-Do App",
    description: "A clean and interactive to-do list application for daily task management. Features smooth animations, task filtering, and local storage support.",
    technologies: ["React.js", "Tailwind CSS", "Framer Motion"],
    githubLink: "https://github.com/ShafaqatIqbal77",
    liveLink: "#",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="section projects-section bg-secondary">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          Selected Projects
        </motion.h2>

        <div className="projects-grid">
          {projectsList.map((project, index) => (
            <motion.div 
              key={index}
              className="project-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="project-image-wrapper">
                <img src={project.image} alt={project.title} className="project-image" />
                <div className="project-overlay">
                  <div className="project-links">
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer" aria-label="GitHub Repository">
                      <FiGithub />
                    </a>
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer" aria-label="Live Demo">
                      <FiExternalLink />
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>
                <div className="project-tech">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
