import { motion } from 'framer-motion'

const variants = {
  cyan: {
    borderColor: '#00E5FF',
    backgroundColor: 'rgba(0,229,255,0.09)',
    boxShadow: '0 0 16px rgba(0,229,255,0.5), inset 0 0 8px rgba(0,229,255,0.05)',
    color: '#00E5FF',
  },
  orange: {
    borderColor: '#FF6B35',
    backgroundColor: 'rgba(255,107,53,0.09)',
    boxShadow: '0 0 16px rgba(255,107,53,0.5)',
    color: '#FF6B35',
  },
}

export default function Tag({ children, color = 'cyan' }) {
  return (
    <motion.span
      className={`tag${color === 'orange' ? ' tag-orange' : ''}`}
      whileHover={variants[color]}
      transition={{ duration: 0.18, ease: 'easeOut' }}
    >
      {children}
    </motion.span>
  )
}
