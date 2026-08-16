/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#0d9488',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace']
      },
      animation: {
        'page-in': 'pageIn 520ms ease both',
        'cursor-blink': 'blink 1s steps(2, start) infinite',
        'fade-in-up': 'fadeInUp 600ms ease both',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite'
      },
      keyframes: {
        pageIn: {
          from: {
            opacity: '0',
            transform: 'translateY(18px)'
          },
          to: {
            opacity: '1',
            transform: 'translateY(0)'
          }
        },
        blink: {
          '50%': {
            opacity: '0'
          }
        },
        fadeInUp: {
          from: {
            opacity: '0',
            transform: 'translateY(24px)'
          },
          to: {
            opacity: '1',
            transform: 'translateY(0)'
          }
        },
        glowPulse: {
          '0%, 100%': {
            opacity: '0.6'
          },
          '50%': {
            opacity: '1'
          }
        }
      }
    }
  },
  plugins: []
};
