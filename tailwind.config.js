/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./types/ui.config/**/*.{js,ts}"
  ],
  theme: {
    extend: {
      colors: {
        cabaret: {
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
      }
    },
  },
  plugins: [],
}

