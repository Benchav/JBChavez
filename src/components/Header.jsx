import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaAddressCard, FaTimes } from 'react-icons/fa';
import SocialLinks from './SocialLinks';
import '../styles/Header.css';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navRef = useRef(null);
  const prevFocusRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // open/close side effects: block scroll, manage focus, ESC key
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') setIsMenuOpen(false); };

    if (isMenuOpen) {
      prevFocusRef.current = document.activeElement;
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', onKey);
      setTimeout(() => navRef.current?.focus(), 80);
    } else {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
      try {
        prevFocusRef.current?.focus?.();
      } catch (err) { /* ignore */ }
    }

    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const navItems = [
    { id: 'home', label: 'Inicio' },
    { id: 'projects', label: 'Proyectos' },
    { id: 'about', label: 'Sobre Mi' },
    { id: 'contact', label: 'Contacto' },
  ];

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    const headerHeight = document.querySelector('.header')?.offsetHeight || 80;
    if (section) {
      const offsetTop = section.getBoundingClientRect().top + window.pageYOffset - headerHeight;
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const panelVariants = {
    open: {
      x: 0,
      transition: { type: 'tween', duration: 0.34, ease: 'easeInOut', staggerChildren: 0.06, when: 'beforeChildren' },
    },
    closed: {
      x: '100%',
      transition: { type: 'tween', duration: 0.28, ease: 'easeInOut', staggerChildren: 0.04, staggerDirection: -1, when: 'afterChildren' },
    },
  };

  const itemVariants = {
    open: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 320, damping: 28 } },
    closed: { y: 18, opacity: 0, transition: { duration: 0.16 } },
  };

  return (
    <motion.header
      className={`header ${isScrolled ? 'scrolled' : ''} ${isMenuOpen ? 'menu-open' : ''}`}
      initial={{ y: -120 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.45, type: 'spring', stiffness: 120 }}
    >
      <motion.h1
        className="logo"
        whileHover={{ scale: 1.04 }}
        onClick={() => scrollToSection('home')}
        tabIndex={0}
        role="button"
        aria-label="Ir a inicio"
      >
        Joshua<span className="logo-highlight">Chavez</span>
      </motion.h1>

      <div
        className={`hamburger ${isMenuOpen ? 'active' : ''}`}
        onClick={() => setIsMenuOpen((v) => !v)}
        aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
        aria-expanded={isMenuOpen}
        role="button"
        tabIndex={0}
      >
        <div className="hamburger-line" />
        <div className="hamburger-line" />
        <div className="hamburger-line" />
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Overlay detrás del panel */}
            <motion.div
              className="menu-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.22 }}
              onClick={() => setIsMenuOpen(false)}
              aria-hidden="true"
            />

            <motion.nav
              className="nav-container"
              initial="closed"
              animate="open"
              exit="closed"
              variants={panelVariants}
              role="dialog"
              aria-modal="true"
              ref={navRef}
              tabIndex={-1}
            >
              <div className="nav-panel-header">
                <div className="nav-panel-brand" onClick={() => scrollToSection('home')} role="button" tabIndex={0}>
                  <div className="panel-avatar" aria-hidden="true">JC</div>
                  <div className="panel-brand-text">
                    <div className="panel-name">Joshua <span className="logo-highlight">Chavez</span></div>
                    <div className="panel-role">Desarrollador</div>
                  </div>
                </div>

                <button className="nav-close" aria-label="Cerrar menú" onClick={() => setIsMenuOpen(false)}>
                  <FaTimes />
                </button>
              </div>

              <motion.ul className="nav-list" aria-label="Enlaces principales">
                {navItems.map((item) => (
                  <motion.li
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="nav-item"
                    variants={itemVariants}
                    role="link"
                    tabIndex={0}
                  >
                    <span className="nav-item-label">{item.label}</span>
                    <span className="nav-item-arrow" aria-hidden="true">›</span>
                  </motion.li>
                ))}
              </motion.ul>

              <motion.a
                href="/joshua_cv.html"
                target="_blank"
                rel="noopener noreferrer"
                className="nav-cta-button"
                variants={itemVariants}
                onClick={() => setIsMenuOpen(false)}
              >
                <FaAddressCard />
                <span>Ver Currículum</span>
              </motion.a>

              <motion.div className="nav-socials" variants={itemVariants}>
                <SocialLinks />
              </motion.div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>

      {/* Navegación desktop */}
      <nav className="nav-container-desktop" aria-label="Navegación principal">
        <ul className="nav-list">
          {navItems.map((item, idx) => (
            <motion.li
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              initial={{ opacity: 0, x: 14 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.14 + idx * 0.06 }}
              whileHover={{ y: -2, color: '#64ffda' }}
              className="nav-item"
            >
              <span className="nav-item-label">{item.label}</span>
              <div className="nav-underline" />
            </motion.li>
          ))}
        </ul>
      </nav>
    </motion.header>
  );
}

export default Header;