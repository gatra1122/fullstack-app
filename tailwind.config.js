const withMT = require("@material-tailwind/react/utils/withMT");
 module.exports = withMT({
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
});

