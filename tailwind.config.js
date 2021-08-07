const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      Rubik: ['sans-serif']
    },
    colors: {
      ...colors,
      primaryPurple: {
        light: '#7a04eb',
        DEFAULT: '#120458'
      },
      primaryPink: {
        light: '#fe75fe',
        DEFAULT: '#ff00a0'
      },
      primaryRed: {
        DEFAULT: '#ff124f',
        dark: '#BF0233'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
