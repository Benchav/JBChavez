import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/Header.css';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false); 

 
  useEffect(() => {
    const handleScroll = () => {
  
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    const headerHeight = document.querySelector('.header')?.offsetHeight || 80;

    if (section) {
      const offsetTop = section.getBoundingClientRect().top + window.pageYOffset - headerHeight;
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const navItems = [
    { id: 'home', label: 'Inicio' },
    { id: 'projects', label: 'Proyectos' },
        { id: 'about', label: 'Sobre Mi' },
    { id: 'contact', label: 'Contacto' }
  ];


  const mobileNavVariants = {
    open: {
      transition: {
        staggerChildren: 0.1, 
        when: "beforeChildren",
      },
    },
    closed: {
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1, 
        when: "afterChildren",
      },
    },
  };

  const mobileNavItemVariants = {
    open: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 300, damping: 24 },
    },
    closed: {
      y: 20,
      opacity: 0,
      transition: { duration: 0.2 },
    },
  };


  return (
    <motion.header 

      className={`header ${isScrolled ? 'scrolled' : ''} ${isMenuOpen ? 'menu-open' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, type: 'spring', stiffness: 100 }}
    >
      <motion.h1 
        className="logo"
        whileHover={{ scale: 1.05 }}
        onClick={() => scrollToSection('home')}
      >
        Joshua<span className="logo-highlight">Chavez</span>
      </motion.h1>

      <div 
        className={`hamburger ${isMenuOpen ? 'active' : ''}`} 
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Abrir menú"
        aria-expanded={isMenuOpen}
      >
        <div className="hamburger-line"></div>
        <div className="hamburger-line"></div>
        <div className="hamburger-line"></div>
      </div>


      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav 
            className="nav-container"
            initial={{ x: '100%' }} 
            animate={{ x: 0 }}
            exit={{ x: '100%' }} 
            transition={{ type: 'tween', duration: 0.3, ease: 'easeInOut' }}
          >
            <motion.ul 
              className="nav-list"
              variants={mobileNavVariants}
              animate="open"
              initial="closed"
            >
              {navItems.map((item) => (
                <motion.li
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="nav-item"
                
                  variants={mobileNavItemVariants}
                
                >
                  <span className="nav-item-label">{item.label}</span>
                  <div className="nav-underline"></div>
                </motion.li>
              ))}
            </motion.ul>
          </motion.nav>
        )}
      </AnimatePresence>

      {/* Navegación de Escritorio (separada de la móvil) */}
      <nav className="nav-container-desktop">
        <ul className="nav-list">
          {navItems.map((item, index) => (
            <motion.li
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              whileHover={{ color: '#64ffda' }} 
              className="nav-item"
            >
              <span className="nav-item-label">{item.label}</span>
              <div className="nav-underline"></div>
            </motion.li>
          ))}
        </ul>
      </nav>

    </motion.header>
  );
}

export default Header;