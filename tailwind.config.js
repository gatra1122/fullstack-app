
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './resources/js/**/*.jsx',
    './resources/views/**/*.php',
  ],
  theme: {
    extend: {
      colors: {
        'custom-yellow':'#BAA333',
      }
    },
  },
  plugins: [
    require('tailwindcss-animated'),
  ],
}

