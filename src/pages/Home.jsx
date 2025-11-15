import React from 'react';
import { motion } from 'framer-motion';
import SocialLinks from '../components/SocialLinks'; 
import { FaArrowRight, FaAddressCard } from 'react-icons/fa'; 
// import JoshuaCV from '../assets/pdf/joshuaCV.pdf'; 
import '../styles/Home.css';


const scrollToSection = (id) => {
  const section = document.getElementById(id);
  const headerHeight = document.querySelector('.header')?.offsetHeight || 80;

  if (section) {
    const offsetTop = section.getBoundingClientRect().top + window.pageYOffset - headerHeight;
    window.scrollTo({ top: offsetTop, behavior: 'smooth' });
  }
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
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
      <div className="glow-orb orb-1"></div>
      <div className="glow-orb orb-2"></div>

      <motion.div 
        className="home-socials"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        <SocialLinks />
      </motion.div>

      <motion.div 
        className="home-text-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 className="title" variants={itemVariants}>
          Hola, Soy <span className="name-highlight">Joshua</span>
        </motion.h1>

        <motion.h2 className="subtitle" variants={itemVariants}>
          Desarrollador JR
          <span className="cursor">|</span>
        </motion.h2>

        <motion.p className="description" variants={itemVariants}>
          Apasionado por la tecnología y el desarrollo de aplicaciones web.
          <br />Participante en Hackathon Nicaragua 2023-2025, Rally de innovación 2025, JUDC 2023, entusiasta de React, Vite, Flutter, Node.js y Diseño UX/UI.
        </motion.p>

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
          
          <motion.a
            href="/joshua_cv.html" 
            target="_blank"  
            rel="noopener noreferrer"
            className="cta-button cta-secondary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Ver Currículum</span> 
            <FaAddressCard /> 
          </motion.a>
        </motion.div>
      </motion.div>

      
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