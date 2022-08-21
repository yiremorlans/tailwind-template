/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ 
    'index.html',
    'main.js'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/img/wavehead.svg')",
        'footer-texture': "url('/img/waveft.svg')",
      },
      colors : {
        'theme': '#ff5500',
      },
      fontFamily: {
        'Glegoo': ["'Glegoo'", 'serif'],
        'Marcellus': ["'Marcellus'", 'serif']
      }
    },
  },
  plugins: [],
}
