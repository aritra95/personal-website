import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import './OpenSource.css';

const projects = [
  {
    name: 'curl',
    description: 'Command line tool and library for transferring data with URLs. Implemented HTTP/3 proxy CONNECT and MASQUE CONNECT-UDP support for ngtcp2 QUIC.',
    role: 'Contributor — HTTP/3, QUIC, MASQUE',
    language: 'C',
    link: 'https://github.com/curl/curl',
    highlights: ['HTTP/3 proxy CONNECT', 'CONNECT-UDP', 'MASQUE', 'ngtcp2 QUIC']
  },
  {
    name: 'VPP (fd.io)',
    description: 'Vector Packet Processing — high-performance, scalable user-space network data plane. Enhancing HostStack, the user-space L4-L7 protocol implementation and IPv6 (ND Proxy).',
    role: 'Core Contributor — HostStack, Datapath',
    language: 'C',
    link: 'https://github.com/fdio/vpp',
    highlights: ['HostStack', 'Session Layer', 'TCP/UDP', 'IPv6/DHCPv6', 'NAT']
  },
  {
    name: 'CalicoVPP',
    description: 'Kubernetes CNI plugin that uses VPP as its data plane for high-performance pod networking, policy enforcement, and service mesh. Contributed to adding IPv6 support.',
    role: 'Contributor — VPP Dataplane Integration',
    language: 'Go',
    link: 'https://github.com/projectcalico/vpp-dataplane',
    highlights: ['Kubernetes CNI', 'Pod networking', 'VPP', 'Service mesh']
  },
  {
    name: 'systemd',
    description: 'System and service manager for Linux. Contributed bugfixes (DHCPv6) and feature enhancements (ARP Proxy) to networkd.',
    role: 'Contributor - networkd',
    language: 'C',
    link: 'https://github.com/systemd/systemd',
    highlights: ['networkd', 'udevd', 'Service management', 'Linux init system']
  }
];

const OpenSource = () => {
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

  return (
    <section id="opensource" className="opensource">
      <div className="container">
        <motion.div
          className="opensource-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.h2 variants={itemVariants}>Open Source</motion.h2>
          <motion.p className="opensource-subtitle" variants={itemVariants}>
            Active contributions to foundational networking and systems infrastructure.
          </motion.p>

          <div className="opensource-grid">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="project-card"
                variants={itemVariants}
                whileHover={{ y: -6 }}
              >
                <div className="project-header">
                  <div className="project-icon">
                    <FaGithub />
                  </div>
                  <div className="project-title-area">
                    <h3>{project.name}</h3>
                    <span className="project-lang">{project.language}</span>
                  </div>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                    title={`View ${project.name}`}
                  >
                    <FaExternalLinkAlt />
                  </a>
                </div>

                <p className="project-role">{project.role}</p>
                <p className="project-desc">{project.description}</p>

                <div className="project-highlights">
                  {project.highlights.map((h, i) => (
                    <span key={i} className="tech-tag">{h}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OpenSource;
