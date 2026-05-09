import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { FiDownload, FiArrowRight, FiGithub, FiLinkedin } from 'react-icons/fi'
import NeuralSphere from './NeuralSphere'
import { personal } from '../data/portfolio'

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.12, duration: 0.65, ease: [0.16, 1, 0.3, 1] } }),
}

export default function Hero() {
  const titleRef = useRef(null)

  // GSAP-style scramble on mount using vanilla JS
  useEffect(() => {
    const el = titleRef.current
    if (!el) return
    const final = el.dataset.text
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
    let frame = 0
    const totalFrames = 22
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
    }, 40)
    return () => clearInterval(id)
  }, [])

  return (
    <section className="hero" id="home">
      <div className="grid-overlay" />
      <div className="container">
        <div className="hero-inner">

          {/* Left — text content */}
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
              <a href="#projects" className="btn-primary" onClick={(e) => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }) }}>
                View Work <FiArrowRight />
              </a>
              <a href={personal.cvUrl} download className="btn-outline">
                Resume <FiDownload />
              </a>
            </motion.div>

            <motion.div className="hero-stats" variants={fadeUp} initial="hidden" animate="show" custom={5}>
              {personal.stats.map((s, i) => (
                <div key={i}>
                  <div className="stat-value">{s.value}</div>
                  <div className="stat-label">{s.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — 3D scene */}
          <motion.div
            className="hero-3d"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          >
            <div className="hero-3d-ring" />
            <div className="hero-3d-ring" />
            <NeuralSphere />

            {/* floating badge */}
            <motion.div
              style={{
                position: 'absolute',
                bottom: 32,
                left: 0,
                background: 'var(--bg-card)',
                border: '1px solid var(--border-bright)',
                padding: '10px 16px',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.72rem',
                color: 'var(--cyan)',
                letterSpacing: '0.1em',
              }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
            >
              {'> '}Neural Network Sphere — React Three Fiber
            </motion.div>
          </motion.div>

        </div>
      </div>

      {/* Social links — vertical rail */}
      <motion.div
        style={{
          position: 'absolute',
          right: 28,
          bottom: 60,
          display: 'flex',
          flexDirection: 'column',
          gap: 14,
          alignItems: 'center',
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
      >
        <a href={personal.github} target="_blank" rel="noopener noreferrer" className="social-btn">
          <FiGithub />
        </a>
        <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className="social-btn">
          <FiLinkedin />
        </a>
        <div style={{ width: 1, height: 48, background: 'var(--border-bright)' }} />
      </motion.div>
    </section>
  )
}
