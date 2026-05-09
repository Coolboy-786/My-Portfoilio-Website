import { useState, useEffect } from 'react'
import { personal } from '../data/portfolio'

const links = ['About', 'Projects', 'Experience', 'Skills', 'Contact']

function Logo() {
  return (
    <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Outer diamond */}
      <rect x="4" y="4" width="26" height="26" stroke="#00E5FF" strokeWidth="1.2"
        transform="rotate(45 17 17)" fill="none" />
      {/* Inner diamond */}
      <rect x="9" y="9" width="16" height="16" stroke="#FF6B35" strokeWidth="0.8"
        strokeOpacity="0.6" transform="rotate(45 17 17)" fill="none" />
      {/* Center dot */}
      <circle cx="17" cy="17" r="2" fill="#00E5FF" />
      {/* Corner nodes */}
      <circle cx="17" cy="4.5" r="1.2" fill="#00E5FF" opacity="0.7" />
      <circle cx="17" cy="29.5" r="1.2" fill="#00E5FF" opacity="0.7" />
      <circle cx="4.5" cy="17" r="1.2" fill="#FF6B35" opacity="0.7" />
      <circle cx="29.5" cy="17" r="1.2" fill="#FF6B35" opacity="0.7" />
    </svg>
  )
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40)
      const sections = ['home', 'about', 'projects', 'experience', 'skills', 'contact']
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id)
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(id)
          break
        }
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id) => {
    setMenuOpen(false)
    const el = document.getElementById(id.toLowerCase())
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <header className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <div className="container">
        <div className="navbar-inner">
          <a
            href="#home"
            className="navbar-logo-wrap"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
          >
            <Logo />
            <span className="navbar-logo">EJ<span>.</span></span>
          </a>

          <nav>
            <ul className="navbar-links">
              {links.map(l => (
                <li key={l}>
                  <a
                    href={`#${l.toLowerCase()}`}
                    className={activeSection === l.toLowerCase() ? 'active' : ''}
                    onClick={(e) => { e.preventDefault(); scrollTo(l) }}
                  >
                    {l}
                  </a>
                </li>
              ))}
              <li>
                <a href={personal.cvUrl} className="navbar-cta" download>
                  Resume ↓
                </a>
              </li>
            </ul>
          </nav>

          <button className="menu-btn" onClick={() => setMenuOpen(o => !o)} aria-label="Toggle menu">
            {menuOpen ? '✕' : '☰'}
          </button>
        </div>

        <div className={`mobile-menu${menuOpen ? ' open' : ''}`}>
          {links.map(l => (
            <a key={l} href={`#${l.toLowerCase()}`} onClick={(e) => { e.preventDefault(); scrollTo(l) }}>
              {l}
            </a>
          ))}
          <a href={personal.cvUrl} download>Resume ↓</a>
        </div>
      </div>
    </header>
  )
}
