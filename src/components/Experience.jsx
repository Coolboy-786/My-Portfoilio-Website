import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { experience, education } from '../data/portfolio'

const fadeUp = (i = 0) => ({
  hidden: { opacity: 0, x: -24 },
  show: { opacity: 1, x: 0, transition: { delay: i * 0.13, duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
})

function TimelineItem({ item, index, inView }) {
  const isEdu = item.type === 'edu'
  return (
    <motion.div className="timeline-item" variants={fadeUp(index)} initial="hidden" animate={inView ? 'show' : 'hidden'}>
      <div className="timeline-dot-col">
        <div className={`timeline-dot${isEdu ? ' orange' : ''}`} />
      </div>
      <div className="timeline-content">
        <p className="timeline-date">{item.period}</p>
        <h3 className="timeline-role">{item.role || item.degree}</h3>
        <p className="timeline-org">{item.org}{item.location ? ` — ${item.location}` : ''}</p>
        <ul className="timeline-points">
          {item.points.map((pt, i) => <li key={i}>{pt}</li>)}
        </ul>
        <div className="timeline-chips">
          {item.chips.map(c => <span key={c} className="tag">{c}</span>)}
        </div>
      </div>
    </motion.div>
  )
}

export default function Experience() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const all = [...experience, ...education]

  return (
    <section id="experience" ref={ref}>
      <div className="container">
        <motion.div variants={fadeUp(0)} initial="hidden" animate={inView ? 'show' : 'hidden'}>
          <p className="section-eyebrow">// 03 — Experience & Education</p>
          <h2 className="section-title">My Journey</h2>
          <div className="section-bar" />
        </motion.div>

        <div className="timeline">
          {all.map((item, i) => (
            <TimelineItem key={i} item={item} index={i + 1} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  )
}
