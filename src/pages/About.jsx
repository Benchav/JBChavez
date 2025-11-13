import React from 'react';
import { motion } from 'framer-motion';
// Importamos los íconos
import { 
  FaReact, FaNodeJs, FaPython, FaFigma, FaJs, 
  FaHtml5, FaCss3Alt, FaMobileAlt, FaDatabase, FaCodeBranch,
  FaCode
} from 'react-icons/fa';
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

// --- NUEVO: Variantes para animaciones escalonadas ---
const gridVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // Cada hijo aparecerá 0.15s después
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.4 }
  }
};
// ---------------------------------------------------


function About() {
  return (
    <section id="about" className="about-section">
      <motion.div 
        className="about-content"
        initial="hidden" // Usamos los estados de las variantes
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }} // Se activa al ver el 20%
      >
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Sobre Mí
        </motion.h2>

        {/* Sección de Experiencia y Objetivo (Animada) */}
        <motion.div 
          className="about-grid"
          variants={gridVariants} // Aplicamos las variantes de la grilla
        >
          <motion.div 
            className="about-card"
            variants={cardVariants} // Aplicamos las variantes de tarjeta
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
            variants={cardVariants} // Aplicamos las variantes de tarjeta
          >
            <h3>Mi Objetivo</h3>
            <p>
              Crear soluciones digitales impactantes que combinen funcionalidad 
              y diseño excepcional. Busco constantemente desafíos que me permitan 
              crecer como desarrollador y contribuir a proyectos innovadores.
            </p>
          </motion.div>
        </motion.div>

        {/* Sección de Habilidades (Rediseñada) */}
        <div className="skills-container"> {/* Quitamos la animación de este div */}
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
          >
            Mis Herramientas y Fortalezas
          </motion.h3>
          
          <motion.div 
            className="skills-grid-new"
            variants={gridVariants} // Aplicamos las variantes de grilla
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            
            <motion.div className="skill-category-card" variants={cardVariants}>
              <h4>Frontend</h4>
              <div className="skills-icons-grid">
                <SkillItem icon={<FaReact />} name="React" />
                <SkillItem icon={<SiVite />} name="Vite" />
                <SkillItem icon={<FaHtml5 />} name="HTML5" />
                <SkillItem icon={<FaCss3Alt />} name="CSS3" />
                <SkillItem icon={<FaJs />} name="JavaScript" />
                <SkillItem icon={<SiTypescript />} name="TypeScript" />
              </div>
            </motion.div>

            <motion.div className="skill-category-card" variants={cardVariants}>
              <h4>Backend</h4>
              <div className="skills-icons-grid">
                <SkillItem icon={<FaNodeJs />} name="Node.js" />
                <SkillItem icon={<FaPython />} name="Python" />
                <SkillItem icon={<FaDatabase />} name="FastAPI" />
                <SkillItem icon={<FaCode />} name="C# / ASP.NET" />
              </div>
            </motion.div>
            
            <motion.div className="skill-category-card" variants={cardVariants}>
              <h4>Mobile</h4>
              <div className="skills-icons-grid">
                <SkillItem icon={<TbBrandReactNative />} name="React Native" />
                <SkillItem icon={<SiFlutter />} name="Flutter" />
                <SkillItem icon={<SiDart />} name="Dart" />
                <SkillItem icon={<FaMobileAlt />} name="Android Studio" />
              </div>
            </motion.div>

            <motion.div className="skill-category-card" variants={cardVariants}>
              <h4>Diseño UI/UX</h4>
              <div className="skills-icons-grid">
                <SkillItem icon={<FaFigma />} name="Figma" />
                <SkillItem icon={<FaCodeBranch />} name="Axure RP" />
              </div>
            </motion.div>

          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

export default About;