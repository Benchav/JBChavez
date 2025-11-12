import React, { useState } from 'react';
import { motion } from 'framer-motion';
import '../styles/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    message: '',
    file: null,
    to: 'joshua44benja@gmail.com',
    redirect_to: 'https://tu-dominio.com/gracias.html'
  });
  const [status, setStatus] = useState('idle');

  const handleChange = (e) => {
    const { name, files, value } = e.target;
    if (e.target.type === 'file') {
      setFormData(prev => ({ ...prev, file: files[0] || null }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const payload = new FormData();
      payload.append('name', formData.nombre);
      payload.append('email', formData.email);
      payload.append('message', formData.message);
      if (formData.file) payload.append('files', formData.file);
      payload.append('to', formData.to);
      payload.append('redirect_to', formData.redirect_to);

      await fetch('https://forms-nicpages.vercel.app/submit-form', {
        method: 'POST',
        body: payload,
      });
    } catch (err) {
      console.error('Error de envío (ignorando para UI):', err);
    } finally {
      setStatus('success');
    }
  };

  const handleReset = () => {
    setFormData({ nombre: '', email: '', message: '', file: null, to: formData.to, redirect_to: formData.redirect_to });
    setStatus('idle');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="contact" className="contact-section">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
      >Contáctame</motion.h2>

      {status === 'success' ? (
        <motion.div className="success-container" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
          <p className="success-message">¡Gracias por tu mensaje! Te responderé pronto 😊</p>
          <button className="reset-button" onClick={handleReset}>Enviar otro mensaje</button>
        </motion.div>
      ) : (
        <motion.form
          className="contact-form"
          onSubmit={handleSubmit}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <motion.div className="input-group" initial={{ x: -20, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 0.4 }}>
            <input type="text" name="nombre" placeholder="Tu nombre" required className="form-input" value={formData.nombre} onChange={handleChange} />
          </motion.div>

          <motion.div className="input-group" initial={{ x: -20, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 0.4, delay: 0.1 }}>
            <input type="email" name="email" placeholder="Tu correo" required className="form-input" value={formData.email} onChange={handleChange} />
          </motion.div>

          <motion.div className="input-group" initial={{ x: -20, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 0.4, delay: 0.2 }}>
            <textarea name="message" rows="5" placeholder="Escribe tu mensaje" required className="form-textarea" value={formData.message} onChange={handleChange} />
          </motion.div>

          <motion.div className="input-group" initial={{ x: -20, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 0.4, delay: 0.3 }}>
            <label className="form-label">Adjuntar documento (opcional):</label>
            <input type="file" name="file" className="form-input" onChange={handleChange} />
          </motion.div>

          <motion.button type="submit" className="submit-btn" disabled={status === 'sending'} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            {status === 'sending' ? 'Enviando...' : 'Enviar Mensaje'}
          </motion.button>
        </motion.form>
      )}
    </section>
  );
};

export default Contact;