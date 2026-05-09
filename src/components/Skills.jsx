import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { skillGroups } from '../data/portfolio'

const fadeUp = (i = 0) => ({
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.55, ease: [0.16, 1, 0.3, 1] } },
})

function SkillBar({ name, pct, index, inView }) {
  return (
    <motion.div
      className="skill-bar-item"
      variants={fadeUp(index)}
      initial="hidden"
      animate={inView ? 'show' : 'hidden'}
    >
      <div className="skill-bar-header">
        <span className="skill-bar-name">{name}</span>
        <span className="skill-bar-pct">{pct}%</span>
      </div>
      <div className="skill-bar-track">
        <motion.div
          className="skill-bar-fill"
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: pct / 100 } : { scaleX: 0 }}
          transition={{ delay: index * 0.06 + 0.3, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
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
        <motion.div variants={fadeUp(0)} initial="hidden" animate={inView ? 'show' : 'hidden'}>
          <p className="section-eyebrow">// 04 — Skills</p>
          <h2 className="section-title">Technical Proficiency</h2>
          <div className="section-bar" />
        </motion.div>

        <div className="skills-layout">
          {skillGroups.map((group, gi) => (
            <motion.div key={group.label} variants={fadeUp(gi + 1)} initial="hidden" animate={inView ? 'show' : 'hidden'}>
              <p className="skill-group-title">{group.label}</p>
              {group.skills.map((s, si) => (
                <SkillBar key={s.name} name={s.name} pct={s.pct} index={gi * 4 + si + 1} inView={inView} />
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
