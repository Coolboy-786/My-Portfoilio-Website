import { useEffect, useRef } from 'react'

const STAR_COUNT = 300
const COLOR_STAR_COUNT = 14
const NEBULA_COUNT = 5

export default function StarField() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let animId
    let t = 0
    let lastShoot = 0
    let shooters = []

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const stars = Array.from({ length: STAR_COUNT }, () => ({
      x: Math.random(),
      y: Math.random(),
      r: Math.random() * 1.4 + 0.2,
      alpha: Math.random() * 0.65 + 0.15,
      phase: Math.random() * Math.PI * 2,
      freq: Math.random() * 0.007 + 0.002,
    }))

    const colorStars = Array.from({ length: COLOR_STAR_COUNT }, () => ({
      x: Math.random(),
      y: Math.random(),
      r: Math.random() * 2.5 + 1.5,
      hue: [270, 195, 320, 210, 285, 180][Math.floor(Math.random() * 6)],
      alpha: Math.random() * 0.55 + 0.25,
      phase: Math.random() * Math.PI * 2,
      freq: Math.random() * 0.004 + 0.001,
    }))

    const nebulae = Array.from({ length: NEBULA_COUNT }, () => ({
      x: Math.random(),
      y: Math.random(),
      r: Math.random() * 130 + 70,
      hue: [260, 200, 310, 170, 245][Math.floor(Math.random() * 5)],
      alpha: Math.random() * 0.028 + 0.008,
    }))

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const draw = (ts) => {
      t++
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      nebulae.forEach(n => {
        const grd = ctx.createRadialGradient(
          n.x * canvas.width, n.y * canvas.height, 0,
          n.x * canvas.width, n.y * canvas.height, n.r
        )
        grd.addColorStop(0, `hsla(${n.hue},60%,60%,${n.alpha})`)
        grd.addColorStop(1, 'transparent')
        ctx.fillStyle = grd
        ctx.beginPath()
        ctx.arc(n.x * canvas.width, n.y * canvas.height, n.r, 0, Math.PI * 2)
        ctx.fill()
      })

      stars.forEach(s => {
        const a = s.alpha * (0.55 + 0.45 * Math.sin(t * s.freq * 60 + s.phase))
        ctx.beginPath()
        ctx.arc(s.x * canvas.width, s.y * canvas.height, s.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255,255,255,${a})`
        ctx.fill()
      })

      colorStars.forEach(s => {
        const a = s.alpha * (0.5 + 0.5 * Math.sin(t * s.freq * 60 + s.phase))
        const grd = ctx.createRadialGradient(
          s.x * canvas.width, s.y * canvas.height, 0,
          s.x * canvas.width, s.y * canvas.height, s.r * 3.5
        )
        grd.addColorStop(0, `hsla(${s.hue},80%,90%,${a})`)
        grd.addColorStop(1, 'transparent')
        ctx.fillStyle = grd
        ctx.beginPath()
        ctx.arc(s.x * canvas.width, s.y * canvas.height, s.r * 3.5, 0, Math.PI * 2)
        ctx.fill()
        ctx.beginPath()
        ctx.arc(s.x * canvas.width, s.y * canvas.height, s.r * 0.5, 0, Math.PI * 2)
        ctx.fillStyle = `hsla(${s.hue},100%,98%,${a})`
        ctx.fill()
      })

      if (!prefersReduced && ts - lastShoot > 3800 + Math.random() * 2000) {
        lastShoot = ts
        shooters.push({
          x: Math.random() * canvas.width * 0.65,
          y: Math.random() * canvas.height * 0.55,
          vx: Math.random() * 3.5 + 3,
          vy: Math.random() * 2 + 0.8,
          len: 90 + Math.random() * 110,
          life: 1,
        })
      }

      shooters = shooters.filter(s => s.life > 0)
      shooters.forEach(s => {
        const grd = ctx.createLinearGradient(
          s.x, s.y,
          s.x - s.vx * (s.len / 5), s.y - s.vy * (s.len / 5)
        )
        grd.addColorStop(0, `rgba(225,215,255,${s.life * 0.9})`)
        grd.addColorStop(1, 'transparent')
        ctx.beginPath()
        ctx.strokeStyle = grd
        ctx.lineWidth = 1.5
        ctx.moveTo(s.x, s.y)
        ctx.lineTo(s.x - s.vx * (s.len / 5), s.y - s.vy * (s.len / 5))
        ctx.stroke()
        s.x += s.vx
        s.y += s.vy
        s.life -= 0.02
      })

      animId = requestAnimationFrame(draw)
    }

    animId = requestAnimationFrame(draw)

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none',
      }}
    />
  )
}
