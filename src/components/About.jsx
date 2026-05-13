import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { personal } from '../data/portfolio'
import Tag from './Tag'

const fadeUp = (i = 0) => ({
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
})

const facts = [
  { label: 'Location', value: 'Lucan / Maynooth, Ireland' },
  { label: 'University', value: 'Maynooth University' },
  { label: 'Degree', value: 'MSc Data Science & Analytics' },
  { label: 'Experience', value: '2+ years in Fintech' },
  { label: 'Employer', value: 'HDFC Bank Ltd (ex)' },
  { label: 'BTech', value: 'VNIT Nagpur — 7.54 CGPA' },
]

const achievements = [
  '99.57 percentile — JEE Main 2019',
  'AIR 6253 — JEE Advanced 2019',
  'Gold Medalist — IMO & ISO Olympiads',
  'VP — Ashlesha Astronomy Club, VNIT',
]

const skillTags = ['Python', 'SQL', 'PostgreSQL', 'Power BI', 'DAX', 'Pandas', 'Scikit-learn', 'TensorFlow', 'Machine Learning', 'EDA', 'A/B Testing', 'ETL Pipelines', 'Seaborn', 'R', 'Git', 'Agile']

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="about" ref={ref}>
      <div className="container">
        <motion.div variants={fadeUp(0)} initial="hidden" animate={inView ? 'show' : 'hidden'}>
          <p className="section-eyebrow">// 01 — About</p>
          <h2 className="section-title">Who I Am</h2>
          <div className="section-bar" />
        </motion.div>

        <div className="about-grid">
          {/* Photo */}
          <motion.div
            className="about-photo-wrap"
            variants={fadeUp(1)}
            initial="hidden"
            animate={inView ? 'show' : 'hidden'}
          >
            <div className="about-photo-frame">
              <img
                src={personal.photo}
                alt={personal.name}
                className="about-photo"
              />
            </div>
          </motion.div>

          {/* Text */}
          <div>
            <motion.p variants={fadeUp(1)} initial="hidden" animate={inView ? 'show' : 'hidden'} style={{ color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: 18 }}>
              I'm a <strong style={{ color: 'var(--text)' }}>Business Data Analyst</strong> with 2+ years at HDFC Bank, where I owned end-to-end data pipelines, API integration projects, and cross-functional stakeholder reporting — at scale. Now at Maynooth University, I'm deepening that foundation with ML, statistical modelling, and advanced analytics.
            </motion.p>
            <motion.p variants={fadeUp(2)} initial="hidden" animate={inView ? 'show' : 'hidden'} style={{ color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: 24 }}>
              I believe the best data work sits at the intersection of rigorous analysis and clear communication — turning complex outputs into decisions people actually act on.
            </motion.p>

            <motion.div className="about-facts" variants={fadeUp(3)} initial="hidden" animate={inView ? 'show' : 'hidden'}>
              {facts.map(f => (
                <div className="about-fact" key={f.label}>
                  <div className="about-fact-dot" />
                  <div className="about-fact-text">
                    <strong>{f.label}:</strong> {f.value}
                  </div>
                </div>
              ))}
            </motion.div>

            <motion.div variants={fadeUp(4)} initial="hidden" animate={inView ? 'show' : 'hidden'}>
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', letterSpacing: '0.15em', color: 'var(--orange)', textTransform: 'uppercase', marginBottom: 12 }}>
                Achievements
              </p>
              {achievements.map(a => (
                <div key={a} style={{ display: 'flex', gap: 10, marginBottom: 8, alignItems: 'flex-start' }}>
                  <span style={{ color: 'var(--gold)', fontSize: '0.7rem', marginTop: 3 }}>★</span>
                  <span style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>{a}</span>
                </div>
              ))}
            </motion.div>

            <motion.div className="about-tags" variants={fadeUp(5)} initial="hidden" animate={inView ? 'show' : 'hidden'}>
              {skillTags.map(t => <Tag key={t}>{t}</Tag>)}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
