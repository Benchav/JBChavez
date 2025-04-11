import React from 'react';
import { motion } from 'framer-motion';
import '../styles/About.css';

function About() {
  return (
    <section id="about" className="about-section">
      <motion.div 
        className="about-content"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h2 
          className="section-title"
          initial={{ y: 20 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Sobre Mí
        </motion.h2>

        <div className="about-grid">
          <motion.div 
            className="about-card"
            initial={{ x: -50 }}
            whileInView={{ x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3>Mi Experiencia</h3>
            <p>
              Más de 2 años desarrollando aplicaciones web y móviles. 
              He participado en proyectos desde la conceptualización hasta el despliegue final, 
              trabajando con metodologías ágiles y colaborando con equipos multidisciplinarios.
            </p>
          </motion.div>

          <motion.div 
            className="about-card"
            initial={{ x: 50 }}
            whileInView={{ x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3>Mi Objetivo</h3>
            <p>
              Crear soluciones digitales impactantes que combinen funcionalidad 
              y diseño excepcional. Busco constantemente desafíos que me permitan 
              crecer como desarrollador y contribuir a proyectos innovadores.
            </p>
          </motion.div>
        </div>

        <motion.div 
          className="skills-container"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <h3>Mis Fortalezas</h3>
          <div className="skills-grid">
            <div className="skill-category">
              <h4>Desarrollo Frontend</h4>
              <ul>
                <li>React</li>
                <li>JavaScript</li>
                <li>HTML5/CSS3</li>
                <li>Responsive Design</li>
              </ul>
            </div>

            <div className="skill-category">
              <h4>Diseño UI/UX</h4>
              <ul>
                <li>Axure RP</li>
                <li>Prototipado</li>
                <li>Design Systems</li>
                <li>Interacciones</li>
              </ul>
            </div>

            <div className="skill-category">
              <h4>Mobile</h4>
              <ul>
                <li>React Native</li>
                <li>Flutter</li>
                <li>Performance</li>
                <li>APIs REST</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default About;