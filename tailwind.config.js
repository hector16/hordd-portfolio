const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Gill Sans']
    },
    colors: {
      ...colors,
      cyberPurple: {
        light: '#7a04eb',
        DEFAULT: '#120458'
      },
      cyberPink: {
        light: '#fe75fe',
        DEFAULT: '#ff00a0'
      },
      cyberRed: {
        DEFAULT: '#ff124f',
        dark: '#BF0233'
      },
      cyberGreen: {
        light: '#a0ffe3',
        DEFAULT: '#65dc98'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
