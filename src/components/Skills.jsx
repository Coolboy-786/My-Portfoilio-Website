import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { skillGroups } from '../data/portfolio'

const revealUp = (i = 0) => ({
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1, y: 0,
    transition: { delay: i * 0.08, duration: 0.55, ease: [0.16, 1, 0.3, 1] },
  },
})

function SkillBar({ name, pct, index, inView }) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      className="skill-bar-item"
      variants={revealUp(index)}
      initial="hidden"
      animate={inView ? 'show' : 'hidden'}
      whileHover={{ x: 6 }}
      transition={{ type: 'spring', stiffness: 260, damping: 22 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        borderColor: hovered ? 'rgba(0,229,255,0.25)' : 'transparent',
        background:   hovered ? 'rgba(0,229,255,0.035)' : 'transparent',
      }}
    >
      <div className="skill-bar-header">
        <span
          className="skill-bar-name"
          style={{
            color:      hovered ? 'var(--cyan)' : 'var(--text)',
            textShadow: hovered ? '0 0 18px rgba(0,229,255,0.75)' : 'none',
            transition: 'color 0.25s, text-shadow 0.25s',
          }}
        >
          {name}
        </span>
      </div>
      <div className="skill-bar-track">
        <motion.div
          className="skill-bar-fill"
          initial={{ scaleX: 0 }}
          animate={inView ? {
            scaleX:    pct / 100,
            boxShadow: hovered
              ? '0 0 10px rgba(0,229,255,0.7), 0 0 22px rgba(0,229,255,0.25)'
              : '0 0 0px rgba(0,229,255,0)',
          } : { scaleX: 0 }}
          transition={{
            scaleX:    { delay: index * 0.06 + 0.3, duration: 1.1, ease: [0.16, 1, 0.3, 1] },
            boxShadow: { duration: 0.28 },
          }}
        />
      </div>
    </motion.div>
  )
}

export default function Skills() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="skills" ref={ref} style={{ background: 'var(--bg-surface)' }}>
      <div className="grid-overlay" />
      <div className="container">
        <motion.div variants={revealUp(0)} initial="hidden" animate={inView ? 'show' : 'hidden'}>
          <p className="section-eyebrow">// 04 — Skills</p>
          <h2 className="section-title">Technical Proficiency</h2>
          <div className="section-bar" />
        </motion.div>

        <div className="skills-layout">
          {skillGroups.map((group, gi) => (
            <motion.div key={group.label} variants={revealUp(gi + 1)} initial="hidden" animate={inView ? 'show' : 'hidden'}>
              <p className="skill-group-title">{group.label}</p>
              {group.skills.map((s, si) => (
                <SkillBar key={s.name} name={s.name} pct={s.pct} index={gi * 4 + si + 2} inView={inView} />
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
