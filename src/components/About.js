import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaNetworkWired, FaShieldAlt, FaTerminal, FaBug, FaMicrochip } from 'react-icons/fa';
import './About.css';

const About = () => {
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

  const highlights = [
    {
      icon: <FaNetworkWired />,
      title: "Datapath Engineering",
      description: "High-performance packet processing with VPP, DPDK, and custom data planes"
    },
    {
      icon: <FaTerminal />,
      title: "Systems Programming",
      description: "Linux internals, kernel networking, and container runtimes"
    },
    {
      icon: <FaMicrochip />,
      title: "Protocol Expertise",
      description: "TCP/IP, UDP, IPv6, DHCPv6, HTTPS, HTTP/3, CONNECT and CONNECT-UDP proxy mechanisms"
    },
    {
      icon: <FaShieldAlt />,
      title: "Network Security",
      description: "IPSec, TLS/DTLS, and QUIC protocol implementation and debugging"
    },
    {
      icon: <FaCode />,
      title: "Open Source",
      description: "Core contributor to VPP, CalicoVPP, curl, and systemd"
    },
    {
      icon: <FaBug />,
      title: "Binary Instrumentation",
      description: "Dynamic analysis and hooking with Frida-gum for reverse engineering SysV/Go ABI"
    }
  ];

  return (
    <section id="about" className="about">
      <div className="container">
        <motion.div
          className="about-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.h2 variants={itemVariants}>About Me</motion.h2>

          <div className="about-grid">
            <motion.div className="about-text" variants={itemVariants}>
              <div className="terminal-window">
                <div className="terminal-titlebar">
                  <div className="terminal-dot red" />
                  <div className="terminal-dot yellow" />
                  <div className="terminal-dot green" />
                  <span className="terminal-title">cat ~/about.md</span>
                </div>
                <div className="terminal-body">
                  <p>
                    I'm a systems and network software developer on the VPP team at Cisco Security,
                    focused on building high-performance networking and user-space data planes. With
                    6+ years of industry experience building SASE and SD-WAN solutions across Netskope,
                    VeloCloud, and Cisco, I specialize in low-level systems programming at the
                    intersection of networking and security.
                  </p>
                  <p>
                    My core expertise lies in C/C++ and Go, with working knowledge of Python and Rust.
                    I implement datapath software, work with security protocols like IPSec and TLS/DTLS,
                    and leverage acceleration frameworks such as DPDK. I'm very familiar with tools like
                    tcpdump, gdb, iptables, strace, and systemd — the everyday toolkit of someone who
                    lives in the terminal world debugging packet captures and tracing system calls.
                  </p>
                  <p>
                    Recently, I've been deeply involved with modern connectivity: IPv6, DHCPv6, HTTP/3
                    over QUIC, and proxy mechanisms like CONNECT, CONNECT-UDP, and MASQUE. I also have
                    hands-on experience using the Frida gum dynamic binary instrumentation (DBI) engine
                    for hooking system calls.
                  </p>
                  <p>
                    Beyond work, I actively contribute to open-source projects including curl, VPP
                    HostStack (user-space L4-L7), CalicoVPP (Kubernetes CNI), and systemd. I also build
                    agentic development tools — MCP servers, skills, and workflows for AI-assisted systems
                    and network troubleshooting.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div className="highlights-grid" variants={itemVariants}>
              {highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  className="highlight-card"
                  variants={itemVariants}
                  whileHover={{ scale: 1.03, y: -4 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="highlight-icon">
                    {highlight.icon}
                  </div>
                  <h3>{highlight.title}</h3>
                  <p>{highlight.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
