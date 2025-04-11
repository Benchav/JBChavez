import React, { useState } from 'react';
import { motion } from 'framer-motion';
import '../styles/Header.css';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const navItems = [
    { id: 'home', label: 'Inicio' },
    {id : 'about', label: 'Sobre_Mi'},
    { id: 'projects', label: 'Proyectos' },
    { id: 'contact', label: 'Contacto' }
  ];

  return (
    <motion.header 
      className="header"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, type: 'spring' }}
    >
      <motion.h1 
        className="logo"
        whileHover={{ scale: 1.05 }}
      >
        Joshua<span className="logo-highlight">Chavez</span>
      </motion.h1>

      <div 
        className={`hamburger ${isMenuOpen ? 'active' : ''}`} 
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <div className="hamburger-line"></div>
        <div className="hamburger-line"></div>
        <div className="hamburger-line"></div>
      </div>

      <nav className={`nav-container ${isMenuOpen ? 'active' : ''}`}>
        <ul className="nav-list">
          {navItems.map((item, index) => (
            <motion.li
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              whileHover={{ scale: 1.05, color: '#64ffda' }}
              className="nav-item"
            >
              {item.label}
              <div className="nav-underline"></div>
            </motion.li>
          ))}
        </ul>
      </nav>
    </motion.header>
  );
}

export default Header;