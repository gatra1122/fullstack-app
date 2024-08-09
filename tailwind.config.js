
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './resources/js/**/*.jsx',
    './resources/views/**/*.php',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('tailwindcss-animated'),
  ],
}

