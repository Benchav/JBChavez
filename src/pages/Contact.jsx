import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm, ValidationError } from '@formspree/react';
import '../styles/Contact.css';

function Contact() {
  const [state, handleSubmit] = useForm("xkgjkdde");
  const [showForm, setShowForm] = useState(true);

  const handleReset = () => {
    setShowForm(true);
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
      >
        Contáctame
      </motion.h2>
      
      {state.succeeded && !showForm ? (
        <motion.div
          className="success-container"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <p className="success-message">
            ¡Gracias por tu mensaje! Te responderé pronto 😊
          </p>
          <button className="reset-button" onClick={handleReset}>
            Enviar otro mensaje
          </button>
        </motion.div>
      ) : (
        <motion.form 
          className="contact-form"
          onSubmit={(e) => {
            handleSubmit(e);
            setShowForm(false);
          }}
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
              name="email"
              placeholder="Tu correo"
              required
              className="form-input"
            />
            <ValidationError 
              prefix="Correo" 
              field="email"
              errors={state.errors}
            />
          </motion.div>

          <motion.div
            className="input-group"
            initial={{ x: -20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <textarea
              name="message"
              rows="5"
              placeholder="Escribe tu mensaje"
              required
              className="form-textarea"
            />
            <ValidationError 
              prefix="Mensaje" 
              field="message"
              errors={state.errors}
            />
          </motion.div>

          <motion.button 
            type="submit"
            className="submit-btn"
            disabled={state.submitting}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Enviar Mensaje
          </motion.button>
        </motion.form>
      )}
    </section>
  );
}

export default Contact;