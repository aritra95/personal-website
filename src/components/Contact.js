import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaLinkedin, FaGithub, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { delayChildren: 0.2, staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
  };

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      title: "Email",
      value: "aritra21295@gmail.com",
      link: "mailto:aritra21295@gmail.com"
    },
    {
      icon: <FaLinkedin />,
      title: "LinkedIn",
      value: "linkedin.com/in/aritra95",
      link: "https://www.linkedin.com/in/aritra95/"
    },
    {
      icon: <FaGithub />,
      title: "GitHub",
      value: "github.com/aritrbas",
      link: "https://github.com/aritrbas/"
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Location",
      value: "Sunnyvale, CA, USA",
      link: null
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.elements.name.value;
    const email = form.elements.email.value;
    const message = form.elements.message.value;
    const subject = encodeURIComponent(`Message from ${name}`);
    const body = encodeURIComponent(`From: ${name} (${email})\n\n${message}`);
    window.location.href = `mailto:aritra21295@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <motion.div
          className="contact-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.h2 variants={itemVariants}>Get In Touch</motion.h2>
          <motion.p className="contact-subtitle" variants={itemVariants}>
            Interested in collaborating on networking, systems programming, or open-source projects? Let's connect.
          </motion.p>

          <div className="contact-grid">
            <motion.div className="contact-info" variants={itemVariants}>
              <h3>Contact Information</h3>
              <div className="contact-items">
                {contactInfo.map((item, index) => (
                  <motion.div
                    key={index}
                    className="contact-item"
                    variants={itemVariants}
                    whileHover={{ x: 4 }}
                  >
                    <div className="contact-icon">
                      {item.icon}
                    </div>
                    <div className="contact-details">
                      <h4>{item.title}</h4>
                      {item.link ? (
                        <a href={item.link} target="_blank" rel="noopener noreferrer">
                          {item.value}
                        </a>
                      ) : (
                        <span>{item.value}</span>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div className="contact-form-container" variants={itemVariants}>
              <form className="contact-form card" onSubmit={handleSubmit}>
                <h3>Send a Message</h3>

                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    placeholder="$ echo $YOUR_NAME"
                    required
                  />
                </div>

                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    placeholder="$ echo $YOUR_EMAIL"
                    required
                  />
                </div>

                <div className="form-group">
                  <textarea
                    name="message"
                    placeholder="$ cat message.txt"
                    rows="5"
                    required
                  ></textarea>
                </div>

                <motion.button
                  type="submit"
                  className="btn submit-btn"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <FaPaperPlane /> Send Message
                </motion.button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <footer className="footer">
        <div className="container">
          <motion.div
            className="footer-content"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <p>&copy; {new Date().getFullYear()} Aritra Basu. All rights reserved.</p>
            <p>Built with React & Framer Motion — terminal style.</p>
          </motion.div>
        </div>
      </footer>
    </section>
  );
};

export default Contact;
