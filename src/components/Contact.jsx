import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiMapPin, FiMail, FiPhone, FiSend, FiGithub, FiLinkedin } from 'react-icons/fi'
import { personal } from '../data/portfolio'

const fadeUp = (i = 0) => ({
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
})

const contactItems = [
  { icon: FiMapPin, label: 'Location', value: personal.location },
  { icon: FiMail,   label: 'Email',    value: personal.email,    href: `mailto:${personal.email}` },
  { icon: FiPhone,  label: 'Phone',    value: personal.phone,    href: `tel:${personal.phone}` },
  { icon: FiMail,   label: 'Uni Email', value: personal.uniEmail, href: `mailto:${personal.uniEmail}` },
]

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    const body = `Name: ${form.name}%0AEmail: ${form.email}%0A%0A${form.message}`
    window.open(`mailto:${personal.email}?subject=${encodeURIComponent(form.subject)}&body=${body}`)
    setSent(true)
    setTimeout(() => setSent(false), 4000)
    setForm({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <section id="contact" ref={ref}>
      <div className="container">
        <motion.div variants={fadeUp(0)} initial="hidden" animate={inView ? 'show' : 'hidden'}>
          <p className="section-eyebrow">// 05 — Contact</p>
          <h2 className="section-title">Get In Touch</h2>
          <div className="section-bar" />
        </motion.div>

        <div className="contact-grid">
          {/* Info */}
          <motion.div variants={fadeUp(1)} initial="hidden" animate={inView ? 'show' : 'hidden'}>
            <p style={{ color: 'var(--text-muted)', marginBottom: 28, lineHeight: 1.8 }}>
              Open to data analyst roles, ML collaborations, and research opportunities. Drop a message and I'll get back within 24 hours.
            </p>

            <div className="contact-items">
              {contactItems.map(item => (
                <div className="contact-item" key={item.label}>
                  <div className="contact-icon"><item.icon /></div>
                  <div>
                    <p className="contact-label">{item.label}</p>
                    {item.href
                      ? <a href={item.href} className="contact-value" style={{ textDecoration: 'none', color: 'var(--text)', transition: 'color 0.2s' }}
                          onMouseEnter={e => e.target.style.color = 'var(--cyan)'}
                          onMouseLeave={e => e.target.style.color = 'var(--text)'}
                        >{item.value}</a>
                      : <p className="contact-value">{item.value}</p>
                    }
                  </div>
                </div>
              ))}
            </div>

            <div className="contact-social">
              <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className="social-btn">
                <FiLinkedin />
              </a>
              <a href={personal.github} target="_blank" rel="noopener noreferrer" className="social-btn">
                <FiGithub />
              </a>
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            className="contact-form"
            onSubmit={handleSubmit}
            variants={fadeUp(2)}
            initial="hidden"
            animate={inView ? 'show' : 'hidden'}
          >
            <div className="form-row">
              <div className="form-group">
                <label className="form-label">Name</label>
                <input className="form-input" type="text" placeholder="Your name" required
                  value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} />
              </div>
              <div className="form-group">
                <label className="form-label">Email</label>
                <input className="form-input" type="email" placeholder="your@email.com" required
                  value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))} />
              </div>
            </div>
            <div className="form-group">
              <label className="form-label">Subject</label>
              <input className="form-input" type="text" placeholder="What's this about?" required
                value={form.subject} onChange={e => setForm(f => ({ ...f, subject: e.target.value }))} />
            </div>
            <div className="form-group">
              <label className="form-label">Message</label>
              <textarea className="form-input" placeholder="Your message..." required
                value={form.message} onChange={e => setForm(f => ({ ...f, message: e.target.value }))} />
            </div>
            <button type="submit" className="btn-primary" style={{ alignSelf: 'flex-start' }}>
              {sent ? 'Message sent ✓' : <><FiSend /> Send Message</>}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
