/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#050A15',
          900: '#0A0F1E',
          800: '#0D1526',
          700: '#111B2E',
          600: '#162236',
        },
        indigo: {
          400: '#818CF8',
          500: '#6366F1',
          600: '#4F46E5',
          700: '#4338CA',
        },
        cyan: {
          400: '#22D3EE',
          500: '#06B6D4',
          600: '#0891B2',
        },
        slate: {
          300: '#CBD5E1',
          400: '#94A3B8',
          500: '#64748B',
          600: '#475569',
        }
      },
      fontFamily: {
        display: ['Space Grotesk', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'typing': 'typing 3.5s steps(40, end), blink 0.75s step-end infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(79, 70, 229, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(79, 70, 229, 0.6), 0 0 60px rgba(6, 182, 212, 0.2)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
      },
      backgroundImage: {
        'grid-pattern': "linear-gradient(rgba(79,70,229,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(79,70,229,0.05) 1px, transparent 1px)",
        'hero-gradient': 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(79,70,229,0.15) 0%, transparent 70%)',
        'card-gradient': 'linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%)',
      },
      backgroundSize: {
        'grid': '60px 60px',
      },
      boxShadow: {
        'glow-indigo': '0 0 30px rgba(79, 70, 229, 0.25)',
        'glow-cyan': '0 0 30px rgba(6, 182, 212, 0.25)',
        'card': '0 4px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.06)',
      }
    },
  },
  plugins: [],
}
