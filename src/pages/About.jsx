import React from 'react';
import { motion } from 'framer-motion';
// Importamos los íconos
import { 
  FaReact, FaNodeJs, FaPython, FaFigma, FaJs, 
  FaHtml5, FaCss3Alt, FaMobileAlt, FaDatabase, FaCodeBranch,
  FaCode // <-- ÍCONO AÑADIDO
} from 'react-icons/fa';
// 'SiCsharp' HA SIDO ELIMINADO DE LA LÍNEA SIGUIENTE
import { SiVite, SiFlutter, SiTypescript, SiDart } from 'react-icons/si';
import { TbBrandReactNative } from "react-icons/tb";
import '../styles/About.css';

// Componente para un item de habilidad
const SkillItem = ({ icon, name }) => (
  <div className="skill-item">
    {icon}
    <span>{name}</span>
  </div>
);

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

        {/* Sección de Experiencia y Objetivo (mantenida) */}
        <div className="about-grid">
          <motion.div 
            className="about-card"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h3>Mi Experiencia</h3>
            <p>
              Más de 2 años desarrollando aplicaciones web y móviles. 
              He participado en proyectos tecnologicos como JUDC en 2023 creando un sistema de facturación con C#, Hackathon nicaragua en los años 2023, 2024 y 2025 con ideas innovadoras, Rally Tecnologico de Innovación 2025 con el sistema de gestión AgroControl, todos estos proyectos he estado desde la conceptualización hasta el despliegue final, 
              trabajando con metodologías ágiles y colaborando con equipos multidisciplinarios.
            </p>
          </motion.div>

          <motion.div 
            className="about-card"
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
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

        {/* Sección de Habilidades (Rediseñada) */}
        <motion.div 
          className="skills-container"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <h3>Mis Herramientas y Fortalezas</h3>
          <div className="skills-grid-new">
            
            <div className="skill-category-card">
              <h4>Frontend</h4>
              <div className="skills-icons-grid">
                <SkillItem icon={<FaReact />} name="React" />
                <SkillItem icon={<SiVite />} name="Vite" />
                <SkillItem icon={<FaHtml5 />} name="HTML5" />
                <SkillItem icon={<FaCss3Alt />} name="CSS3" />
                <SkillItem icon={<FaJs />} name="JavaScript" />
                <SkillItem icon={<SiTypescript />} name="TypeScript" />
              </div>
            </div>

            <div className="skill-category-card">
              <h4>Backend</h4>
              <div className="skills-icons-grid">
                <SkillItem icon={<FaNodeJs />} name="Node.js" />
                <SkillItem icon={<FaPython />} name="Python" />
                <SkillItem icon={<FaDatabase />} name="FastAPI" />
                {/* ÍCONO CAMBIADO AQUÍ */}
                <SkillItem icon={<FaCode />} name="C# / ASP.NET" />
              </div>
            </div>
            
            <div className="skill-category-card">
              <h4>Mobile</h4>
              <div className="skills-icons-grid">
                <SkillItem icon={<TbBrandReactNative />} name="React Native" />
                <SkillItem icon={<SiFlutter />} name="Flutter" />
                <SkillItem icon={<SiDart />} name="Dart" />
                <SkillItem icon={<FaMobileAlt />} name="Android Studio" />
              </div>
            </div>

            <div className="skill-category-card">
              <h4>Diseño UI/UX</h4>
              {/* ESTA ES LA PARTE QUE SE CORTÓ */}
              <div className="skills-icons-grid">
                <SkillItem icon={<FaFigma />} name="Figma" />
                <SkillItem icon={<FaCodeBranch />} name="Axure RP" />
              </div>
            </div>

          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default About;