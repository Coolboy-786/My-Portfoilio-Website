import { useEffect, useRef } from 'react'

export default function CursorGlow() {
  const ref = useRef(null)

  useEffect(() => {
    const move = (e) => {
      if (!ref.current) return
      ref.current.style.transform = `translate(${e.clientX - 250}px, ${e.clientY - 250}px)`
    }
    window.addEventListener('mousemove', move, { passive: true })
    return () => window.removeEventListener('mousemove', move)
  }, [])

  return (
    <div
      ref={ref}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: 500,
        height: 500,
        background: 'radial-gradient(circle, rgba(139,92,246,0.045) 0%, rgba(167,139,250,0.015) 40%, transparent 65%)',
        pointerEvents: 'none',
        zIndex: 9997,
        willChange: 'transform',
      }}
    />
  )
}
