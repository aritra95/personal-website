import React from 'react';
import { motion } from 'framer-motion';
import { FaBookOpen, FaCalendarAlt } from 'react-icons/fa';
import './Publications.css';

const publications = [
  {
    title: 'A Bayesian approach for PAPR and MUI reduction in OFDM-based massive MIMO systems',
    venue: 'International Journal of Engineering & Technology (IJET)',
    date: 'Dec 2018',
    summary: 'Studies a Bayesian PAPR reduction algorithm for OFDM-based massive MIMO downlink systems using variational EM and GAMP to reduce computational complexity while improving power efficiency.',
    link: 'https://www.sciencepubco.com/index.php/ijet/article/view/19427'
  },
  {
    title: 'A Study on the Integration of Machine Learning in Wireless Communication',
    venue: 'IEEE International Conference on Communication and Signal Processing',
    date: 'Apr 2018',
    summary: 'Examines how machine learning can extract actionable insights from massive network traffic data while accounting for limited communication resources and enabling network optimization.',
    link: 'https://ieeexplore.ieee.org/document/8524369'
  },
  {
    title: 'Shortest Path Establishment Approaches for Static and Dynamic Mobile Nodes with QoS',
    venue: 'Electronic Government, an International Journal — Inderscience Publishers',
    date: 'Feb 2018',
    summary: 'Proposes MST-based genetic algorithm and Distance Vector Method routing approaches, benchmarked against Dijkstra and Bellman-Ford on mobile ad hoc network scenarios.',
    link: 'https://www.inderscienceonline.com/doi/abs/10.1504/EG.2018.089509'
  },
  {
    title: 'Performance Analysis of Regression and Classification Models in the Prediction of Breast Cancer',
    venue: 'Indian Journal of Science & Technology (INDJST)',
    date: 'Jan 2018',
    summary: 'Evaluates Decision Tree, SVM, K-NN, and Random Forest classifiers for breast cancer diagnosis, identifying smallest feature subsets for accurate predictions.',
    link: 'https://indjst.org/articles/performance-analysis-of-regression-and-classification-models-in-the-prediction-of-breast-cancer'
  },
  {
    title: 'Wideband Low Profile Antenna for WLAN and WiMAX Applications',
    venue: 'National Conference on Design Innovation for 3C\'s',
    date: 'Apr 2017',
    summary: 'Presents low-profile antenna designs covering ISM, WLAN, WiMAX, and HIPERLAN2 bands, achieving 110% bandwidth and return loss better than -10 dB from 2.4-6.4 GHz.',
    link: null
  },
  {
    title: 'A Survey of Performance Analysis Tools for OpenMP and MPI',
    venue: 'Indian Journal of Science & Technology (INDJST)',
    date: 'Nov 2016',
    summary: 'Compares performance analysis tools for OpenMP and MPI parallel programming ecosystems, guiding practitioners toward suitable tooling for multi-core workloads.',
    link: 'https://indjst.org/articles/a-survey-of-performance-analysis-tools-for-openmp-and-mpi'
  }
];

const Publications = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { delayChildren: 0.2, staggerChildren: 0.12 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
  };

  return (
    <section id="publications" className="publications">
      <div className="container">
        <motion.div
          className="publications-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <motion.h2 variants={itemVariants}>Publications</motion.h2>

          <div className="publications-grid">
            {publications.map((pub, index) => (
              <motion.div
                key={index}
                className="publication-card"
                variants={itemVariants}
                whileHover={{ y: -4 }}
              >
                <div className="publication-header">
                  <div className="pub-icon">
                    <FaBookOpen />
                  </div>
                  <div>
                    <h3>
                      {pub.link ? (
                        <a href={pub.link} target="_blank" rel="noopener noreferrer">
                          {pub.title}
                        </a>
                      ) : (
                        pub.title
                      )}
                    </h3>
                    <div className="publication-meta">
                      <span className="venue">{pub.venue}</span>
                      <span className="date">
                        <FaCalendarAlt /> {pub.date}
                      </span>
                    </div>
                  </div>
                </div>
                <p className="publication-summary">{pub.summary}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Publications;
