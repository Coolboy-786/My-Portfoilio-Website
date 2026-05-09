import { personal } from '../data/portfolio'
import { FiGithub, FiLinkedin } from 'react-icons/fi'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-inner">
          <span className="footer-logo">
            <span>{personal.name.split(' ')[0]}</span> {personal.name.split(' ').slice(1).join(' ')}
          </span>

          <nav className="footer-links">
            {['About', 'Projects', 'Experience', 'Skills', 'Contact'].map(l => (
              <a key={l} href={`#${l.toLowerCase()}`}>{l}</a>
            ))}
          </nav>

          <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
            <a href={personal.github} target="_blank" rel="noopener noreferrer" className="social-btn">
              <FiGithub />
            </a>
            <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className="social-btn">
              <FiLinkedin />
            </a>
          </div>
        </div>
        <p className="footer-copy" style={{ marginTop: '20px', textAlign: 'center' }}>
          © {new Date().getFullYear()} {personal.name} — Built with React + Vite + Three.js
        </p>
      </div>
    </footer>
  )
}
