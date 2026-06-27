import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  FiCpu, FiCode, FiZap, FiTarget, FiAward, FiGlobe
} from 'react-icons/fi'
import { personalInfo, education } from '../data/portfolioData'
import SectionWrapper from './SectionWrapper'

const strengths = [
  {
    icon: <FiCpu size={20} />,
    title: 'AI & ML Expertise',
    description: 'Deep knowledge of machine learning algorithms, neural networks, and AI architectures.',
    color: 'text-indigo-400',
    bg: 'bg-indigo-500/10',
    border: 'border-indigo-500/20',
  },
  {
    icon: <FiCode size={20} />,
    title: 'Full-Stack AI Dev',
    description: 'Building end-to-end AI applications with modern backend frameworks and clean frontends.',
    color: 'text-cyan-400',
    bg: 'bg-cyan-500/10',
    border: 'border-cyan-500/20',
  },
  {
    icon: <FiZap size={20} />,
    title: 'Generative AI',
    description: 'Skilled in LLMs, prompt engineering, LangChain, and building generative AI pipelines.',
    color: 'text-violet-400',
    bg: 'bg-violet-500/10',
    border: 'border-violet-500/20',
  },
  {
    icon: <FiTarget size={20} />,
    title: 'Problem Solver',
    description: 'Analytical thinker who transforms complex challenges into elegant, scalable solutions.',
    color: 'text-emerald-400',
    bg: 'bg-emerald-500/10',
    border: 'border-emerald-500/20',
  },
  {
    icon: <FiAward size={20} />,
    title: 'Certified Learner',
    description: '6+ certifications from Google, Coursera, NPTEL, and Altair across AI/ML domains.',
    color: 'text-amber-400',
    bg: 'bg-amber-500/10',
    border: 'border-amber-500/20',
  },
  {
    icon: <FiGlobe size={20} />,
    title: 'Impact Driven',
    description: 'Building AI solutions in healthcare, education, and real-world prediction systems.',
    color: 'text-rose-400',
    bg: 'bg-rose-500/10',
    border: 'border-rose-500/20',
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }
  })
}

const About = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 })

  return (
    <SectionWrapper id="about">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="section-tag">
            <span className="w-6 h-px bg-cyan-400 inline-block" />
            About Me
            <span className="w-6 h-px bg-cyan-400 inline-block" />
          </p>
          <h2 className="section-title">
            Passionate About{' '}
            <span className="gradient-text">Intelligent Systems</span>
          </h2>
          <p className="text-slate-400 mt-4 max-w-2xl mx-auto leading-relaxed">
            From building AI healthcare platforms to generative quiz engines — I turn ideas into intelligent products.
          </p>
        </div>

        {/* Bio + Identity */}
        <div className="grid lg:grid-cols-2 gap-10 mb-16 items-start">
          {/* Text side */}
          <div className="space-y-5">
            <p className="text-slate-300 leading-relaxed text-base">
              {personalInfo.summary}
            </p>
            <div className="glass-card p-5 rounded-2xl">
              <h3 className="font-display font-semibold text-white mb-3 text-sm uppercase tracking-wider">
                Career Objective
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                To leverage my skills in AI, Machine Learning, and Generative AI to contribute to 
                innovative teams solving meaningful problems — building systems that are intelligent, 
                scalable, and impactful.
              </p>
            </div>

            {/* Quick identity tags */}
            <div className="flex flex-wrap gap-2">
              {[
                'Final-Year B.Tech CSE (AIML)',
                'AI & ML Enthusiast',
                'Generative AI Developer',
                'Full Stack AI Dev',
                'Problem Solver',
              ].map((tag) => (
                <span key={tag} className="skill-pill">{tag}</span>
              ))}
            </div>
          </div>

          {/* Education card */}
          <div
            className="glass-card p-7 rounded-2xl relative overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, rgba(79,70,229,0.08) 0%, rgba(6,182,212,0.04) 100%)',
              border: '1px solid rgba(79,70,229,0.2)',
            }}
          >
            <div
              className="absolute top-0 right-0 w-32 h-32 rounded-full opacity-10"
              style={{
                background: 'radial-gradient(circle, #4F46E5 0%, transparent 70%)',
                transform: 'translate(30%, -30%)',
              }}
            />
            <div className="relative z-10">
              <span className="text-indigo-400 text-xs font-semibold uppercase tracking-widest mb-3 block">
                Education
              </span>
              <h3 className="font-display font-bold text-white text-xl mb-1">
                {education.college}
              </h3>
              <p className="text-slate-300 font-medium mb-1">{education.degree}</p>
              <p className="text-slate-500 text-sm mb-5">{education.year}</p>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/[0.04] rounded-xl p-4 text-center border border-white/[0.06]">
                  <div className="font-display font-bold text-2xl gradient-text">{education.cgpa}</div>
                  <div className="text-slate-500 text-xs mt-1">CGPA</div>
                </div>
                <div className="bg-white/[0.04] rounded-xl p-4 text-center border border-white/[0.06]">
                  <div className="font-display font-bold text-sm text-emerald-400 mt-1">Final Year</div>
                  <div className="text-slate-500 text-xs mt-1">Status</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Strengths grid */}
        <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {strengths.map((s, i) => (
            <motion.div
              key={s.title}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              className="glass-card p-5 rounded-2xl group hover:border-white/10 transition-all duration-300 cursor-default"
            >
              <div className={`w-10 h-10 ${s.bg} border ${s.border} rounded-xl flex items-center justify-center ${s.color} mb-4 group-hover:scale-110 transition-transform`}>
                {s.icon}
              </div>
              <h4 className="font-display font-semibold text-white mb-2">{s.title}</h4>
              <p className="text-slate-500 text-sm leading-relaxed">{s.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}

export default About
