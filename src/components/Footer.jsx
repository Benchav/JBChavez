import React from 'react';
import { motion } from 'framer-motion';
import SocialLinks from './SocialLinks';
import '../styles/Footer.css';

function Footer() {
  return (
    <motion.footer 
      className="footer"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <SocialLinks />
      
      <motion.p 
        className="copyright"
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        © {new Date().getFullYear()} Joshua Chávez. Todos los derechos reservados.
      </motion.p>
    </motion.footer>
  );
}

export default Footer;