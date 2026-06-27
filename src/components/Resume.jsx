import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FiDownload, FiEye, FiFileText, FiArrowRight } from 'react-icons/fi'
import { personalInfo } from '../data/portfolioData'
import SectionWrapper from './SectionWrapper'

const resumeHighlights = [
  { label: 'AI & ML Projects', value: '3+' },
  { label: 'Certifications', value: '6+' },
  { label: 'Technologies', value: '15+' },
  { label: 'CGPA', value: '7.0' },
]

const Resume = () => {
  const [hovered, setHovered] = useState(false)

  return (
    <SectionWrapper id="resume">
      <div className="section-container">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <p className="section-tag">
              <span className="w-6 h-px bg-cyan-400 inline-block" />
              Resume
              <span className="w-6 h-px bg-cyan-400 inline-block" />
            </p>
            <h2 className="section-title">
              My{' '}
              <span className="gradient-text">Credentials</span>
            </h2>
            <p className="text-slate-400 mt-4 max-w-xl mx-auto">
              Download or view my resume to learn more about my experience, skills, and projects.
            </p>
          </div>

          {/* Resume preview card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className="glass-card rounded-3xl overflow-hidden mb-8 relative"
            style={{
              border: '1px solid rgba(79,70,229,0.2)',
              boxShadow: hovered
                ? '0 8px 60px rgba(79,70,229,0.2), 0 4px 32px rgba(0,0,0,0.5)'
                : '0 4px 32px rgba(0,0,0,0.4)',
              transition: 'box-shadow 0.3s ease',
            }}
          >
            {/* Gradient top bar */}
            <div
              className="h-1 w-full"
              style={{ background: 'linear-gradient(90deg, #4F46E5, #06B6D4)' }}
            />

            {/* Preview area */}
            <div
              className="relative h-64 flex flex-col items-center justify-center"
              style={{
                background: 'linear-gradient(135deg, rgba(79,70,229,0.06) 0%, rgba(6,182,212,0.04) 100%)',
              }}
            >
              {/* Decorative lines (simulates paper) */}
              <div className="absolute inset-0 flex flex-col justify-center gap-3 px-12 opacity-10 pointer-events-none">
                {[...Array(8)].map((_, i) => (
                  <div
                    key={i}
                    className="h-px bg-white rounded-full"
                    style={{ width: i === 0 ? '40%' : i % 3 === 0 ? '60%' : '80%' }}
                  />
                ))}
              </div>

              {/* Center icon */}
              <motion.div
                animate={{ y: hovered ? -4 : 0 }}
                transition={{ duration: 0.3 }}
                className="relative z-10 flex flex-col items-center gap-3"
              >
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center"
                  style={{ background: 'rgba(79,70,229,0.15)', border: '1px solid rgba(79,70,229,0.3)' }}
                >
                  <FiFileText size={28} className="text-indigo-400" />
                </div>
                <div className="text-center">
                  <p className="font-display font-bold text-white">Sanjay Medisetti</p>
                  <p className="text-slate-500 text-sm">AI Engineer · Resume</p>
                </div>
              </motion.div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-4 border-t border-white/[0.06]">
              {resumeHighlights.map((item, i) => (
                <div
                  key={item.label}
                  className={`p-4 text-center ${i !== resumeHighlights.length - 1 ? 'border-r border-white/[0.06]' : ''}`}
                >
                  <div className="font-display font-bold text-xl gradient-text">{item.value}</div>
                  <div className="text-slate-600 text-xs mt-0.5">{item.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Action buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href={personalInfo.resume}
              download
              className="btn-primary w-full sm:w-auto justify-center"
            >
              <FiDownload size={16} />
              Download Resume
            </a>
            <a
              href={personalInfo.resume}
              target="_blank"
              rel="noreferrer"
              className="btn-ghost w-full sm:w-auto justify-center"
            >
              <FiEye size={16} />
              View Resume
              <FiArrowRight size={14} />
            </a>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  )
}

export default Resume
