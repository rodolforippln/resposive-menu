
  // tailwind.config.js
  module.exports = {    
    mode: 'jit',
    purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
     darkMode: false, // or 'media' or 'class'
     theme: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
       extend: {},
     },

     variants: {
       extend: {},
     },
     plugins: [],
   }
