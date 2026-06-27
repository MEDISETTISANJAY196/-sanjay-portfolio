import React from 'react'
import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail, FiHeart } from 'react-icons/fi'
import { personalInfo } from '../data/portfolioData'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative border-t border-white/[0.06]">
      {/* Gradient top fade */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background: 'linear-gradient(90deg, transparent 0%, rgba(79,70,229,0.5) 30%, rgba(6,182,212,0.5) 70%, transparent 100%)',
        }}
      />

      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col items-center gap-6">
          {/* Logo */}
          <button onClick={scrollToTop} className="group flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-600 to-cyan-500 flex items-center justify-center font-display font-bold text-white text-base shadow-glow-indigo group-hover:scale-110 transition-transform">
              S
            </div>
            <span className="font-display font-bold text-white">
              Sanjay<span className="text-indigo-400">.dev</span>
            </span>
          </button>

          {/* Role */}
          <p className="text-slate-500 text-sm text-center">
            {personalInfo.role}
          </p>

          {/* Social links */}
          <div className="flex items-center gap-4">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="p-2.5 rounded-xl border border-white/[0.07] text-slate-500 hover:text-white hover:border-white/15 transition-all duration-200 hover:-translate-y-0.5"
            >
              <FiGithub size={17} />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="p-2.5 rounded-xl border border-white/[0.07] text-slate-500 hover:text-cyan-400 hover:border-cyan-500/30 transition-all duration-200 hover:-translate-y-0.5"
            >
              <FiLinkedin size={17} />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              aria-label="Email"
              className="p-2.5 rounded-xl border border-white/[0.07] text-slate-500 hover:text-indigo-400 hover:border-indigo-500/30 transition-all duration-200 hover:-translate-y-0.5"
            >
              <FiMail size={17} />
            </a>
          </div>

          {/* Nav quick links */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {['Home', 'About', 'Skills', 'Projects', 'Certifications', 'Education', 'Contact'].map((link) => (
              <button
                key={link}
                onClick={() => document.getElementById(link.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })}
                className="text-slate-600 hover:text-slate-400 text-xs transition-colors"
              >
                {link}
              </button>
            ))}
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-white/[0.04]" />

          {/* Copyright */}
          <div className="flex flex-col sm:flex-row items-center gap-2 text-center">
            <p className="text-slate-600 text-xs">
              © {new Date().getFullYear()} Sanjay Medisetti. All rights reserved.
            </p>
            <span className="hidden sm:block text-slate-700">·</span>
            <p className="text-slate-700 text-xs flex items-center gap-1">
              Built with <FiHeart size={10} className="text-rose-500" /> using React & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
