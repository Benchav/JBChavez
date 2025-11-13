import React from 'react';
import { motion } from 'framer-motion';
import SocialLinks from '../components/SocialLinks'; // 1. Importar SocialLinks
import { FaArrowRight, FaDownload } from 'react-icons/fa'; // 2. Importar íconos
import JoshuaCV from '../assets/pdf/joshuaCV.pdf'; // 3. Importar tu CV
import '../styles/Home.css';

// 4. Función para hacer scroll (copiada de tu Header.jsx)
const scrollToSection = (id) => {
  const section = document.getElementById(id);
  const headerHeight = document.querySelector('.header')?.offsetHeight || 80;

  if (section) {
    const offsetTop = section.getBoundingClientRect().top + window.pageYOffset - headerHeight;
    window.scrollTo({ top: offsetTop, behavior: 'smooth' });
  }
};

// 5. Variantes para la animación de cascada
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Cada hijo se animará 0.1s después
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 100 },
  },
};


function Home() {
  return (
    <section id="home" className="home">
      {/* 6. Orbes de fondo decorativos */}
      <div className="glow-orb orb-1"></div>
      <div className="glow-orb orb-2"></div>

      {/* 7. Barra social vertical */}
      <motion.div 
        className="home-socials"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        <SocialLinks />
      </motion.div>

      {/* 8. Contenido de texto (columna izquierda) */}
      <motion.div 
        className="home-text-content"
        variants={containerVariants} // Aplicamos las variantes del contenedor
        initial="hidden"
        animate="visible" // Se animará al cargar
      >
        <motion.h1 className="title" variants={itemVariants}>
          Hola, Soy <span className="name-highlight">Joshua</span>
        </motion.h1>

        <motion.h2 className="subtitle" variants={itemVariants}>
          Desarrollador JR
          <span className="cursor">|</span> {/* 9. Cursor parpadeante */}
        </motion.h2>

        <motion.p className="description" variants={itemVariants}>
          Apasionado por la tecnología y el desarrollo de aplicaciones web.
          <br />Participante en Hackathon Nicaragua 2023-2025, Rally de innovación 2025, JUDC 2023, entusiasta de React, Vite, Flutter, Node.js y Diseño UX/UI.
        </motion.p>

        {/* 10. Contenedor de botones CTA */}
        <motion.div className="cta-container" variants={itemVariants}>
          <motion.button
            className="cta-button cta-primary"
            onClick={() => scrollToSection('projects')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Ver mis proyectos</span>
            <FaArrowRight />
          </motion.button>
          
      {/*    <motion.a
            href={JoshuaCV} // Usamos el CV importado
            className="cta-button cta-secondary"
            download="JoshuaChavez-CV.pdf" // Nombre del archivo al descargar
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Descargar CV</span> 
            <FaDownload />
          </motion.a>  */}
        </motion.div>
      </motion.div>

      {/* 11. Contenedor de imagen (columna derecha) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="img-container"
      >
        <img 
          src="https://i.ibb.co/rRb27G8C/profile.jpg" 
          alt="Joshua Chávez" 
          className="profile-img" 
        />
      </motion.div>
    </section>
  );
}

export default Home;