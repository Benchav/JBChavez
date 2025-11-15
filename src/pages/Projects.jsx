import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';
import projectsData from '../data/projects';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import '../styles/Projects.css';

// --- Constantes para la lógica ---
const INITIAL_COUNT = 2; // Mostrar 2 proyectos inicialmente
const INCREMENT = 2;     // Mostrar 2 más cada vez

// --- NUEVO: Función de Scroll (para el "Ver menos") ---
const scrollToSection = (id) => {
  const section = document.getElementById(id);
  // Obtenemos la altura del header para un scroll preciso
  const headerHeight = document.querySelector('.header')?.offsetHeight || 80;

  if (section) {
    const offsetTop = section.getBoundingClientRect().top + window.pageYOffset - headerHeight;
    window.scrollTo({ top: offsetTop, behavior: 'smooth' });
  }
};
// --- FIN DE LA NUEVA FUNCIÓN ---


// --- Componente ProjectGrid Modificado ---
// Ahora acepta 'visibleCount' para saber cuántos mostrar
const ProjectGrid = ({ projects, visibleCount }) => {
  return (
    <div className="projects-grid">
      {projects.map((proj, index) => (
        // 1. Añadimos un wrapper
        <div 
          key={proj.id} 
          // 2. Aplicamos 'is-visible' si el índice es menor que el conteo
          className={`project-card-wrapper ${index < visibleCount ? 'is-visible' : ''}`}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
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
        </div>
      ))}
    </div>
  );
};

function Projects() {
  // 3. Cambiamos los estados a un conteo numérico
  const [frontendCount, setFrontendCount] = useState(INITIAL_COUNT);
  const [backendCount, setBackendCount] = useState(INITIAL_COUNT);
  const [mobileCount, setMobileCount] = useState(INITIAL_COUNT);

  // Filtramos los proyectos (sin cambios)
  const frontendProjects = projectsData.filter(p => p.category === 'frontend');
  const backendProjects = projectsData.filter(p => p.category === 'backend');
  const mobileProjects = projectsData.filter(p => p.category === 'mobile');

  // 4. Variables para saber si todos están visibles
  const allFrontendVisible = frontendCount >= frontendProjects.length;
  const allBackendVisible = backendCount >= backendProjects.length;
  const allMobileVisible = mobileCount >= mobileProjects.length;

  // 5. Nuevos Handlers para los botones
  const handleFrontendToggle = () => {
    if (allFrontendVisible) {
      setFrontendCount(INITIAL_COUNT); // Resetear
      scrollToSection('frontend-section'); // <-- NUEVO: Scroll al resetear
    } else {
      setFrontendCount(prev => Math.min(prev + INCREMENT, frontendProjects.length)); // Añadir 2
    }
  };

  const handleBackendToggle = () => {
    if (allBackendVisible) {
      setBackendCount(INITIAL_COUNT);
      scrollToSection('backend-section'); // <-- NUEVO: Scroll al resetear
    } else {
      setBackendCount(prev => Math.min(prev + INCREMENT, backendProjects.length));
    }
  };

  const handleMobileToggle = () => {
    if (allMobileVisible) {
      setMobileCount(INITIAL_COUNT);
      scrollToSection('mobile-section'); // <-- NUEVO: Scroll al resetear
    } else {
      setMobileCount(prev => Math.min(prev + INCREMENT, mobileProjects.length));
    }
  };

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
      
      {/* === SECCIÓN FRONTEND === */}
      <motion.h3 
        id="frontend-section" // <-- NUEVO: ID añadido
        className="projects-category-title"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={titleVariants}
      >
        Desarrollo Frontend
      </motion.h3>
      {/* 6. Pasamos el conteo visible */}
      <ProjectGrid projects={frontendProjects} visibleCount={frontendCount} />
      {/* 7. Mostramos el botón SOLO si hay más de 2 proyectos */}
      {frontendProjects.length > INITIAL_COUNT && (
        <button 
          className="show-more-button" 
          onClick={handleFrontendToggle}
        >
          <span>{allFrontendVisible ? 'Ver menos' : 'Ver más'}</span>
          {allFrontendVisible ? <FaChevronUp /> : <FaChevronDown />}
        </button>
      )}

      {/* === SECCIÓN BACKEND === */}
      <motion.h3 
        id="backend-section" // <-- NUEVO: ID añadido
        className="projects-category-title"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={titleVariants}
      >
        Desarrollo Backend
      </motion.h3>
      <ProjectGrid projects={backendProjects} visibleCount={backendCount} />
      {backendProjects.length > INITIAL_COUNT && (
        <button 
          className="show-more-button" 
          onClick={handleBackendToggle}
        >
          <span>{allBackendVisible ? 'Ver menos' : 'Ver más'}</span>
          {allBackendVisible ? <FaChevronUp /> : <FaChevronDown />}
        </button>
      )}

      {/* === SECCIÓN MOBILE === */}
      <motion.h3 
        id="mobile-section" // <-- NUEVO: ID añadido
        className="projects-category-title"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={titleVariants}
      >
        Desarrollo de Aplicaciones
      </motion.h3>
      <ProjectGrid projects={mobileProjects} visibleCount={mobileCount} />
      {mobileProjects.length > INITIAL_COUNT && (
        <button 
          className="show-more-button" 
          onClick={handleMobileToggle}
        >
          <span>{allMobileVisible ? 'Ver menos' : 'Ver más'}</span>
          {allMobileVisible ? <FaChevronUp /> : <FaChevronDown />}
        </button>
      )}

    </section>
  );
}

export default Projects;