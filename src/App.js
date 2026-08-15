import React, { useState, useEffect, useCallback } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import OpenSource from './components/OpenSource';
import Skills from './components/Skills';
import Education from './components/Education';
import Publications from './components/Publications';
import Hobbies from './components/Hobbies';
import Contact from './components/Contact';
import './App.css';

const SECTIONS = ['home', 'about', 'experience', 'opensource', 'skills', 'education', 'publications', 'hobbies', 'contact'];

function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;
      for (let i = SECTIONS.length - 1; i >= 0; i--) {
        const el = document.getElementById(SECTIONS[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(SECTIONS[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = useCallback((sectionId) => {
    const el = document.getElementById(sectionId);
    if (el) {
      const offset = sectionId === 'home' ? 0 : el.offsetTop - 56;
      window.scrollTo({ top: offset, behavior: 'smooth' });
    }
  }, []);

  return (
    <div className="App">
      <div className="scanlines" />
      <Header activeSection={activeSection} onNavigate={scrollToSection} />
      <main>
        <Hero />
        <About />
        <Experience />
        <OpenSource />
        <Skills />
        <Education />
        <Publications />
        <Hobbies />
        <Contact />
      </main>
    </div>
  );
}

export default App;
