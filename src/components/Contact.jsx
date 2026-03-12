import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiMapPin, FiGithub, FiSend, FiCheckCircle, FiAlertCircle } from 'react-icons/fi';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState({
    submitting: false,
    success: false,
    error: null
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus({ submitting: true, success: false, error: null });

    // IMPORTANT: Replace these with your actual EmailJS credentials in the .env file
    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    const isPlaceholder = (id) => !id || id.includes("placeholder") || id.includes("your_");

    if (isPlaceholder(SERVICE_ID) || isPlaceholder(TEMPLATE_ID) || isPlaceholder(PUBLIC_KEY)) {
      console.error("EmailJS credentials are missing or still set to placeholders in .env");
      setStatus({ 
        submitting: false, 
        success: false, 
        error: "Email system is not configured yet. Please set up your EmailJS credentials in the .env file." 
      });
      return;
    }

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then((result) => {
          console.log("Email sent successfully:", result.text);
          setStatus({ submitting: false, success: true, error: null });
          setFormData({ name: '', email: '', message: '' });
          setTimeout(() => setStatus(prev => ({ ...prev, success: false })), 5000);
      }, (error) => {
          console.error("Email sending failed:", error);
          setStatus({ 
            submitting: false, 
            success: false, 
            error: `Failed to send message: ${error.text || "Unexpected error"}. Please try again later.` 
          });
      });
  };

  return (
    <section id="contact" className="section contact-section bg-secondary">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          Get In Touch
        </motion.h2>

        <div className="contact-container">
          <motion.div 
            className="contact-info"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3>Let's talk about everything!</h3>
            <p>
              I'm currently looking for new opportunities, frontend development roles, and freelance projects. 
              Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>
            
            <div className="info-cards">
              <div className="info-card">
                <div className="info-icon">
                  <FiMail />
                </div>
                <div className="info-details">
                  <h4>Email</h4>
                  <a href="mailto:shafaqatiqbaaal@gmail.com">shafaqatiqbaaal@gmail.com</a>
                </div>
              </div>
              
              <div className="info-card">
                <div className="info-icon">
                  <FiMapPin />
                </div>
                <div className="info-details">
                  <h4>Location</h4>
                  <span>Kohat, Pakistan</span>
                </div>
              </div>

              <div className="info-card">
                <div className="info-icon">
                  <FiGithub />
                </div>
                <div className="info-details">
                  <h4>GitHub</h4>
                  <a href="https://github.com/ShafaqatIqbal77" target="_blank" rel="noopener noreferrer">github.com/ShafaqatIqbal77</a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="contact-form-wrapper card"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <form ref={form} className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required 
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  required 
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows="5" 
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message here..."
                  required 
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className={`btn btn-primary submit-btn ${status.submitting ? 'loading' : ''}`}
                disabled={status.submitting}
              >
                {status.submitting ? 'Sending...' : <><FiSend /> Send Message</>}
              </button>

              {status.success && (
                <motion.div 
                  className="form-message success"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <FiCheckCircle /> Message sent successfully!
                </motion.div>
              )}

              {status.error && (
                <motion.div 
                  className="form-message error"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <FiAlertCircle /> {status.error}
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
