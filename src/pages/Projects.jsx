import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';
import projectsData from '../data/projects';
import '../styles/Projects.css';

const ProjectGrid = ({ projects }) => {
  return (
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
  );
};

function Projects() {

  const frontendProjects = projectsData.filter(p => p.category === 'frontend');
  const backendProjects = projectsData.filter(p => p.category === 'backend');
  const mobileProjects = projectsData.filter(p => p.category === 'mobile');

  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="projects" className="projects-section">
      <motion.h2 
        className="section-title"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={titleVariants}
      >
        Mis Proyectos
      </motion.h2>
      
      {/* Sección Frontend */}
      <motion.h3 
        className="projects-category-title"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={titleVariants}
      >
        Desarrollo Frontend
      </motion.h3>
      <ProjectGrid projects={frontendProjects} />

      {/* Sección Backend */}
      <motion.h3 
        className="projects-category-title"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={titleVariants}
      >
        Desarrollo Backend
      </motion.h3>
      <ProjectGrid projects={backendProjects} />

      {/* Sección Mobile */}
      <motion.h3 
        className="projects-category-title"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={titleVariants}
      >
        Desarrollo de Aplicaciones
      </motion.h3>
      <ProjectGrid projects={mobileProjects} />

    </section>
  );
}

export default Projects;