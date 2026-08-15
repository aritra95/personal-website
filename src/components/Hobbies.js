import React from 'react';
import { motion } from 'framer-motion';
import { FaChess, FaPlane, FaMusic, FaUtensils, FaFlagCheckered } from 'react-icons/fa';
import { MdSportsCricket } from 'react-icons/md';
import './Hobbies.css';

const Hobbies = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { delayChildren: 0.2, staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
  };

  const hobbies = [
    {
      icon: <FaUtensils />,
      title: 'Cooking',
      description: 'Experimenting with diverse cuisines and perfecting recipes from around the world.',
      color: '#e74c3c'
    },
    {
      icon: <FaChess />,
      title: 'Chess',
      description: 'Strategic thinking through competitive chess. Studying openings and endgame theory.',
      color: '#95a5a6'
    },
    {
      icon: <FaPlane />,
      title: 'Aviation',
      description: 'Training to become a private pilot. Fascinated by aerodynamics and flight mechanics.',
      color: '#3498db'
    },
    {
      icon: <FaFlagCheckered />,
      title: 'Formula 1',
      description: 'Avid F1 fan following cutting-edge engineering, race strategies, and intense rivalries.',
      color: '#e67e22'
    },
    {
      icon: <MdSportsCricket />,
      title: 'Cricket',
      description: 'Lifelong passion — from backyard matches in India to following international tournaments.',
      color: '#27ae60'
    },
    {
      icon: <FaMusic />,
      title: 'Piano',
      description: 'Playing classical and contemporary pieces — a creative balance to low-level debugging.',
      color: '#8e44ad'
    }
  ];

  return (
    <section id="hobbies" className="hobbies">
      <div className="container">
        <motion.div
          className="hobbies-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.h2 variants={itemVariants}>Hobbies & Interests</motion.h2>
          <motion.p className="hobbies-subtitle" variants={itemVariants}>
            Beyond the terminal — things that keep me inspired.
          </motion.p>

          <div className="hobbies-grid">
            {hobbies.map((hobby, index) => (
              <motion.div
                key={index}
                className="hobby-card"
                variants={itemVariants}
                whileHover={{ y: -6, scale: 1.02 }}
              >
                <div className="hobby-icon-wrapper" style={{ background: hobby.color }}>
                  {hobby.icon}
                </div>
                <h3>{hobby.title}</h3>
                <p>{hobby.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hobbies;
