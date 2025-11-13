import React from 'react';
import { motion } from 'framer-motion';
import SocialLinks from './SocialLinks';
import { FaChevronUp } from 'react-icons/fa'; // Importamos el ícono
import '../styles/Footer.css';

function Footer() {
  
  // Función para hacer scroll al inicio
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.footer 
      className="footer"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }} // Hacemos que se active un poco antes
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      {/* Botón "Volver Arriba" */}
      <motion.button
        className="back-to-top"
        onClick={scrollToTop}
        whileHover={{ scale: 1.1, y: -5 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Volver arriba"
      >
        <FaChevronUp />
      </motion.button>
      
      {/* Logo del Footer */}
      <div 
        className="footer-logo"
        onClick={scrollToTop} // También puedes hacer clic en el logo
      >
        Joshua<span className="logo-highlight">Chavez</span>
      </div>

      {/* Tus Redes Sociales */}
      <div className="footer-socials">
        <SocialLinks />
      </div>
      
      {/* Texto de Copyright */}
      <motion.p 
        className="copyright"
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        Diseñado y construido por Joshua Chávez
        <br />
        © {new Date().getFullYear()} Todos los derechos reservados.
      </motion.p>
    </motion.footer>
  );
}

export default Footer;