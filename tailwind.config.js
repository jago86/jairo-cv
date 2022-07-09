/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '10rem',
      },
    },
    extend: {
      fontFamily: {
        'sans': ['Barlow', ...defaultTheme.fontFamily.sans],
        'serif': ['Roboto Mono', ...defaultTheme.fontFamily.serif],
      },
    },
  },
  plugins: [],
}
