import { motion } from 'framer-motion';
import './Contact.css';
import { FaLinkedin, FaGithub, FaFacebook } from 'react-icons/fa';

function Contact() {
  return (
    <motion.section
      id="contact"
      className="contact"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="contact-header">
        <h2 className='about-me-header'>Contact Me</h2>
        <p>If you want to get in touch, feel free to drop a message or connect via social media.</p>
      </div>

      <div className="contact-form">
        <form action="mailto:mohit@example.com" method="post" enctype="multipart/form-data">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" placeholder="Your Name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder="Your Email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" placeholder="Your Message" rows="5" required></textarea>
          </div>
          <button type="submit" className="submit-btn">Send Message</button>
        </form>
      </div>

      <div className="social-links">
        <p>Or connect with me on:</p>
        <ul className='social-icons'>
          <li>
            <a href="https://www.linkedin.com/in/mohit-singh-budal" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={32} />
            </a>
          </li>
          <li>
            <a href="https://github.com/Redpanda10/" target="_blank" rel="noopener noreferrer">
              <FaGithub size={32} />
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/mohitsingh.budal.1" target="_blank" rel="noopener noreferrer">
              <FaFacebook size={32} />
            </a>
          </li>
        </ul>
      </div>
    </motion.section>
  );
}

export default Contact;
