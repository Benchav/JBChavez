import React from 'react';
import { motion } from 'framer-motion';
import '../styles/ProjectCard.css';

function ProjectCard({ title, description, technologies, image, link }) {
  return (
    <motion.div 
      className="project-card"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <div className="image-container">
        <img 
          src={image} 
          alt={title} 
          className="project-image"
          loading="lazy"
        />
      </div>
      
      <div className="project-content">
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>
        <p className="project-technologies">
          <strong>Tecnologías:</strong> {technologies}
        </p>
        
        <motion.a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="project-link"
          whileHover={{ 
            scale: 1.05,
            backgroundColor: 'rgba(100, 255, 218, 0.15)'
          }}
          whileTap={{ scale: 0.95 }}
        >
          Ver Proyecto
        </motion.a>
      </div>
    </motion.div>
  );
}

export default ProjectCard;