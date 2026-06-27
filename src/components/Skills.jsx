import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  FiCode, FiCpu, FiLayers, FiDatabase, FiTool
} from 'react-icons/fi'
import { skillCategories } from '../data/portfolioData'
import SectionWrapper from './SectionWrapper'

const iconMap = {
  code: FiCode,
  brain: FiCpu,
  layers: FiLayers,
  database: FiDatabase,
  tool: FiTool,
}

const colorMap = {
  indigo: {
    icon: 'text-indigo-400',
    bg: 'bg-indigo-500/10',
    border: 'border-indigo-500/20',
    pill: 'border-indigo-500/30 text-indigo-300 bg-indigo-500/10',
    glow: 'rgba(79,70,229,0.2)',
  },
  cyan: {
    icon: 'text-cyan-400',
    bg: 'bg-cyan-500/10',
    border: 'border-cyan-500/20',
    pill: 'border-cyan-500/30 text-cyan-300 bg-cyan-500/10',
    glow: 'rgba(6,182,212,0.2)',
  },
  violet: {
    icon: 'text-violet-400',
    bg: 'bg-violet-500/10',
    border: 'border-violet-500/20',
    pill: 'border-violet-500/30 text-violet-300 bg-violet-500/10',
    glow: 'rgba(139,92,246,0.2)',
  },
  emerald: {
    icon: 'text-emerald-400',
    bg: 'bg-emerald-500/10',
    border: 'border-emerald-500/20',
    pill: 'border-emerald-500/30 text-emerald-300 bg-emerald-500/10',
    glow: 'rgba(16,185,129,0.2)',
  },
  amber: {
    icon: 'text-amber-400',
    bg: 'bg-amber-500/10',
    border: 'border-amber-500/20',
    pill: 'border-amber-500/30 text-amber-300 bg-amber-500/10',
    glow: 'rgba(245,158,11,0.2)',
  },
}

const SkillCard = ({ category, index }) => {
  const [hovered, setHovered] = useState(false)
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })
  const Icon = iconMap[category.icon] || FiCode
  const colors = colorMap[category.color] || colorMap.indigo

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="glass-card p-6 rounded-2xl transition-all duration-300 relative overflow-hidden"
      style={{
        boxShadow: hovered
          ? `0 8px 40px ${colors.glow}, 0 4px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.06)`
          : '0 4px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.06)',
        transform: hovered ? 'translateY(-2px)' : 'translateY(0)',
      }}
    >
      {/* Hover glow orb */}
      <div
        className="absolute -top-10 -right-10 w-32 h-32 rounded-full transition-opacity duration-300 pointer-events-none"
        style={{
          background: `radial-gradient(circle, ${colors.glow} 0%, transparent 70%)`,
          opacity: hovered ? 1 : 0,
        }}
      />

      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-center gap-3 mb-5">
          <div className={`w-10 h-10 ${colors.bg} border ${colors.border} rounded-xl flex items-center justify-center ${colors.icon} flex-shrink-0`}>
            <Icon size={18} />
          </div>
          <div>
            <h3 className="font-display font-semibold text-white text-sm">{category.label}</h3>
            <p className="text-slate-600 text-xs">{category.skills.length} skills</p>
          </div>
        </div>

        {/* Skill pills */}
        <div className="flex flex-wrap gap-2">
          {category.skills.map((skill, i) => (
            <motion.span
              key={skill}
              initial={{ opacity: 0, scale: 0.85 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: index * 0.1 + i * 0.05 + 0.2, duration: 0.3 }}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-all duration-200 cursor-default hover:scale-105 ${colors.pill}`}
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

const Skills = () => {
  return (
    <SectionWrapper id="skills">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="section-tag">
            <span className="w-6 h-px bg-cyan-400 inline-block" />
            Technical Skills
            <span className="w-6 h-px bg-cyan-400 inline-block" />
          </p>
          <h2 className="section-title">
            Tools & Technologies I{' '}
            <span className="gradient-text">Work With</span>
          </h2>
          <p className="text-slate-400 mt-4 max-w-xl mx-auto">
            A curated stack for building production-ready AI systems, from model training to deployment.
          </p>
        </div>

        {/* Category grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillCategories.map((category, index) => (
            <SkillCard key={category.id} category={category} index={index} />
          ))}
        </div>

        {/* Decorative bottom note */}
        <div className="mt-12 text-center">
          <p className="text-slate-600 text-sm">
            Always learning · Currently exploring{' '}
            <span className="text-indigo-400 font-medium">Agentic AI</span> &{' '}
            <span className="text-cyan-400 font-medium">RAG Pipelines</span>
          </p>
        </div>
      </div>
    </SectionWrapper>
  )
}

export default Skills
