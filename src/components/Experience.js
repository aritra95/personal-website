import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';
import './Experience.css';

const Experience = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { delayChildren: 0.2, staggerChildren: 0.12 }
    }
  };

  const itemVariants = {
    hidden: { x: -30, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.5 } }
  };

  const experiences = [
    {
      title: 'Software Engineer IV',
      company: 'Cisco Systems Inc.',
      location: 'San Jose, CA',
      period: 'May 2026 – Present',
      description: [
        'Member of the Vector Packet Processing (VPP) team within Cisco Security',
        'Enhancing HostStack — the user-space L4-L7 protocol implementation in VPP',
        'Advancing VPP dataplane integration for CalicoVPP CNI in Kubernetes environments',
        'Developing Go syscall interception with Frida as an alternative to LD_PRELOAD for Go apps',
        'Building MCP servers, skills, and agentic development/debugging workflows for the VPP ecosystem'
      ],
      technologies: ['VPP', 'HostStack (L4-L7)', 'C/C++', 'CalicoVPP', 'Go', 'Frida', 'TCP/IP', 'IPv6', 'MCP', 'gdb', 'tcpdump']
    },
    {
      title: 'Software Engineer III',
      company: 'Cisco Systems Inc.',
      location: 'San Jose, CA',
      period: 'Jun 2024 – May 2026',
      description: [
        'Member of the Vector Packet Processing (VPP) team within Cisco Security',
        'Enhancing HostStack — the user-space L4-L7 protocol implementation in VPP',
        'Advancing VPP dataplane integration for CalicoVPP CNI in Kubernetes environments',
        'Added HTTP/3 proxy CONNECT and MASQUE CONNECT-UDP support for the ngtcp2 QUIC stack in cURL',
        'Contributed to adding IPv6 support and DHCPv6 integration with networkd in CalicoVPP CNI',
      ],
      technologies: ['VPP', 'HostStack (L4-L7)', 'C/C++', 'CalicoVPP', 'Go', 'HTTP/3', 'QUIC', 'MASQUE', 'DHCPv6', 'gdb', 'tcpdump']
    },
    {
      title: 'Member of Technical Staff II',
      company: 'VeloCloud (VMware LLC - acquired by Broadcom Inc.)',
      location: 'Palo Alto, CA',
      period: 'Jul 2022 – Jun 2024',
      description: [
        'Active member of the Gateway and Routing pillars of the SASE SD-WAN data and control plane teams',
        'Resolved critical technical debt in BGP route-map design and contributed to adding OSPFv3 support',
        'Implemented persistent storage for statistical counters to assist with debugging/troubleshooting',
        'Contributed to addition of Mellanox DPDK PMD support to enhance ConnectX NIC performance',
      ],
      technologies: ['SD-WAN', 'SASE', 'BGP', 'OSPFv3', 'DPDK', 'Mellanox', 'C/C++', 'Python', 'gdb', 'tcpdump', 'Linux']
    },
    {
      title: 'Graduate Teaching Assistant (TA)',
      company: 'UC San Diego (UCSD) — Jacobs School of Engineering',
      location: 'San Diego, CA',
      period: 'Jan 2021 – Jun 2022',
      description: [
        'TA for CSE123 (Computer Networks) under Prof. Aaron Schulman & Prof. Alex Snoeren',
        'TA for CSE124 (Networked Systems) under Prof. George Porter',
        'TA for CSE141 (Computer Architecture) under Prof. Bryan Chin',
        'Led discussion sessions, prepared assignments, held office hours, graded exams'
      ],
      technologies: ['Computer Networks', 'Networked Systems', 'Computer Architecture', 'Teaching (TA)', 'C/C++', 'Go', 'Rust']
    },
    {
      title: 'Product Development Intern',
      company: 'VeloCloud (VMware LLC - acquired by Broadcom Inc.)',
      location: 'Palo Alto, CA',
      period: 'Jun 2021 – Sep 2021',
      description: [
        'Automated scale-testbed provisioning to enable developer performance testing',
        'Configured L2/L3 VLANs, VRFs, and BGP associations across lab infrastructure',
        'Containerized edge services to simulate large-scale tunnel deployments'
      ],
      technologies: ['Automation', 'BGP', 'VLAN', 'VRF', 'Docker', 'Python', 'Linux']
    },
    {
      title: 'Member of Technical Staff I',
      company: 'Netskope Inc.',
      location: 'Bengaluru, India',
      period: 'Jul 2018 – Jul 2020',
      description: [
        'Enhanced the IPsec solution with tunnel-status monitoring and per-tunnel bandwidth visibility',
        'Added support for multiple IPsec tunnels originating from a single source IP',
        'Improved the DTLS tunnel performance and resolved live production networking and performance issues',
        'Migrated the IPsec stack from strongSwan v5.3.5 to v5.7.2 to remediate security vulnerabilities',
      ],
      technologies: ['IPSec', 'Strongswan', 'TLS/DTLS', 'C/C++', 'gdb', 'tcpdump', 'iptables', 'Linux']
    },
    {
      title: 'Internship',
      company: 'Netskope Inc.',
      location: 'Bengaluru, India',
      period: 'Jan 2018 – Jun 2018',
      description: [
        'Implemented device fingerprinting to uniquely identify devices steering traffic to Netskope cloud',
        'Enhanced a library for loading Netskope private root CA certificate in Firefox certdb',
        'Migrated the Netskope Client codebase from Visual Studio 2012 to Visual Studio 2015'
      ],
      technologies: ['C/C++', 'Windows Registry', 'Visual Studio']
    }
  ];

  return (
    <section id="experience" className="experience">
      <div className="container">
        <motion.div
          className="experience-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
        >
          <motion.h2 variants={itemVariants}>Professional Experience</motion.h2>

          <div className="timeline">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className="timeline-item"
                variants={itemVariants}
              >
                <div className="timeline-marker">
                  <FaBriefcase />
                </div>
                <div className="timeline-content card">
                  <div className="experience-header">
                    <div className="experience-title-row">
                      <h3>{exp.title}</h3>
                      <span className="location">
                        <FaMapMarkerAlt /> {exp.location}
                      </span>
                    </div>
                    <div className="experience-meta">
                      <span className="company">{exp.company}</span>
                      <span className="period">
                        <FaCalendarAlt /> {exp.period}
                      </span>
                    </div>
                  </div>

                  <ul className="experience-description">
                    {exp.description.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>

                  <div className="technologies">
                    {exp.technologies.map((tech, i) => (
                      <span key={i} className="tech-tag">{tech}</span>
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

export default Experience;
