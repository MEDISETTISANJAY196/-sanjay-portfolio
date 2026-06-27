import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiAward, FiExternalLink } from 'react-icons/fi'
import { certifications } from '../data/portfolioData'
import SectionWrapper from './SectionWrapper'

const CertCard = ({ cert, index }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30, scale: 0.97 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ delay: index * 0.09, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="glass-card p-5 rounded-2xl group hover:-translate-y-1 transition-all duration-300 relative overflow-hidden"
    >
      {/* Background glow */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          background: `radial-gradient(circle at top right, ${cert.accent}18 0%, transparent 60%)`,
        }}
      />

      <div className="relative z-10 flex items-start gap-4">
        {/* Icon */}
        <div
          className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0"
          style={{ background: `${cert.accent}15`, border: `1px solid ${cert.accent}30` }}
        >
          {cert.icon}
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <h3 className="font-display font-semibold text-white text-sm leading-snug mb-1">
            {cert.title}
          </h3>
          <div className="flex items-center gap-1.5">
            <FiAward size={12} style={{ color: cert.accent }} />
            <span className="text-xs font-medium" style={{ color: cert.accent }}>
              {cert.issuer}
            </span>
          </div>
        </div>

        {/* External link hint */}
        <FiExternalLink
          size={14}
          className="text-slate-700 group-hover:text-slate-400 transition-colors flex-shrink-0 mt-0.5"
        />
      </div>
    </motion.div>
  )
}

const Certifications = () => {
  return (
    <SectionWrapper id="certifications">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="section-tag">
            <span className="w-6 h-px bg-cyan-400 inline-block" />
            Certifications
            <span className="w-6 h-px bg-cyan-400 inline-block" />
          </p>
          <h2 className="section-title">
            Recognized{' '}
            <span className="gradient-text">Achievements</span>
          </h2>
          <p className="text-slate-400 mt-4 max-w-xl mx-auto">
            Continuous learning across AI, ML, data science, and software development platforms.
          </p>
        </div>

        {/* Cert grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {certifications.map((cert, index) => (
            <CertCard key={cert.id} cert={cert} index={index} />
          ))}
        </div>

        {/* Bottom badge */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12 text-center"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/[0.08] bg-white/[0.03] text-slate-500 text-xs font-medium">
            <FiAward size={12} className="text-amber-400" />
            6+ certifications earned across AI, ML & Development
          </span>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}

export default Certifications
