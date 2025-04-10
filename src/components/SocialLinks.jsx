import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import '../styles/SocialLinks.css';

function SocialLinks() {
  const socialItems = [
    {
      icon: <FaGithub />,
      url: "https://github.com/Benchav",
      name: "GitHub"
    },
    {
      icon: <FaLinkedin />,
      url: "https://www.linkedin.com/in/joshua-benjamin-ch%C3%A1vez-lau-44a65534b/",
      name: "LinkedIn"
    },
    {
      icon: <FaEnvelope />,
      url: "mailto:joshua44benja@gmail.com",
      name: "Email"
    }
  ];

  return (
    <motion.div 
      className="social-links"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5 }}
    >
      {socialItems.map((item, index) => (
        <motion.a
          key={item.name}
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
          whileHover={{ 
            y: -5,
            color: '#64ffda'
          }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ 
            delay: index * 0.1,
            type: "spring",
            stiffness: 100
          }}
          aria-label={item.name}
        >
          {item.icon}
        </motion.a>
      ))}
    </motion.div>
  );
}

export default SocialLinks;