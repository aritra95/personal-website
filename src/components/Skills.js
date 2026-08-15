import React from 'react';
import { motion } from 'framer-motion';
import {
  FaPython,
  FaGitAlt,
  FaDocker,
  FaLinux,
  FaNetworkWired,
  FaLock,
  FaServer,
  FaCubes,
  FaTerminal,
  FaRobot,
  FaBug
} from 'react-icons/fa';
import {
  SiC,
  SiCplusplus,
  SiGo,
  SiRust,
  SiKubernetes,
  SiWireshark,
  SiGnubash
} from 'react-icons/si';
import './Skills.css';

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { delayChildren: 0.2, staggerChildren: 0.08 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.4 } }
  };

  const skillCategories = [
    {
      title: "Languages",
      abbr: "LANG",
      skills: [
        { name: "C", icon: <SiC />, level: 90 },
        { name: "C++", icon: <SiCplusplus />, level: 85 },
        { name: "Go", icon: <SiGo />, level: 80 },
        { name: "Bash/Shell", icon: <SiGnubash />, level: 80 },
        { name: "Python", icon: <FaPython />, level: 75 },
        { name: "Rust", icon: <SiRust />, level: 60 }
      ]
    },
    {
      title: "Networking & Protocols",
      abbr: "NET",
      skills: [
        { name: "TCP/IP / UDP", icon: <FaNetworkWired />, level: 95 },
        { name: "IPv6 / DHCPv6", icon: <FaNetworkWired />, level: 90 },
        { name: "IPSec / DTLS / TLS", icon: <FaLock />, level: 90 },
        { name: "HTTP/3 / QUIC", icon: <FaNetworkWired />, level: 88 },
        { name: "BGP / OSPF / DNS / DHCP", icon: <FaServer />, level: 88 },
        { name: "CONNECT / CONNECT-UDP / MASQUE", icon: <FaCubes />, level: 85 },
        { name: "Ethernet / ARP / VLAN", icon: <FaNetworkWired />, level: 92 },
        { name: "SD-WAN", icon: <FaCubes />, level: 85 }
      ]
    },
    {
      title: "Systems & Platforms",
      abbr: "SYS",
      skills: [
        { name: "Linux Kernel / Networking", icon: <FaLinux />, level: 90 },
        { name: "Docker", icon: <FaDocker />, level: 85 },
        { name: "systemd / networkd / udevd", icon: <FaTerminal />, level: 80 },
        { name: "VPP / DPDK", icon: <FaServer />, level: 80 },
        { name: "Kubernetes", icon: <SiKubernetes />, level: 75 },
        { name: "Routing Suites (FRR)", icon: <FaServer />, level: 70 }
      ]
    },
    {
      title: "Tools & Debugging",
      abbr: "TOOL",
      skills: [
        { name: "gdb", icon: <FaBug />, level: 90 },
        { name: "tcpdump / Wireshark", icon: <SiWireshark />, level: 90 },
        { name: "Git", icon: <FaGitAlt />, level: 90 },
        { name: "strace / iperf / valgrind", icon: <FaBug />, level: 80 },
        { name: "Agentic AI / MCP Servers", icon: <FaRobot />, level: 80 },
        { name: "iptables / nftables", icon: <FaLinux />, level: 75 },
        { name: "Frida (Binary Instrumentation)", icon: <FaBug />, level: 75 }
      ]
    }
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <motion.div
          className="skills-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <motion.h2 variants={itemVariants}>Skills & Technologies</motion.h2>

          <div className="skills-grid">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                className="skill-category"
                variants={itemVariants}
              >
                <div className="skill-category-header">
                  <span className="skill-abbr">{category.abbr}</span>
                  <h3>{category.title}</h3>
                </div>
                <div className="skills-list">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      className="skill-item"
                      variants={itemVariants}
                    >
                      <div className="skill-header">
                        <div className="skill-info">
                          <span className="skill-icon">{skill.icon}</span>
                          <span className="skill-name">{skill.name}</span>
                        </div>
                        <span className="skill-percentage">{skill.level}%</span>
                      </div>
                      <div className="skill-bar">
                        <motion.div
                          className="skill-progress"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 0.8, delay: skillIndex * 0.06 }}
                          viewport={{ once: true }}
                        />
                      </div>
                    </motion.div>
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

export default Skills;
