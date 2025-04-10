import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';
import projects from '../data/projects';
import '../styles/Projects.css'; // Crea este archivo

function Projects() {
  return (
    <section id="projects" className="projects-section">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
      >
        Mis Proyectos
      </motion.h2>
      
      <div className="projects-grid">
        {projects.map((proj, index) => (
          <motion.div
            key={proj.id}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            <ProjectCard
              title={proj.title}
              description={proj.description}
              technologies={proj.technologies}
              image={proj.image}
              link={proj.link}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Projects;