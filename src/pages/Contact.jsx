import React, { useState } from 'react';
import { motion } from 'framer-motion';
import '../styles/Contact.css';

function Contact() {
  const [form, setForm] = useState({
    nombre: '',
    correo: '',
    mensaje: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent('Mensaje desde mi portafolio');
    const body = encodeURIComponent(`Nombre: ${form.nombre}\nCorreo: ${form.correo}\n\nMensaje:\n${form.mensaje}`);
    window.location.href = `mailto:joshua44benja@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="contact-section">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
      >
        Contáctame
      </motion.h2>
      
      <motion.form 
        className="contact-form"
        onSubmit={handleSubmit}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <motion.div
          className="input-group"
          initial={{ x: -20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          <input
            type="text"
            name="nombre"
            placeholder="Tu nombre"
            value={form.nombre}
            onChange={handleChange}
            required
            className="form-input"
          />
        </motion.div>

        <motion.div
          className="input-group"
          initial={{ x: -20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <input
            type="email"
            name="correo"
            placeholder="Tu correo"
            value={form.correo}
            onChange={handleChange}
            required
            className="form-input"
          />
        </motion.div>

        <motion.div
          className="input-group"
          initial={{ x: -20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <textarea
            name="mensaje"
            rows="5"
            placeholder="Escribe tu mensaje"
            value={form.mensaje}
            onChange={handleChange}
            required
            className="form-textarea"
          />
        </motion.div>

        <motion.button 
          type="submit"
          className="submit-btn"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Enviar Mensaje
        </motion.button>
      </motion.form>
    </section>
  );
}

export default Contact;