import { useEffect, useRef } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import { FiDownload, FiArrowRight, FiGithub, FiLinkedin } from 'react-icons/fi'
import NeuralSphere from './NeuralSphere'
import { personal } from '../data/portfolio'

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.12, duration: 0.65, ease: [0.16, 1, 0.3, 1] } }),
}

// Floating tags that drift around the 3D canvas
const floatingTags = [
  { label: 'SQL',       x: '8%',  y: '18%', delay: 0 },
  { label: 'Power BI',  x: '72%', y: '12%', delay: 0.6 },
  { label: 'Python',    x: '80%', y: '78%', delay: 1.1 },
  { label: 'ML',        x: '5%',  y: '72%', delay: 0.3 },
  { label: 'ETL',       x: '42%', y: '88%', delay: 0.9 },
  { label: 'DAX',       x: '88%', y: '44%', delay: 0.4 },
]

function FloatingTag({ label, x, y, delay }) {
  return (
    <motion.div
      style={{ position: 'absolute', left: x, top: y }}
      initial={{ opacity: 0, scale: 0.7 }}
      animate={{ opacity: [0, 0.5, 0.3, 0.5], scale: 1, y: [0, -8, 0, 8, 0] }}
      transition={{
        opacity: { delay, duration: 2 },
        scale: { delay, duration: 0.6 },
        y: { delay: delay + 0.5, duration: 5 + delay, repeat: Infinity, ease: 'easeInOut' },
      }}
    >
      <span style={{
        fontFamily: 'var(--font-mono)',
        fontSize: '0.65rem',
        color: 'var(--cyan)',
        border: '1px solid rgba(0,229,255,0.2)',
        padding: '3px 8px',
        background: 'rgba(0,229,255,0.04)',
        letterSpacing: '0.1em',
        pointerEvents: 'none',
        userSelect: 'none',
        whiteSpace: 'nowrap',
      }}>
        {label}
      </span>
    </motion.div>
  )
}

export default function Hero() {
  const titleRef = useRef(null)

  // Text scramble on mount
  useEffect(() => {
    const el = titleRef.current
    if (!el) return
    const final = el.dataset.text
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
    let frame = 0
    const totalFrames = 24
    const id = setInterval(() => {
      el.textContent = final
        .split('')
        .map((c, i) => {
          if (c === ' ') return ' '
          if (i < (frame / totalFrames) * final.length) return c
          return chars[Math.floor(Math.random() * chars.length)]
        })
        .join('')
      frame++
      if (frame > totalFrames) clearInterval(id)
    }, 38)
    return () => clearInterval(id)
  }, [])

  return (
    <section className="hero" id="home">
      <div className="grid-overlay" />

      {/* Ambient orbs */}
      <motion.div
        className="hero-orb hero-orb-1"
        animate={{ scale: [1, 1.15, 1], opacity: [0.35, 0.5, 0.35] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="hero-orb hero-orb-2"
        animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.35, 0.2] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
      />

      <div className="container">
        <div className="hero-inner">

          {/* Left — text */}
          <div>
            <motion.p className="hero-label" variants={fadeUp} initial="hidden" animate="show" custom={0}>
              Data Analyst · ML Engineer · Maynooth University
            </motion.p>

            <motion.h1 className="hero-name" variants={fadeUp} initial="hidden" animate="show" custom={1}>
              <span ref={titleRef} data-text={personal.name}>{personal.name}</span>
            </motion.h1>

            <motion.p className="hero-title" variants={fadeUp} initial="hidden" animate="show" custom={2}>
              {personal.role}
            </motion.p>

            <motion.p className="hero-bio" variants={fadeUp} initial="hidden" animate="show" custom={3}>
              {personal.bio}
            </motion.p>

            <motion.div className="hero-btns" variants={fadeUp} initial="hidden" animate="show" custom={4}>
              <motion.a
                href="#projects"
                className="btn-primary"
                onClick={(e) => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }) }}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
              >
                View Work <FiArrowRight />
              </motion.a>
              <motion.a
                href={personal.cvUrl}
                download
                className="btn-outline"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
              >
                Resume <FiDownload />
              </motion.a>
            </motion.div>

            <motion.div className="hero-stats" variants={fadeUp} initial="hidden" animate="show" custom={5}>
              {personal.stats.map((s, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -3 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <div className="stat-value">{s.value}</div>
                  <div className="stat-label">{s.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right — 3D scene */}
          <motion.div
            className="hero-3d"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          >
            <div className="hero-3d-ring" />
            <div className="hero-3d-ring" />
            <NeuralSphere />

            {floatingTags.map(t => <FloatingTag key={t.label} {...t} />)}

            {/* Badge */}
            <motion.div
              className="hero-badge"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.4, duration: 0.6 }}
            >
              {'> '}Neural Network — React Three Fiber
            </motion.div>
          </motion.div>

        </div>
      </div>

      {/* Social rail */}
      <motion.div
        className="hero-social-rail"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.6 }}
      >
        <motion.a href={personal.github} target="_blank" rel="noopener noreferrer" className="social-btn"
          whileHover={{ y: -3, boxShadow: '0 0 16px var(--cyan-glow)' }}>
          <FiGithub />
        </motion.a>
        <motion.a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className="social-btn"
          whileHover={{ y: -3, boxShadow: '0 0 16px var(--cyan-glow)' }}>
          <FiLinkedin />
        </motion.a>
        <div style={{ width: 1, height: 48, background: 'var(--border-bright)' }} />
      </motion.div>
    </section>
  )
}
