import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiExternalLink, FiGithub } from 'react-icons/fi'
import { projects } from '../data/portfolio'

const fadeUp = (i = 0) => ({
  hidden: { opacity: 0, y: 36 },
  show: { opacity: 1, y: 0, transition: { delay: i * 0.12, duration: 0.65, ease: [0.16, 1, 0.3, 1] } },
})

export default function Projects() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="projects" ref={ref} style={{ background: 'var(--bg-surface)' }}>
      <div className="grid-overlay" />
      <div className="container">
        <motion.div variants={fadeUp(0)} initial="hidden" animate={inView ? 'show' : 'hidden'}>
          <p className="section-eyebrow">// 02 — Projects</p>
          <h2 className="section-title">My Work</h2>
          <div className="section-bar" />
        </motion.div>

        <div className="projects-grid">
          {projects.map((p, i) => (
            <motion.article
              className="project-card"
              key={p.num}
              variants={fadeUp(i + 1)}
              initial="hidden"
              animate={inView ? 'show' : 'hidden'}
            >
              <div className="project-img">
                <img src={p.img} alt={p.title} loading="lazy" />
                <div className="project-img-overlay" />
              </div>
              <div className="project-body">
                <p className="project-num">{p.num} / 0{projects.length}</p>
                <h3 className="project-title">{p.title}</h3>
                {p.highlight && (
                  <p style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.68rem',
                    color: 'var(--gold)',
                    letterSpacing: '0.06em',
                    marginBottom: '10px',
                    opacity: 0.85,
                  }}>
                    ◆ {p.highlight}
                  </p>
                )}
                <p className="project-desc">{p.desc}</p>
                <div className="project-tags">
                  {p.tags.map(t => <span key={t} className="tag tag-orange">{t}</span>)}
                </div>
                <div className="project-links">
                  <a href={p.demo} target="_blank" rel="noopener noreferrer" className="project-link">
                    <FiExternalLink /> Demo
                  </a>
                  <a href={p.code} target="_blank" rel="noopener noreferrer" className="project-link">
                    <FiGithub /> Source
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
