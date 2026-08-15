import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';
import './Education.css';

const educationItems = [
  {
    institution: 'UC San Diego (UCSD) — Jacobs School of Engineering',
    degree: 'Master of Science (MS)',
    field: 'Computer Science (CS)',
    period: 'Jan 2021 – Jun 2022',
    location: 'San Diego, CA',
    coursework: ['Distributed Computing', 'Operating Systems', 'Virtualization', 'Computer Security', 'Applied Cryptography', 'Computer Architecture', 'Database Systems', 'Design of Algorithms', 'ML: Learning Algorithms'],
    abbr: 'UCSD'
  },
  {
    institution: 'Vellore Institute of Technology (VIT)',
    degree: 'Bachelor of Technology (B.Tech)',
    field: 'Electronics and Communications Engineering (ECE)',
    period: 'Jul 2014 – Apr 2018',
    location: 'Vellore, India',
    coursework: ['Computer Communication', 'Digital Communication', 'Wireless Communication', 'Information Theory', 'Probability Theory', 'Digital Logic Design', 'VLSI System Design', 'Computer Architecture', 'Data Structures'],
    abbr: 'VIT'
  },
  {
    institution: 'Garden High School (GHS)',
    degree: 'ICSE 2012 + ISC 2014',
    field: 'Physics, Chemistry, Mathematics & Computer Science',
    period: '2005 – 2014',
    location: 'Kolkata, India',
    coursework: ['Physics', 'Chemistry', 'Mathematics', 'Computer Science'],
    abbr: 'GHS'
  }
];

const Education = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { delayChildren: 0.2, staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { x: -30, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.5 } }
  };

  return (
    <section id="education" className="education">
      <div className="container">
        <motion.div
          className="education-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.h2 variants={itemVariants}>Education</motion.h2>

          <div className="timeline">
            {educationItems.map((item, index) => (
              <motion.div
                key={index}
                className="timeline-item"
                variants={itemVariants}
              >
                <div className="timeline-marker">
                  <FaGraduationCap />
                </div>

                <div className="timeline-content card">
                  <div className="institution-badge">{item.abbr}</div>
                  <div className="education-header">
                    <div className="education-title-row">
                      <h3>{item.institution}</h3>
                      <span className="location">
                        <FaMapMarkerAlt /> {item.location}
                      </span>
                    </div>
                    <div className="education-meta">
                      <span className="degree">{item.degree}</span>
                      <span className="period">
                        <FaCalendarAlt /> {item.period}
                      </span>
                    </div>
                    <p className="field-of-study">{item.field}</p>
                  </div>

                  <div className="coursework">
                    {item.coursework.map((course, i) => (
                      <span key={i} className="course-tag">{course}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
