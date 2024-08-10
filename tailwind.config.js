
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './resources/js/**/*.jsx',
    './resources/views/**/*.php',
  ],
  theme: {
    extend: {
      transitionProperty: {
        'height': 'height',
        'width': 'width',
      }
    },
  },
  plugins: [
    require('tailwindcss-animated'),
  ],
}

