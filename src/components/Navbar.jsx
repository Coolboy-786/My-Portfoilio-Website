import { useState, useEffect } from 'react'
import { personal } from '../data/portfolio'

const links = ['About', 'Projects', 'Experience', 'Skills', 'Contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
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
          <a href="#home" className="navbar-logo" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}>
            EJ<span>.</span>
          </a>

          <nav>
            <ul className="navbar-links">
              {links.map(l => (
                <li key={l}>
                  <a href={`#${l.toLowerCase()}`} onClick={(e) => { e.preventDefault(); scrollTo(l) }}>
                    {l}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={personal.cvUrl}
                  className="navbar-cta"
                  download
                >
                  Resume
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
