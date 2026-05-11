/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      animation: {
        'page-in': 'pageIn 520ms ease both',
        'cursor-blink': 'blink 1s steps(2, start) infinite'
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
        }
      }
    }
  },
  plugins: []
};
