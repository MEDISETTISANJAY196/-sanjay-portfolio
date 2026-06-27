import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiGithub, FiExternalLink, FiChevronDown, FiChevronUp } from 'react-icons/fi'
import { projects } from '../data/portfolioData'
import SectionWrapper from './SectionWrapper'

const ProjectCard = ({ project, index }) => {
  const [expanded, setExpanded] = useState(false)
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="glass-card rounded-2xl overflow-hidden group"
      style={{ border: `1px solid rgba(255,255,255,0.07)` }}
    >
      {/* Card header band */}
      <div
        className={`relative h-2 w-full bg-gradient-to-r ${project.color}`}
        style={{
          background: `linear-gradient(90deg, ${project.accentColor}60 0%, ${project.accentColor}20 100%)`,
        }}
      />

      <div className="p-7">
        {/* Top row */}
        <div className="flex items-start justify-between gap-4 mb-4">
          <div className="flex items-center gap-3">
            <div
              className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0"
              style={{ background: `${project.accentColor}18`, border: `1px solid ${project.accentColor}30` }}
            >
              {project.icon}
            </div>
            <div>
              <span
                className="text-xs font-semibold uppercase tracking-widest"
                style={{ color: project.accentColor }}
              >
                {project.category}
              </span>
              <h3 className="font-display font-bold text-white text-lg leading-tight mt-0.5">
                {project.title}
              </h3>
            </div>
          </div>

          {/* Links */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-xl border border-white/[0.08] text-slate-400 hover:text-white hover:border-white/20 transition-all duration-200"
              aria-label="GitHub"
              title="View on GitHub"
            >
              <FiGithub size={15} />
            </a>
            {project.demo && project.demo !== '#' && (
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-xl border border-white/[0.08] text-slate-400 hover:text-white hover:border-white/20 transition-all duration-200"
                aria-label="Live Demo"
                title="View live demo"
              >
                <FiExternalLink size={15} />
              </a>
            )}
          </div>
        </div>

        {/* Description */}
        <p className="text-slate-400 text-sm leading-relaxed mb-5">
          {project.description}
        </p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((t) => (
            <span
              key={t}
              className="px-2.5 py-1 rounded-lg text-xs font-medium border"
              style={{
                color: project.accentColor,
                background: `${project.accentColor}12`,
                borderColor: `${project.accentColor}30`,
              }}
            >
              {t}
            </span>
          ))}
        </div>

        {/* Expand features */}
        <button
          onClick={() => setExpanded(!expanded)}
          className="flex items-center gap-1.5 text-slate-500 hover:text-slate-300 text-xs font-medium transition-colors"
        >
          {expanded ? <FiChevronUp size={14} /> : <FiChevronDown size={14} />}
          {expanded ? 'Hide features' : `Show ${project.features.length} features`}
        </button>

        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="overflow-hidden"
            >
              <ul className="mt-4 space-y-2">
                {project.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-slate-400">
                    <span
                      className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ background: project.accentColor }}
                    />
                    {f}
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  )
}

const Projects = () => {
  return (
    <SectionWrapper id="projects">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="section-tag">
            <span className="w-6 h-px bg-cyan-400 inline-block" />
            Projects
            <span className="w-6 h-px bg-cyan-400 inline-block" />
          </p>
          <h2 className="section-title">
            Things I've{' '}
            <span className="gradient-text">Built</span>
          </h2>
          <p className="text-slate-400 mt-4 max-w-xl mx-auto">
            Real-world AI applications across healthcare, education, and predictive systems.
          </p>
        </div>

        {/* Project cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/sanjaymedisetti"
            target="_blank"
            rel="noreferrer"
            className="btn-ghost inline-flex"
          >
            <FiGithub size={16} />
            See more on GitHub
          </a>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}

export default Projects
