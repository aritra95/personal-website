# Aritra Basu — Personal Website

A modern, fully responsive personal website built with React.js showcasing professional experience as a **Systems & Network Software Developer** specializing in low-level systems, networking, and distributed systems.

## Features

- **Terminal-Themed Design** — Matrix-style hero animation, terminal windows, and monospace styling throughout
- **Fully Responsive** — Works seamlessly on desktop, tablet, and mobile devices
- **Smooth Animations** — Powered by Framer Motion with scroll-triggered reveals
- **9 Sections** — Hero, About, Experience, Open Source, Skills, Education, Publications, Hobbies, Contact
- **Social Links** — GitHub, LinkedIn, and Email
- **Downloadable Resume** — One-click PDF download from the Hero section
- **GitHub Pages Ready** — Configured for easy deployment via `gh-pages`

## Sections

| Section | Description |
|---------|-------------|
| **Hero** | Introduction, social links, and resume download |
| **About** | Professional summary and key highlights |
| **Experience** | Timeline of roles at Cisco, VeloCloud, Netskope, and UCSD |
| **Open Source** | Contributions to curl, VPP (fd.io), CalicoVPP, and systemd |
| **Skills** | Languages, Networking & Protocols, Systems & Platforms, Tools |
| **Education** | MS CS from UCSD, B.Tech ECE from VIT, high school |
| **Publications** | Academic papers and research publications |
| **Hobbies** | Cooking, Chess, Aviation, Formula 1, Cricket, Piano |
| **Contact** | Contact form and social/professional links |

## Tech Stack

- **Framework**: React 18 (Create React App)
- **Animations**: Framer Motion
- **Icons**: React Icons (Font Awesome, Material Design)
- **Styling**: CSS3 (Grid, Flexbox, custom properties)
- **Deployment**: GitHub Pages via `gh-pages`

## Quick Start

```bash
# Clone
git clone git@github.com:aritrbas/personal-website.git
cd personal-website

# Install dependencies
npm install

# Start dev server
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment

1. Update `homepage` in `package.json` to your GitHub Pages URL (e.g. `https://aritrbas.github.io/personal-website`)
2. Run `npm run deploy`
3. Enable GitHub Pages in repo Settings → Pages → Source: `gh-pages` branch

## Customization

### Resume / CV
Place your PDF in `public/documents/` (currently `Aritra_Basu_Resume.pdf`). The download button in the Hero section links to it via `src/components/Hero.js`. LaTeX sources for the CV live in `cv/`.

### Content
- **Hero**: `src/components/Hero.js` — name, title, terminal lines, social links
- **About**: `src/components/About.js` — bio and highlights
- **Experience**: `src/components/Experience.js` — work history
- **Open Source**: `src/components/OpenSource.js` — open-source contributions
- **Skills**: `src/components/Skills.js` — skill categories and levels
- **Education**: `src/components/Education.js` — degrees, coursework, and locations
- **Publications**: `src/components/Publications.js` — academic papers and links
- **Hobbies**: `src/components/Hobbies.js` — personal interests
- **Contact**: `src/components/Contact.js` — contact info and form

### Styling
Each section has its own CSS file colocated with its component. Colors and gradients are driven by CSS custom properties in `src/index.css`.

## Browser Support

Chrome, Firefox, Safari, Edge (latest versions)

## License

All rights reserved.

## Contact

- **LinkedIn**: [linkedin.com/in/aritra95](https://www.linkedin.com/in/aritra95/)
- **GitHub**: [github.com/aritrbas](https://github.com/aritrbas/)
- **Email**: [aritra21295@gmail.com](mailto:aritra21295@gmail.com)
