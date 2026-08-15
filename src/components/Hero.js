import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaEnvelope, FaDownload } from 'react-icons/fa';
import './Hero.css';

const TERMINAL_LINES = [
  { prompt: 'aritra@dev:~$', command: ' whoami', output: 'Aritra Basu — Systems & Network Software Developer' },
  { prompt: 'aritra@dev:~$', command: ' wc -l ~/.experience', output: '6+ years of systems & network programming' },
  { prompt: 'aritra@dev:~$', command: ' cat /proc/stack', output: 'C/C++ | Go | Python | Rust | Bash' },
  { prompt: 'aritra@dev:~$', command: ' cat /proc/focus', output: 'VPP | DPDK | TCP/IP | QUIC | HTTP/3 | MASQUE | IPv6 | DHCPv6 | IPSec' },
  { prompt: 'aritra@dev:~$', command: ' cat /proc/tools', output: 'gdb | tcpdump | iptables | strace | iperf | Kubernetes | Docker | AWS' },
  { prompt: 'aritra@dev:~$', command: ' git shortlog --open-source', output: 'VPP | CalicoVPP | curl | systemd' },
];

const Hero = () => {
  const canvasRef = useRef(null);
  const [lines, setLines] = useState([]);
  const [currentLine, setCurrentLine] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);
  const [showOutput, setShowOutput] = useState(false);
  const [typingDone, setTypingDone] = useState(false);

  // Matrix rain effect
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();

    const chars = '01ABCDEF{}[]<>/\\|:;~`!@#$%^&*()+-=_';
    const fontSize = 14;
    const columns = Math.floor(canvas.width / fontSize);
    const drops = Array.from({ length: columns }, () => Math.random() * -100);

    const draw = () => {
      ctx.fillStyle = 'rgba(10, 10, 10, 0.06)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = 'rgba(0, 255, 65, 0.12)';
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    const interval = setInterval(draw, 55);
    window.addEventListener('resize', resize);
    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', resize);
    };
  }, []);

  // Typing animation
  useEffect(() => {
    if (currentLine >= TERMINAL_LINES.length) {
      setTypingDone(true);
      return;
    }

    const line = TERMINAL_LINES[currentLine];

    if (!showOutput) {
      if (currentChar < line.command.length) {
        const timer = setTimeout(() => setCurrentChar(c => c + 1), 40 + Math.random() * 30);
        return () => clearTimeout(timer);
      } else {
        const timer = setTimeout(() => setShowOutput(true), 300);
        return () => clearTimeout(timer);
      }
    } else {
      const timer = setTimeout(() => {
        setLines(prev => [...prev, { ...line, typed: line.command }]);
        setCurrentLine(l => l + 1);
        setCurrentChar(0);
        setShowOutput(false);
      }, 400);
      return () => clearTimeout(timer);
    }
  }, [currentLine, currentChar, showOutput]);

  return (
    <section id="home" className="hero">
      <canvas ref={canvasRef} className="matrix-canvas" />
      <div className="hero-overlay" />

      <div className="container hero-container">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="terminal-window hero-terminal">
            <div className="terminal-titlebar">
              <div className="terminal-dot red" />
              <div className="terminal-dot yellow" />
              <div className="terminal-dot green" />
              <span className="terminal-title">aritra@dev: ~</span>
            </div>
            <div className="terminal-body">
              {/* Completed lines */}
              {lines.map((line, i) => (
                <div key={i} className="term-line">
                  <span className="term-prompt">{line.prompt}</span>
                  <span className="term-command">{line.typed}</span>
                  <div className="term-output">{line.output}</div>
                </div>
              ))}

              {/* Currently typing line */}
              {currentLine < TERMINAL_LINES.length && (
                <div className="term-line">
                  <span className="term-prompt">{TERMINAL_LINES[currentLine].prompt}</span>
                  <span className="term-command">
                    {TERMINAL_LINES[currentLine].command.slice(0, currentChar)}
                  </span>
                  {!showOutput && <span className="cursor">█</span>}
                  {showOutput && (
                    <div className="term-output">{TERMINAL_LINES[currentLine].output}</div>
                  )}
                </div>
              )}

              {/* Blinking cursor after done */}
              {typingDone && (
                <div className="term-line">
                  <span className="term-prompt">aritra@dev:~$</span>
                  <span className="cursor blink">█</span>
                </div>
              )}
            </div>
          </div>

          <motion.div
            className="hero-actions"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.8 }}
          >
            <div className="hero-buttons">
              <a href="#contact" className="btn" onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}>
                Get In Touch
              </a>
              <a href={`${process.env.PUBLIC_URL}/documents/Aritra_Basu_Resume.pdf`} className="btn btn-outline" download>
                <FaDownload /> Resume
              </a>
            </div>

            <div className="social-links">
              <a href="https://www.linkedin.com/in/aritra95/" target="_blank" rel="noopener noreferrer" className="social-link" title="LinkedIn">
                <FaLinkedin />
              </a>
              <a href="https://github.com/aritrbas/" target="_blank" rel="noopener noreferrer" className="social-link" title="GitHub">
                <FaGithub />
              </a>
              <a href="mailto:aritra21295@gmail.com" className="social-link" title="Email">
                <FaEnvelope />
              </a>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="scroll-hint"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.5 }}
        >
          <div className="scroll-arrow" />
          <span>scroll</span>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
