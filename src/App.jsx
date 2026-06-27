import { useEffect, useState } from 'react'
import profileImg from './assets/profile.png'
import './App.css'

const profileLinks = {
  email: 'mailto:karthik2410kinthada@gmail.com',
  github: 'https://github.com/Karthikeya-Kinthada-25',
  linkedin: 'https://www.linkedin.com/in/karthikeya-kinthada-4869a72bb/',
}

const projects = [
  {
    name: 'Jarvis AI Assistant',
    type: 'AI System',
    year: '2025',
    description:
      'Voice-controlled automation system capable of OS-level command execution.',
    detail:
      'Jarvis is a desktop automation assistant that handles voice commands, web actions, and intelligent task execution through local workflows.',
    stack: ['Python', 'Speech Recognition', 'Automation'],
    youtubeEmbed: 'https://www.youtube.com/embed/Zybdf6gvIas',
    github: 'https://github.com/Karthikeya-Kinthada-25/jarvis-ai-assistant',
    linkedin:
      'https://www.linkedin.com/posts/karthikeya-kinthada-4869a72bb_ai-automation-python-activity-7466577887681236992-pcI3?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEza9-YBof2V70XQTp6Q9Rrto10ZOkNQ64w',
  },
  {
    name: 'TUTORCALL',
    type: 'AI System / Voice Tech',
    year: '2026',
    description:
      'AI-based voice tutor with a simulated call interface for accessible learning.',
    detail:
      'TutorCall simulates a one-to-one learning call where an AI tutor explains concepts through voice interaction and step-by-step guidance.',
    stack: ['Python', 'Speech AI', 'LLM'],
    video: '/videos/tutorcall.mp4',
    github: 'https://github.com/Karthikeya-Kinthada-25/tutorcall-ai',
    linkedin:
      'https://www.linkedin.com/posts/karthikeya-kinthada-4869a72bb_ai-edtech-userexperience-activity-7466569887709102081-sGay?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEza9-YBof2V70XQTp6Q9Rrto10ZOkNQ64w',
  },
  {
    name: 'Resume-Analyzer',
    type: 'AI-Style Web App',
    year: '2026',
    description:
      'Resume analysis dashboard for scoring resumes, finding skill gaps, checking ATS readiness, and improving bullets.',
    detail:
      'Resume-Analyzer is a full-stack Flask and JavaScript project that extracts resume text, compares it with target roles and job descriptions, calculates score breakdowns, highlights missing skills, checks ATS signals, and generates stronger resume bullet suggestions with a clean animated dashboard.',
    stack: ['Python', 'Flask', 'JavaScript', 'ATS Analysis'],
    youtubeEmbed: 'https://www.youtube.com/embed/ildyu_ZZtSw',
    github: 'https://github.com/Karthikeya-Kinthada-25/resume-analyzer',
    linkedin:
      'https://www.linkedin.com/posts/karthikeya-kinthada-4869a72bb_webdevelopment-python-flask-ugcPost-7476570785139257344-qgBl/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEza9-YBof2V70XQTp6Q9Rrto10ZOkNQ64w',
  },
]

const skills = [
  'Python',
  'C / C++ / Java',
  'HTML / CSS / JavaScript',
  'React',
  'Machine Learning',
  'DBMS, OS, CN',
]

const experience = [
  ['Now', 'Focused on building real-world AI systems and preparing for software roles.'],
  ['2025', 'Built AI systems including Jarvis automation and TutorCall.'],
  ['2024', 'Built a strong foundation in core CS subjects and practical programming.'],
]

const internships = [
  {
    title: 'Artificial Intelligence Internship',
    organization: 'EdiGlobe',
    period: 'Jul 2025 - Sep 2025',
    priority: 'Top priority',
    description:
      'Completed an AI internship focused on problem-solving, communication, and practical project work.',
    image: '/certificates/ediglobe-internship.png',
    note: 'Place this first because it is direct internship experience, not only a course certificate.',
  },
]

