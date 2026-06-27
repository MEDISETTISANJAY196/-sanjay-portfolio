import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const SectionWrapper = ({ id, children, className = '' }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.08,
  })

  return (
    <section id={id} className={`relative ${className}`}>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.div>
    </section>
  )
}

export default SectionWrapper
