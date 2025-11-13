import React, { useState } from 'react';
import { motion } from 'framer-motion';

import { 
  FaUser, FaEnvelope, FaPencilAlt, FaPaperPlane, 
  FaUpload, FaSpinner, FaCheckCircle, FaRedo 
} from 'react-icons/fa';
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
  };

  const inputVariant = (delay = 0) => ({
    hidden: { x: -20, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.4, delay } }
  });

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
        <motion.div 
          className="success-container" 
          initial={{ opacity: 0, scale: 0.9 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 0.5 }}
        >
          <p className="success-message">
            <FaCheckCircle /> 
            ¡Gracias por tu mensaje! Te responderé pronto 😊
          </p>
          <button className="reset-button" onClick={handleReset}>
            <FaRedo /> <span>Enviar otro mensaje</span>
          </button>
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
          {/* Campo Nombre con Etiqueta Flotante */}
          <motion.div className="input-group" variants={inputVariant(0)} initial="hidden" whileInView="visible">
            <FaUser className="input-icon" />
            <input 
              type="text" 
              name="nombre" 
              id="nombre" 
              required 
              className="form-input" 
              value={formData.nombre} 
              onChange={handleChange} 
              placeholder=" " 
            />
            <label htmlFor="nombre" className="form-label">Tu nombre</label>
          </motion.div>

          {/* Campo Email con Etiqueta Flotante */}
          <motion.div className="input-group" variants={inputVariant(0.1)} initial="hidden" whileInView="visible">
            <FaEnvelope className="input-icon" />
            <input 
              type="email" 
              name="email" 
              id="email" 
              required 
              className="form-input" 
              value={formData.email} 
              onChange={handleChange} 
              placeholder=" "
            />
            <label htmlFor="email" className="form-label">Tu correo</label>
          </motion.div>

          {/* Campo Mensaje con Etiqueta Flotante */}
          <motion.div className="input-group" variants={inputVariant(0.2)} initial="hidden" whileInView="visible">
            <FaPencilAlt className="input-icon textarea-icon" />
            <textarea 
              name="message" 
              id="message" 
              rows="5" 
              required 
              className="form-textarea" 
              value={formData.message} 
              onChange={handleChange} 
              placeholder=" "
            />
            <label htmlFor="message" className="form-label">Escribe tu mensaje</label>
          </motion.div>

          {/* Campo de Archivo Personalizado */}
          <motion.div className="input-group" variants={inputVariant(0.3)} initial="hidden" whileInView="visible">
            <label htmlFor="file-upload" className="file-upload-label">
              <FaUpload />
              <span>{formData.file ? formData.file.name : "Adjuntar documento (opcional)"}</span>
            </label>
            <input 
              type="file" 
              name="file" 
              id="file-upload" 
              className="form-input-file" 
              onChange={handleChange} 
            />
          </motion.div>

          {/* Botón de Envío con Icono */}
          <motion.button 
            type="submit" 
            className="submit-btn" 
            disabled={status === 'sending'} 
            whileHover={{ scale: 1.05 }} 
            whileTap={{ scale: 0.95 }}
          >
            {status === 'sending' ? (
              <FaSpinner className="spin-icon" />
            ) : (
              <FaPaperPlane />
            )}
            <span>{status === 'sending' ? 'Enviando...' : 'Enviar Mensaje'}</span>
          </motion.button>
        </motion.form>
      )}
    </section>
  );
};

export default Contact;