const certifications = [
  {
    title: 'AWS Academy Machine Learning Foundations',
    organization: 'AWS Academy',
    date: 'Jul 2025',
    priority: 'High priority',
    description:
      '20-hour AWS Academy credential covering machine learning foundations and cloud-aware AI concepts.',
    image: '/certificates/aws-ml-foundations.png',
    note: 'Strongest certification for your AI/ML positioning.',
  },
  {
    title: 'AI Project Completion',
    organization: 'EdiGlobe',
    date: 'Oct 2025',
    priority: 'High priority',
    description:
      'Certificate for completing one minor and one major project under the Artificial Intelligence program.',
    image: '/certificates/ediglobe-project-completion.png',
    note: 'Useful because it proves project output, not just attendance.',
  },
  {
    title: 'Artificial Intelligence Course Completion',
    organization: 'EdiGlobe',
    date: '2025',
    priority: 'Medium priority',
    description:
      'Two-month Artificial Intelligence course completion credential from EdiGlobe.',
    image: '/certificates/ediglobe-course-completion.png',
    note: 'Good supporting credential after internship and project proof.',
  },
  {
    title: 'HTML Essentials',
    organization: 'Cisco Networking Academy',
    date: 'Jan 2026',
    priority: 'Supporting',
    description:
      'Foundational web credential covering structured HTML, semantic pages, forms, and accessibility basics.',
    image: '/certificates/cisco-html-certificate.png',
    note: 'Keep lower priority because your portfolio is AI-focused; one Cisco HTML item is enough.',
  },
]

const getInitialTheme = () => {
  if (typeof window === 'undefined') {
    return 'light'
  }

  return localStorage.getItem('theme') || 'light'
}

