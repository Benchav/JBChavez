import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Home.css';

function Home() {
  return (
    <section id="home" className="home">
      <div className="home-content">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="img-container"
        >
          <img 
            src="https://i.ibb.co/rRb27G8C/profile.jpg" 
            alt="Joshua Chávez" 
            className="profile-img" 
          />
        </motion.div>

        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="title"
        >
          Hola, Soy <span className="name-highlight">Joshua</span>
        </motion.h1>

        <motion.h2
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="subtitle"
        >
          Desarrollador Frontend
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="description"
        >
          Apasionado por la tecnología y el desarrollo de aplicaciones web.
          <br />Participante en Hackathon Nicaragua y entusiasta de React, React Native, Flutter y Diseño UX/UI.
        </motion.p>

        <motion.a
          href="https://unanmanagua-my.sharepoint.com/:b:/g/personal/joshua_chavez22906906_estu_unan_edu_ni/ESfOJlGe3s5LiRj_J0gL0BoBUPobbHifh-X0hon0K26-WA?e=rebwFv"
          className="cv-button"
          download
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="button-text">Descargar CV</span>
          <span className="button-icon">↓</span>
        </motion.a>
      </div>
    </section>
  );
}

export default Home;