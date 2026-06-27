import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  FiBook, FiCalendar, FiStar, FiCheckCircle, FiCpu
} from 'react-icons/fi'
import { education } from '../data/portfolioData'
import SectionWrapper from './SectionWrapper'

const highlights = [
  'Artificial Intelligence & Machine Learning',
  'Deep Learning & Neural Networks',
  'Natural Language Processing',
  'Data Structures & Algorithms',
  'Database Management Systems',
  'Cloud Computing Fundamentals',
  'Full Stack Web Development',
  'Software Engineering Principles',
]

const Education = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <SectionWrapper id="education">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="section-tag">
            <span className="w-6 h-px bg-cyan-400 inline-block" />
            Education
            <span className="w-6 h-px bg-cyan-400 inline-block" />
          </p>
          <h2 className="section-title">
            Academic{' '}
            <span className="gradient-text">Foundation</span>
          </h2>
        </div>

        {/* Main education card */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="glass-card rounded-3xl overflow-hidden"
            style={{ border: '1px solid rgba(79,70,229,0.2)' }}
          >
            {/* Top gradient bar */}
            <div
              className="h-1.5 w-full"
              style={{
                background: 'linear-gradient(90deg, #4F46E5 0%, #06B6D4 50%, #4F46E5 100%)',
                backgroundSize: '200% auto',
              }}
            />

            <div className="p-8 md:p-10">
              {/* College header */}
              <div className="flex flex-col md:flex-row md:items-start gap-6 mb-8">
                {/* Logo / icon */}
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0"
                  style={{ background: 'rgba(79,70,229,0.15)', border: '1px solid rgba(79,70,229,0.3)' }}
                >
                  <FiBook size={28} className="text-indigo-400" />
                </div>

                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                      ● Active
                    </span>
                    <span className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-indigo-500/10 border border-indigo-500/20 text-indigo-400">
                      Final Year
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-white text-xl md:text-2xl leading-tight mb-1">
                    {education.college}
                  </h3>
                  <p className="text-slate-300 font-medium">{education.degree}</p>
                </div>
              </div>

              {/* Stats row */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {[
                  { label: 'Degree', value: 'B.Tech', icon: <FiBook size={14} /> },
                  { label: 'CGPA', value: education.cgpa, icon: <FiStar size={14} /> },
                  { label: 'Duration', value: education.year, icon: <FiCalendar size={14} /> },
                  { label: 'Status', value: 'Final Year', icon: <FiCheckCircle size={14} /> },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-2xl p-4 text-center"
                    style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}
                  >
                    <div className="flex items-center justify-center gap-1.5 text-slate-500 text-xs mb-2">
                      {stat.icon}
                      {stat.label}
                    </div>
                    <div className="font-display font-bold text-white text-sm">{stat.value}</div>
                  </div>
                ))}
              </div>

              {/* Specialization */}
              <div
                className="rounded-2xl p-6 mb-6"
                style={{ background: 'rgba(79,70,229,0.06)', border: '1px solid rgba(79,70,229,0.15)' }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <FiCpu size={16} className="text-indigo-400" />
                  <h4 className="font-display font-semibold text-white text-sm">
                    Specialization: Artificial Intelligence & Machine Learning
                  </h4>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Pursuing a specialized B.Tech degree with a dedicated AIML stream covering advanced topics
                  in neural networks, NLP, computer vision, reinforcement learning, and AI system design.
                </p>
              </div>

              {/* Key subjects */}
              <div>
                <h4 className="font-display font-semibold text-slate-300 text-sm mb-4">
                  Key Subjects
                </h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                  {highlights.map((subject, i) => (
                    <motion.div
                      key={subject}
                      initial={{ opacity: 0, x: -10 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.3 + i * 0.05, duration: 0.4 }}
                      className="flex items-center gap-2 text-xs text-slate-400"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 flex-shrink-0" />
                      {subject}
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  )
}

export default Education
