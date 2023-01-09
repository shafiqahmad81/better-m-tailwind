/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    minHeight: {
      'screen': '100vh'
    },
    extend: {
      backgroundImage: {
        'background-ing': "url('/assets/img/background.png')",
      },
      width: {
        'left': '43.793%',
        'right': 'calc(100% - 43.793%)',
      }
    },
  },
  plugins: [
    plugin(function({ addUtilities, addComponents, e, config }) {
      // Add your custom styles here
    }),
  ],
}
