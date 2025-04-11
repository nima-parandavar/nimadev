/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./ui/**/*.{js,ts}"
  ],
  theme: {
    extend: {
      colors: {
        'white': '#fdfaf6',
        'black': '#45474b',
        'cabaret': {
          400: '#d14d72',
          300: '#ffabab',
          200: '#fcc8d1',
          100: '#fef2f4'
        },
        'vivid-violet': {
          400: '#86469c',
          300: '#bc7fcd',
          200: '#fb9ad1',
          100: '#ffcdea'
        },
        'curious-blue': {
          400: '#008dda',
          300: '#41c9e2',
          200: '#ace2e1',
          100: '#f7eedd'
        },
        'keppel': {
          400: '#55ad9b',
          300: '#95d2b3',
          200: '#d8efd3',
          100: '#f1f8e8'
        },
        'bombay': {
          400: '#b4b4b8',
          300: '#c7c8cc',
          200: '#e3e1d9',
          100: '#f2efe5'
        },
        'pumpkin': {
          400: '#ff7d29',
          300: '#ffbf78',
          200: '#ffeea9',
          100: '#feffd2'
        },
        'mako': {
          400: '#41444B',
          300: '#52575D',
          200: '#CABFAB',
          100: '#DFD8C8'
        }
      },
      keyframes: {
        overlayShow: {
          from: { opacity: 0 },
          to: { opacity: 1 }
        },
        contentCenter: {
          from: { transform: 'translate(-50%, -50%) scale(0.8)', opacity: 0 },
          to: { transform: 'translate(-50%, -50%) scale(1)', opacity: 1 }
        },
        contentBottom: {
          from: { transform: 'translate(-50%, 100%)', opacity: 0 },
          to: { transform: 'translate(-50%, 0)', opacity: 1 }
        },
        contentLeft: {
          from: { transform: 'translateX(-100%)', opacity: 0 },
          to: { transform: 'translateX(0%)', opacity: 1 }
        },
        contentRight: {
          from: { transform: 'translateX(100px)', opacity: 0 },
          to: { transform: 'translateX(0px)', opacity: 1 }
        }
      },
      animation: {
        overlayShow: 'overlayShow 500ms cubic-bezier(0.16, 1, 0.3, 1)',
        dialogCenterContent: 'contentCenter 500ms cubic-bezier(0.16, 1, 0.3, 1)',
        dialogCenterBottom: 'contentBottom 500ms cubic-bezier(0.16, 1, 0.3, 1)',
        dialogCenterLeft: 'contentLeft 500ms cubic-bezier(0.16, 1, 0.3, 1)',
        dialogCenterRight: 'contentRight 500ms cubic-bezier(0.16, 1, 0.3, 1)',
      }
    },
  },
  plugins: [],
}

