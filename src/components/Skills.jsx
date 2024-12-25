import { motion } from 'framer-motion';
import './Skills.css';

function Skills() {
  const skills = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'MongoDB'];

  return (
    <motion.section
      id="skills"
      className="skills"
      initial={{ opacity: 0, y: 50, rotateX: -15 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 1 }}
    >
      <div className="skills-content">
        <h2 className="about-me-header">Skills</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="skill-item"
              whileHover={{ scale: 1.1, rotateY: 10 }}
              transition={{ type: 'spring', stiffness: 200 }}
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default Skills;
