import { useEffect, useState } from 'react'

export default function ScrollProgress() {
  const [pct, setPct] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight
      setPct(total > 0 ? (window.scrollY / total) * 100 : 0)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      height: '2px',
      width: `${pct}%`,
      background: 'linear-gradient(90deg, var(--cyan), var(--orange))',
      zIndex: 10000,
      transition: 'width 0.08s linear',
      boxShadow: '0 0 8px var(--cyan-glow)',
    }} />
  )
}
