import { motion } from 'framer-motion';
import './About.css';

function About() {
  return (
    <motion.section
      id="about"
      className="about"
      initial={{ opacity: 0, x: -100, rotateY: 45 }}
      whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
      transition={{ duration: 1 }}
    >
      <h2 className='about-me-header'>About Me</h2>
      <p>{"I'm "} a frontend developer skilled in React.js. I love creating intuitive and responsive web applications.</p>
    </motion.section>
  );
}

export default About;
