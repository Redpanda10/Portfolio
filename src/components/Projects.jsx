import { motion } from 'framer-motion';
import './Projects.css';

function Projects() {
  const projects = [
    {
      name: 'Todo List',
      description: 'Manage daily tasks with CRUD functionality.',
      github: 'https://github.com/Redpanda10/Add-show-MERN',
    },
    {
      name: 'Traffic Alert App',
      description: 'Real-time traffic alerts and alternative route suggestions.',
      github: 'https://github.com/yourusername/traffic-alert-app',
    },
    {
      name: 'Hotel Management System',
      description: 'Manage hotel bookings, rooms, and customer details.',
      github: 'https://github.com/Redpanda10/hotelmanagement',
    }
  ];

  return (
    <motion.section
      id="projects"
      className="projects"
      initial={{ opacity: 0, scale: 0.8, rotateX: -15 }}
      whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
      transition={{ duration: 1 }}
    >
      <h2 className='about-me-header'>Projects</h2>
      <div className="project-grid">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="project-card"
            whileHover={{ scale: 1.05, rotateY: 10 }}
            transition={{ type: 'spring', stiffness: 200 }}
          >
            <h3 className='about-me-header'>{project.name}</h3>
            <p className='change'>{project.description}</p>
            <div className="project-links">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                GitHub
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

export default Projects;
