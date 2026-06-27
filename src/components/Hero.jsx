import React from 'react'
import { motion } from 'framer-motion'
import {
  FiGithub, FiLinkedin, FiMail, FiDownload, FiArrowRight
} from 'react-icons/fi'
import { personalInfo, stats } from '../data/portfolioData'
import { useTypingEffect } from '../hooks/useTypingEffect'
import NeuralCanvas from './NeuralCanvas'

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
}

const Hero = () => {
  const typedRole = useTypingEffect(personalInfo.roles, 80, 45, 1800)

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
  }
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
  id="home"
  className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-24"
>
      {/* Background layers */}
      <div className="absolute inset-0 bg-navy-950" />
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            'linear-gradient(rgba(79,70,229,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(79,70,229,0.04) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 80% 55% at 50% 0%, rgba(79,70,229,0.12) 0%, transparent 70%)',
        }}
      />
      <div
        className="absolute bottom-0 left-0 right-0 h-64"
        style={{
          background: 'linear-gradient(to top, #0A0F1E, transparent)',
        }}
      />

      {/* Neural particle canvas */}
      <NeuralCanvas />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Status badge */}
          <motion.div variants={itemVariants} className="flex justify-center mb-8">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/[0.04] text-slate-300 text-sm font-medium backdrop-blur-sm">
              <span className="glow-dot" />
              Open to AI / ML Opportunities
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
  variants={itemVariants}
  className="font-display font-bold text-4xl md:text-6xl lg:text-7xl text-white leading-none mb-4"
>
  Hi, I'm
  <br />
  <span
    className="bg-clip-text text-transparent"
    style={{
      backgroundImage:
        "linear-gradient(135deg, #818CF8 0%, #06B6D4 50%, #818CF8 100%)",
    }}
  >
    Sanjay Medisetti
  </span>
</motion.h1>
            

          {/* Typing role */}
          <motion.div
            variants={itemVariants}
            className="h-10 md:h-12 flex items-center justify-center mb-6"
          >
            <p className="font-display text-xl md:text-2xl text-slate-300 font-medium">
              <span className="text-cyan-400">&gt;</span>{' '}
              <span>{typedRole}</span>
              <span className="inline-block w-0.5 h-6 bg-cyan-400 ml-1 animate-pulse" />
            </p>
          </motion.div>

          {/* Tagline */}
          <motion.p
            variants={itemVariants}
            className="text-slate-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-10"
          >
            {personalInfo.tagline}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center justify-center gap-3 mb-16"
          >
            <button onClick={scrollToProjects} className="btn-primary group">
              View Projects
              <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href={personalInfo.resume}
              download
              className="btn-ghost"
            >
              <FiDownload size={16} />
              Download Resume
            </a>

            <button onClick={scrollToContact} className="btn-ghost">
              <FiMail size={16} />
              Contact Me
            </button>
          </motion.div>

          {/* Social links */}
          <motion.div
            variants={itemVariants}
            className="flex items-center justify-center gap-4 mb-20"
          >
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-xl border border-white/[0.08] text-slate-400 hover:text-white hover:border-white/20 transition-all duration-200 hover:-translate-y-0.5"
              aria-label="GitHub"
            >
              <FiGithub size={18} />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-xl border border-white/[0.08] text-slate-400 hover:text-white hover:border-white/20 transition-all duration-200 hover:-translate-y-0.5"
              aria-label="LinkedIn"
            >
              <FiLinkedin size={18} />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="p-2.5 rounded-xl border border-white/[0.08] text-slate-400 hover:text-white hover:border-white/20 transition-all duration-200 hover:-translate-y-0.5"
              aria-label="Email"
            >
              <FiMail size={18} />
            </a>
          </motion.div>

          {/* Stats row */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto"
          >
            {stats.map((stat, i) => (
              <div
                key={i}
                className="glass-card p-4 text-center"
              >
                <div className="font-display font-bold text-2xl gradient-text mb-1">
                  {stat.value}
                </div>
                <div className="text-xs text-slate-500 font-medium">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-1">
          <span className="text-slate-600 text-xs">scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            className="w-0.5 h-6 rounded-full bg-gradient-to-b from-indigo-500 to-transparent"
          />
        </div>
      </motion.div>
    </section>
  )
}

export default Hero
