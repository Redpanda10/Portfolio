import { motion } from 'framer-motion';
import './Hero.css';

function Hero() {
  return (
    <motion.section
      id="hero"
      className="hero"
      initial={{ opacity: 0, scale: 0.9, rotateX: 15 }}
      animate={{ opacity: 1, scale: 1, rotateX: 0 }}
      transition={{ duration: 1.5 }}
    >
      <div className="hero-content">
        <h1 className='about-me-header'>Welcome to My Portfolio</h1>
        <p>Showcasing my skills, projects, and experiences in web development.</p>
      </div>
    </motion.section>
  );
}

export default Hero;
