const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      maxWidth: {
        'xs-0': '11.25rem'
      },
      colors: {
        'sourceable-orange': '#ee9900',
        'sourceable-blue': '#1e90ff'
      },
      screen: {
        'xs': '375px',
        ...defaultTheme.screens,
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}

//#ee9900
//#1e90ff