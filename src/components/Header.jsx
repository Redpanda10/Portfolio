import { motion } from 'framer-motion';
import './Header.css';

function Header() {
  return (
    <motion.header 
      className="header"
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <h1 className="header-title"><div className='about-me-header'>Mohit Singh Budal</div></h1>
      <nav className="header-nav">
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>
    </motion.header>
  );
}

export default Header;
