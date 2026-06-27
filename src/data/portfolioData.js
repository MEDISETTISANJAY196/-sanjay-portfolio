// =====================
// PORTFOLIO DATA
// =====================

export const personalInfo = {
  name: 'Sanjay Medisetti',
  role: 'AI Engineer & Generative AI Developer',
  roles: [
    'AI Engineer',
    'AIML Engineer',
    'Generative AI Developer',
    'ML Engineer',
    'AI Engineer | AIML Engineer | Generative AI Developer',
  ],
  tagline: 'Building Intelligent AI Solutions with Machine Learning, Generative AI, and Full-Stack Development.',
  summary: `I am a Final-Year B.Tech CSE (AIML) student passionate about Artificial Intelligence, Machine Learning, 
  Deep Learning, NLP, and Generative AI. I enjoy building real-world AI solutions that solve practical problems 
  and create meaningful impact. Currently seeking AI Engineer, AIML Engineer, Machine Learning Engineer, 
  and Generative AI opportunities.`,
  email: 'sanjaymedisetti@gmail.com',
  github: 'https://github.com/MEDISETTISANJAY196',
  linkedin: 'https://www.linkedin.com/in/sanjay-medisetti',
  resume: 'My_Resume (1).pdf',
}

export const education = {
  college: 'Kakinada Institute Of Engineering And Technology',
  degree: 'B.Tech Computer Science and Engineering (AIML)',
  cgpa: '7.0',
  status: 'Final Year Student',
  year: '2023 – 2027',
}

export const skillCategories = [
  {
    id: 'programming',
    label: 'Programming',
    icon: 'code',
    color: 'indigo',
    skills: ['Python', 'Java', 'HTML', 'CSS', 'JavaScript'],
  },
  {
    id: 'ai-ml',
    label: 'AI & Machine Learning',
    icon: 'brain',
    color: 'cyan',
    skills: [
  'Machine Learning',
  'Deep Learning',
  'NLP',
  'Generative AI',
  'LLMs',
  'Prompt Engineering',
  'Computer Vision'
]  },
  {
    id: 'frameworks',
    label: 'Frameworks',
    icon: 'layers',
    color: 'violet',
    skills: [
  'FastAPI',
  'Flask',
  'LangChain',
  'LangGraph',
  'React.js'
],
  },
  {
    id: 'databases',
    label: 'Databases',
    icon: 'database',
    color: 'emerald',
    skills: ['MySQL', 'PostgreSQL', 'MongoDB'],
  },
  {
    id: 'tools',
    label: 'Tools & Cloud',
    icon: 'tool',
    color: 'amber',
    skills: [
       'Git',
       'GitHub',
       'AWS',
       'Docker',
       'Vite',
       'Jupyter Notebook',
       'VS Code'
      ],
  },
]

export const projects = [
  {
    id: 1,
    title: 'AI Digital Blood Bank Management System',
    description: 'An AI-powered healthcare platform connecting blood donors, recipients, hospitals, and blood banks. Uses intelligent donor matching and inventory management to improve blood availability and save lives.',
    features: [
      'Donor Registration & Verification',
      'Recipient Management Portal',
      'AI-Based Donor Matching Algorithm',
      'Emergency Blood Request Alerts',
      'Blood Inventory Tracking',
      'Hospital Dashboard',
      'Admin Panel',
    ],
    tech: ['Python', 'FastAPI', 'Machine Learning', 'SQL', 'HTML', 'CSS', 'JavaScript'],
    color: 'from-rose-500/20 to-pink-600/10',
    borderColor: 'border-rose-500/20',
    accentColor: '#f43f5e',
    icon: '🩸',
    github: 'https://github.com/sanjaymedisetti',
    demo: '#',
    category: 'Healthcare AI',
  },
  {
    id: 2,
    title: 'AI Study Quiz Generator',
    description: 'An AI-powered educational platform that generates quizzes automatically from notes, study materials, and topics using NLP and Generative AI — turning any content into interactive learning experiences.',
    features: [
      'Automatic Quiz Generation from Text',
      'MCQ & Short Answer Creation',
      'Difficulty Level Selection',
      'Instant Scoring & Feedback',
      'Performance Analytics Dashboard',
      'User Authentication',
    ],
    tech: ['Python', 'NLP', 'FastAPI', 'Generative AI', 'HTML', 'CSS', 'JavaScript'],
    color: 'from-violet-500/20 to-indigo-600/10',
    borderColor: 'border-violet-500/20',
    accentColor: '#8b5cf6',
    icon: '🧠',
    github: 'https://github.com/MEDISETTISANJAY196',
    demo: '#',
    category: 'Education AI',
  },
  {
    id: 3,
    title: 'Human Activity Prediction using ML',
    description: 'Machine learning application that classifies and predicts human activities in real-time using trained ML models, with an interactive dashboard for data visualization and analysis.',
    features: [
      'Real-Time Activity Classification',
      'Interactive Prediction Dashboard',
      'Data Visualization & Charts',
      'Multi-Class Activity Detection',
      'User-Friendly Interface',
    ],
    tech: ['Python', 'Machine Learning', 'scikit-learn', 'HTML', 'CSS'],
    color: 'from-cyan-500/20 to-blue-600/10',
    borderColor: 'border-cyan-500/20',
    accentColor: '#06b6d4',
    icon: '🏃',
    github: 'https://github.com/sanjaymedisetti',
    demo: '#',
    category: 'ML Research',
  },
]

export const certifications = [
  {
    id: 1,
    title: 'Google AI Essentials',
    issuer: 'Google',
    icon: '🎓',
    color: 'from-blue-500/20 to-blue-600/10',
    accent: '#3b82f6',
  },
  {
    id: 2,
    title: 'Data Science Master Virtual Internship',
    issuer: 'Altair',
    icon: '📊',
    color: 'from-orange-500/20 to-orange-600/10',
    accent: '#f97316',
  },
  {
    id: 3,
    title: 'Android Developer Virtual Internship',
    issuer: 'Google / AICTE',
    icon: '📱',
    color: 'from-green-500/20 to-green-600/10',
    accent: '#22c55e',
  },
  {
    id: 4,
    title: 'Machine Learning Specialization',
    issuer: 'Coursera / DeepLearning.AI',
    icon: '🤖',
    color: 'from-indigo-500/20 to-indigo-600/10',
    accent: '#6366f1',
  },
  {
    id: 5,
    title: 'Deep Learning Fundamentals',
    issuer: 'NPTEL',
    icon: '🧬',
    color: 'from-cyan-500/20 to-cyan-600/10',
    accent: '#06b6d4',
  },
  {
    id: 6,
    title: 'Python for AI & ML',
    issuer: 'Coursera',
    icon: '🐍',
    color: 'from-yellow-500/20 to-yellow-600/10',
    accent: '#eab308',
  },
]

export const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
]

export const stats = [
  { value: '3+', label: 'AI Projects Built' },
  { value: '6+', label: 'Certifications' },
  { value: '7.0', label: 'CGPA' },
  { value: '15+', label: 'Technologies' },
]
