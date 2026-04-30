import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiMapPin, FiGithub, FiSend, FiCheckCircle, FiAlertCircle } from 'react-icons/fi';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
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

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus({ submitting: true, success: false, error: null });

    emailjs.sendForm(
      'service_frtadkr',      // Step 2 se copy karo
      'template_8yfs5sy',     // Step 3 se copy karo
      form.current,
      'Zb8TQ80oxEtVL25I3'     // Step 4 se copy karo
    )
      .then((result) => {
          console.log("Email sent successfully:", result.text);
          setStatus({ submitting: false, success: true, error: null });
          setFormData({ from_name: '', from_email: '', message: '' });
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
            <form ref={form} className="contact-form" onSubmit={sendEmail}>
              <motion.div 
                className="form-group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <input 
                  type="text" 
                  id="from_name" 
                  name="from_name" 
                  value={formData.from_name}
                  onChange={handleChange}
                  placeholder=" "
                  required 
                />
                <label htmlFor="from_name">Name</label>
              </motion.div>
              
              <motion.div 
                className="form-group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <input 
                  type="email" 
                  id="from_email" 
                  name="from_email" 
                  value={formData.from_email}
                  onChange={handleChange}
                  placeholder=" "
                  required 
                />
                <label htmlFor="from_email">Email</label>
              </motion.div>
              
              <motion.div 
                className="form-group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                <textarea 
                  id="message" 
                  name="message" 
                  rows="5" 
                  value={formData.message}
                  onChange={handleChange}
                  placeholder=" "
                  required 
                ></textarea>
                <label htmlFor="message">Message</label>
              </motion.div>
              
              <motion.button 
                type="submit" 
                className={`btn btn-primary submit-btn ${status.submitting ? 'loading' : ''}`}
                disabled={status.submitting}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.8 }}
                whileHover={{ scale: 1.02, boxShadow: "0 10px 20px rgba(59, 130, 246, 0.3)" }}
                whileTap={{ scale: 0.98 }}
              >
                {status.submitting ? 'Sending...' : <><FiSend className="send-icon" /> Send Message</>}
              </motion.button>

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
