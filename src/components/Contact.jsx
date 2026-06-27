import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  FiMail, FiGithub, FiLinkedin, FiSend, FiCheckCircle,
  FiAlertCircle, FiUser, FiMessageSquare
} from 'react-icons/fi'
import { personalInfo } from '../data/portfolioData'
import SectionWrapper from './SectionWrapper'

const socialLinks = [
  {
    icon: <FiMail size={18} />,
    label: 'Email',
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
    color: '#6366F1',
    bg: 'rgba(99,102,241,0.1)',
    border: 'rgba(99,102,241,0.2)',
  },
  {
    icon: <FiGithub size={18} />,
    label: 'GitHub',
    value: 'github.com/MEDISETTISANJAY196',
    href: personalInfo.github,
    color: '#94A3B8',
    bg: 'rgba(148,163,184,0.08)',
    border: 'rgba(148,163,184,0.15)',
  },
  {
    icon: <FiLinkedin size={18} />,
    label: 'LinkedIn',
    value: 'linkedin.com/in/sanjay-medisetti',
    href: personalInfo.linkedin,
    color: '#06B6D4',
    bg: 'rgba(6,182,212,0.08)',
    border: 'rgba(6,182,212,0.15)',
  },
]

const initialForm = { name: '', email: '', message: '' }

const Contact = () => {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  const validate = () => {
    const errs = {}
    if (!form.name.trim()) errs.name = 'Name is required'
    if (!form.email.trim()) {
      errs.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      errs.email = 'Enter a valid email address'
    }
    if (!form.message.trim()) errs.message = 'Message is required'
    else if (form.message.trim().length < 10) errs.message = 'Message must be at least 10 characters'
    return errs
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      return
    }
    setStatus('sending')
    // Simulate async send (replace with real API: EmailJS, Formspree, etc.)
    await new Promise((r) => setTimeout(r, 1500))
    setStatus('success')
    setForm(initialForm)
    setTimeout(() => setStatus('idle'), 5000)
  }

  return (
    <SectionWrapper id="contact">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="section-tag">
            <span className="w-6 h-px bg-cyan-400 inline-block" />
            Contact
            <span className="w-6 h-px bg-cyan-400 inline-block" />
          </p>
          <h2 className="section-title">
            Let's{' '}
            <span className="gradient-text">Work Together</span>
          </h2>
          <p className="text-slate-400 mt-4 max-w-xl mx-auto">
            Have an exciting AI opportunity, project idea, or just want to connect? I'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10 max-w-5xl mx-auto">
          {/* Left: Social info */}
          <div className="lg:col-span-2 space-y-5">
            <div>
              <h3 className="font-display font-semibold text-white mb-2">Get in touch</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                I'm currently open to AI Engineer, ML Engineer, and Generative AI Developer roles. 
                Feel free to reach out anytime!
              </p>
            </div>

            <div className="space-y-3">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.label !== 'Email' ? '_blank' : undefined}
                  rel="noreferrer"
                  className="flex items-center gap-3 p-4 rounded-2xl border transition-all duration-200 group hover:-translate-y-0.5"
                  style={{
                    background: link.bg,
                    borderColor: link.border,
                  }}
                >
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ color: link.color, background: `${link.color}18` }}
                  >
                    {link.icon}
                  </div>
                  <div className="min-w-0">
                    <p className="text-slate-500 text-xs">{link.label}</p>
                    <p className="text-slate-300 text-sm font-medium truncate group-hover:text-white transition-colors">
                      {link.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            {/* Availability badge */}
            <div
              className="p-4 rounded-2xl"
              style={{ background: 'rgba(16,185,129,0.06)', border: '1px solid rgba(16,185,129,0.15)' }}
            >
              <div className="flex items-center gap-2 mb-1">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-emerald-400 text-sm font-semibold">Available for Opportunities</span>
              </div>
              <p className="text-slate-500 text-xs">
                Open to full-time AI/ML roles. Typical response time: 24–48 hours.
              </p>
            </div>
          </div>

          {/* Right: Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-3"
          >
            <form
              onSubmit={handleSubmit}
              className="glass-card p-7 rounded-3xl space-y-5"
              noValidate
            >
              {/* Name */}
              <div>
                <label className="block text-slate-400 text-xs font-semibold uppercase tracking-wider mb-2">
                  <FiUser size={11} className="inline mr-1.5" />
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className={`w-full px-4 py-3 rounded-xl bg-white/[0.04] border text-white placeholder-slate-600 text-sm outline-none transition-all duration-200 font-body
                    focus:bg-white/[0.06] focus:border-indigo-500/60
                    ${errors.name ? 'border-rose-500/60' : 'border-white/[0.08]'}`}
                />
                {errors.name && (
                  <p className="mt-1.5 text-rose-400 text-xs flex items-center gap-1">
                    <FiAlertCircle size={11} /> {errors.name}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="block text-slate-400 text-xs font-semibold uppercase tracking-wider mb-2">
                  <FiMail size={11} className="inline mr-1.5" />
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className={`w-full px-4 py-3 rounded-xl bg-white/[0.04] border text-white placeholder-slate-600 text-sm outline-none transition-all duration-200 font-body
                    focus:bg-white/[0.06] focus:border-indigo-500/60
                    ${errors.email ? 'border-rose-500/60' : 'border-white/[0.08]'}`}
                />
                {errors.email && (
                  <p className="mt-1.5 text-rose-400 text-xs flex items-center gap-1">
                    <FiAlertCircle size={11} /> {errors.email}
                  </p>
                )}
              </div>

              {/* Message */}
              <div>
                <label className="block text-slate-400 text-xs font-semibold uppercase tracking-wider mb-2">
                  <FiMessageSquare size={11} className="inline mr-1.5" />
                  Message
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Tell me about your project, opportunity, or just say hello..."
                  className={`w-full px-4 py-3 rounded-xl bg-white/[0.04] border text-white placeholder-slate-600 text-sm outline-none transition-all duration-200 font-body resize-none
                    focus:bg-white/[0.06] focus:border-indigo-500/60
                    ${errors.message ? 'border-rose-500/60' : 'border-white/[0.08]'}`}
                />
                {errors.message && (
                  <p className="mt-1.5 text-rose-400 text-xs flex items-center gap-1">
                    <FiAlertCircle size={11} /> {errors.message}
                  </p>
                )}
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={status === 'sending' || status === 'success'}
                className="w-full btn-primary justify-center disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none"
              >
                {status === 'sending' ? (
                  <>
                    <motion.span
                      animate={{ rotate: 360 }}
                      transition={{ duration: 0.8, repeat: Infinity, ease: 'linear' }}
                      className="inline-block w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                    />
                    Sending...
                  </>
                ) : status === 'success' ? (
                  <>
                    <FiCheckCircle size={16} />
                    Message Sent!
                  </>
                ) : (
                  <>
                    <FiSend size={16} />
                    Send Message
                  </>
                )}
              </button>

              {/* Success banner */}
              <AnimatePresence>
                {status === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    className="flex items-center gap-2 p-3 rounded-xl text-sm text-emerald-400"
                    style={{ background: 'rgba(16,185,129,0.08)', border: '1px solid rgba(16,185,129,0.2)' }}
                  >
                    <FiCheckCircle size={15} />
                    Thanks! I'll get back to you within 24–48 hours.
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  )
}

export default Contact
