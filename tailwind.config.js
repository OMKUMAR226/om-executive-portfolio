/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx,ts,tsx,mdx}',
    './src/**/*.{js,jsx,ts,tsx,mdx}',
    './components/**/*.{js,jsx,ts,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'bg-primary': '#050508',
        'bg-secondary': '#0a0a12',
        'color-cyan': '#00D4FF',
        'color-violet': '#7C3AED',
        'color-orange': '#FF6B35',
        'color-green': '#00FF87',
        'text-primary': '#F1F5F9',
        'text-secondary': '#94A3B8',
      },
      fontFamily: {
        grotesk: ['Space Grotesk', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease forwards',
        'slide-up': 'slideUp 0.6s ease forwards',
        'slide-in-right': 'slideInRight 0.4s cubic-bezier(0.4,0,0.2,1) forwards',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'orbit-slow': 'orbit 12s linear infinite',
        'orbit-medium': 'orbit 8s linear infinite',
        'orbit-fast': 'orbit 5s linear infinite',
        'spin-slow': 'spin 20s linear infinite',
        'blink': 'blink 1s step-end infinite',
        'marquee': 'marquee 30s linear infinite',
        'marquee2': 'marquee2 30s linear infinite',
      },
      keyframes: {
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        slideUp: {
          from: { opacity: '0', transform: 'translateY(40px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        slideInRight: {
          from: { transform: 'translateX(100%)' },
          to: { transform: 'translateX(0)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(0,212,255,0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(0,212,255,0.6), 0 0 60px rgba(0,212,255,0.2)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        orbit: {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        marquee2: {
          '0%': { transform: 'translateX(50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
      boxShadow: {
        'glow-cyan': '0 0 30px rgba(0,212,255,0.2)',
        'glow-cyan-lg': '0 0 60px rgba(0,212,255,0.3)',
        'glow-violet': '0 0 30px rgba(124,58,237,0.2)',
        'glow-orange': '0 0 30px rgba(255,107,53,0.2)',
        'glow-green': '0 0 30px rgba(0,255,135,0.2)',
        'card': '0 4px 24px rgba(0,0,0,0.4)',
        'card-hover': '0 20px 40px rgba(0,212,255,0.1)',
      },
      backdropBlur: {
        xs: '2px',
      },
      backgroundImage: {
        'gradient-cyan-violet': 'linear-gradient(135deg, #00D4FF, #7C3AED)',
        'gradient-cyan-green': 'linear-gradient(135deg, #00D4FF, #00FF87)',
        'gradient-orange-violet': 'linear-gradient(135deg, #FF6B35, #7C3AED)',
        'radial-cyan': 'radial-gradient(circle at center, rgba(0,212,255,0.15) 0%, transparent 70%)',
        'radial-violet': 'radial-gradient(circle at center, rgba(124,58,237,0.15) 0%, transparent 70%)',
      },
    },
  },
  plugins: [],
};