function App() {
  const [selectedProject, setSelectedProject] = useState(null)
  const [selectedCredential, setSelectedCredential] = useState(null)
  const [isSiteInfoOpen, setIsSiteInfoOpen] = useState(false)
  const [theme, setTheme] = useState(getInitialTheme)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setSelectedProject(null)
        setSelectedCredential(null)
        setIsSiteInfoOpen(false)
        setIsMobileMenuOpen(false)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    localStorage.setItem('theme', theme)
  }, [theme])

  const activeProject = projects.find((project) => project.name === selectedProject)
  const activeCredential = [...internships, ...certifications].find(
    (item) => item.title === selectedCredential,
  )

  const closeMobileMenu = () => setIsMobileMenuOpen(false)

  return (
    <main className="site-shell">
      <nav className="nav" aria-label="Main navigation">
        <a className="brand magnetic" href="#top" aria-label="Karthikeya home">
          K
        </a>
        <div className={`nav-actions ${isMobileMenuOpen ? 'is-open' : ''}`}>
          <button
            className="menu-toggle shine"
            type="button"
            aria-expanded={isMobileMenuOpen}
            aria-controls="site-navigation"
            onClick={() => setIsMobileMenuOpen((isOpen) => !isOpen)}
          >
            Menu
          </button>
          <div className="nav-links" id="site-navigation">
            <a href="#work" onClick={closeMobileMenu}>
              Projects
            </a>
            <a href="#internships" onClick={closeMobileMenu}>
              Internships
            </a>
            <a href="#certifications" onClick={closeMobileMenu}>
              Certifications
            </a>
            <a href="#about" onClick={closeMobileMenu}>
              About
            </a>
            <a href="#contact" onClick={closeMobileMenu}>
              Contact
            </a>
          </div>
          <button
            className="theme-toggle shine"
            type="button"
            aria-pressed={theme === 'dark'}
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          >
            {theme === 'dark' ? 'Light' : 'Dark'}
          </button>
        </div>
      </nav>

      <section className="hero-section reveal" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Portfolio / 2026</p>
          <h1>Karthikeya Kinthada</h1>
          <p className="intro">
            Computer Science and Engineering student at MVGR COLLEGE OF ENGINEERNG
          </p>

          <div className="hero-actions" aria-label="Primary actions">
            <a className="button primary shine" href="#work">
              View Projects
            </a>
            <a className="button ghost shine" href="/Karthikeya-Kinthada-Resume.pdf" download>
              Download Resume
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="orbital-ring"></div>
          <img src={profileImg} alt="Karthikeya Kinthada portrait" />
          <div className="availability">
            <span></span>
            Open to opportunities
          </div>
        </div>
      </section>

      <section className="section split reveal" id="about">
        <div>
          <p className="section-kicker">About</p>
          <h2>Focused on real-world systems.</h2>
        </div>
        <p>
          CSE student building real-world systems at the intersection of
          automation, intelligence, and user interaction. Focused on practical
          AI, from voice-driven automation to intelligent applications that solve
          real problems.
        </p>
      </section>

      <section className="section reveal" id="work">
        <div className="section-heading">
          <p className="section-kicker">Projects</p>
          <h2>Real systems, not just practice work.</h2>
        </div>

        <div className="project-list">
          {projects.map((project) => (
            <article
              className="project-card glow-card"
              key={project.name}
            >
              <div className="project-meta">
                <span>{project.type}</span>
                <span>{project.year}</span>
              </div>

              <h3>{project.name}</h3>
              <p>{project.description}</p>

              <ul>
                {project.stack.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

              <button
                className="project-button shine"
                type="button"
                onClick={() => setSelectedProject(project.name)}
              >
                Explore project
              </button>
            </article>
          ))}
        </div>
      </section>

      <section className="section reveal" id="internships">
        <div className="section-heading">
          <p className="section-kicker">Internships</p>
          <h2>Practical experience first.</h2>
        </div>

        <div className="credential-list featured-credentials">
          {internships.map((item) => (
            <article
              className="credential-card glow-card"
              key={item.title}
            >
              <button
                className="credential-preview"
                type="button"
                onClick={() => setSelectedCredential(item.title)}
                aria-label={`View ${item.title} certificate`}
              >
                <img src={item.image} alt={`${item.title} certificate`} />
              </button>
              <div className="credential-copy">
                <div className="project-meta">
                  <span>{item.organization}</span>
                  <span>{item.period}</span>
                </div>
                <span className="priority-pill">{item.priority}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <small>{item.note}</small>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section reveal" id="certifications">
        <div className="section-heading">
          <p className="section-kicker">Certifications</p>
          <h2>Credentials ordered by relevance.</h2>
        </div>

        <div className="credential-list">
          {certifications.map((item) => (
            <article
              className="credential-card compact glow-card"
              key={item.title}
            >
              <button
                className="credential-preview"
                type="button"
                onClick={() => setSelectedCredential(item.title)}
                aria-label={`View ${item.title} certificate`}
              >
                <img src={item.image} alt={`${item.title} certificate`} />
              </button>
              <div className="credential-copy">
                <div className="project-meta">
                  <span>{item.organization}</span>
                  <span>{item.date}</span>
                </div>
                <span className="priority-pill">{item.priority}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <small>{item.note}</small>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section capabilities reveal">
        <div className="section-heading">
          <p className="section-kicker">Skills</p>
          <h2>Technical foundation.</h2>
        </div>

        <div className="skill-grid">
          {skills.map((skill) => (
            <span className="glow-card" key={skill}>
              {skill}
            </span>
          ))}
        </div>
      </section>

      <section className="section timeline reveal">
        <div className="section-heading">
          <p className="section-kicker">Journey</p>
          <h2>Growth over time.</h2>
        </div>

        <div className="timeline-list">
          {experience.map(([year, detail]) => (
            <div className="timeline-item" key={year}>
              <span>{year}</span>
              <p>{detail}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="footer reveal" id="contact">
        <div>
          <p className="section-kicker">Contact</p>
          <h2>Let's build something meaningful.</h2>
          <div className="site-note">
            <p>Built with a simple idea: clarity first, motion second.</p>
            <button
              className="site-info-button shine"
              type="button"
              onClick={() => setIsSiteInfoOpen(true)}
            >
              About this site
            </button>
          </div>
        </div>
        <div className="footer-links" aria-label="Contact links">
          <a className="icon-link" href={profileLinks.email} aria-label="Email">
            <svg aria-hidden="true" focusable="false">
              <use href="/icons.svg#email-icon"></use>
            </svg>
            <span className="sr-only">Email</span>
          </a>
          <a
            className="icon-link"
            href={profileLinks.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <svg aria-hidden="true" focusable="false">
              <use href="/icons.svg#github-icon"></use>
            </svg>
            <span className="sr-only">GitHub</span>
          </a>
          <a
            className="icon-link"
            href={profileLinks.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <svg aria-hidden="true" focusable="false">
              <use href="/icons.svg#linkedin-icon"></use>
            </svg>
            <span className="sr-only">LinkedIn</span>
          </a>
        </div>
      </footer>

      {activeProject && (
        <div
          className="modal-backdrop"
          onClick={() => setSelectedProject(null)}
          role="presentation"
        >
          <section
            className="project-modal"
            aria-modal="true"
            aria-labelledby="project-modal-title"
            role="dialog"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              className="modal-close"
              type="button"
              onClick={() => setSelectedProject(null)}
              aria-label="Close project details"
            >
              x
            </button>

            <div className="modal-copy">
              <p className="section-kicker">{activeProject.type}</p>
              <h2 id="project-modal-title">{activeProject.name}</h2>
              <p>{activeProject.detail}</p>
              <ul>
                {activeProject.stack.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            {activeProject.youtubeEmbed ? (
              <iframe
                className="project-video"
                src={activeProject.youtubeEmbed}
                title={`${activeProject.name} demo video`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            ) : activeProject.video ? (
              <video
                className="project-video"
                src={activeProject.video}
                controls
                playsInline
              />
            ) : (
              <div className="project-placeholder">
                <span>Technical notebook available below</span>
              </div>
            )}

            <div className="modal-links">
              {activeProject.report && (
                <a href={activeProject.report} target="_blank" rel="noreferrer">
                  Open technical notebook
                </a>
              )}
              <a href={activeProject.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
              <a href={activeProject.linkedin} target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            </div>
          </section>
        </div>
      )}

      {activeCredential && (
        <div
          className="modal-backdrop"
          onClick={() => setSelectedCredential(null)}
          role="presentation"
        >
          <section
            className="project-modal credential-modal"
            aria-modal="true"
            aria-labelledby="credential-modal-title"
            role="dialog"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              className="modal-close"
              type="button"
              onClick={() => setSelectedCredential(null)}
              aria-label="Close credential preview"
            >
              x
            </button>

            <div className="modal-copy">
              <p className="section-kicker">{activeCredential.organization}</p>
              <h2 id="credential-modal-title">{activeCredential.title}</h2>
              <p>{activeCredential.description}</p>
            </div>

            <img
              className="credential-full-image"
              src={activeCredential.image}
              alt={`${activeCredential.title} certificate`}
            />
          </section>
        </div>
      )}

      {isSiteInfoOpen && (
        <div
          className="modal-backdrop"
          onClick={() => setIsSiteInfoOpen(false)}
          role="presentation"
        >
          <section
            className="project-modal site-info-modal"
            aria-modal="true"
            aria-labelledby="site-info-title"
            role="dialog"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              className="modal-close"
              type="button"
              onClick={() => setIsSiteInfoOpen(false)}
              aria-label="Close site information"
            >
              x
            </button>

            <div className="modal-copy">
              <p className="section-kicker">Website Notes</p>
              <h2 id="site-info-title">Minimal, responsive, and interactive.</h2>
              <p>
                This portfolio is built with React, Vite, JavaScript, and CSS.
                It uses reusable content data, responsive layouts, light/dark
                themes, accessible modals, hover glow effects, and small motion
                details to keep the experience polished without exposing source
                code.
              </p>
            </div>

            <div className="site-stack">
              <span>React</span>
              <span>Vite</span>
              <span>JavaScript</span>
              <span>CSS</span>
              <span>Responsive UI</span>
              <span>Theme System</span>
            </div>
          </section>
        </div>
      )}
    </main>
  )
}

export default App
