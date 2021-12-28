const colors = require('tailwindcss/colors')


module.exports = {
  purge: ['./components/**/*.js', './pages/**/*.js'],

  variants: {
    // The 'active' variant will be generated in addition to the defaults
    extend: {
    }
  },

  theme: {
    extend: {
      colors: {
        brand: {
          ...colors.indigo
        },

        secondary: {
          ...colors.slate
        },

        
      },

      gridTemplateColumns: {
        // Simple 16 column grid
        '18': 'repeat(18, minmax(0, 1fr))',
        '36': 'repeat(36, minmax(0, 1fr))',
      }, 
      
      fontFamily: {
        anbanisans: ['Anbani Noto Sans', 'sans-serif'],
        anbaniserif: ['Anbani Noto Serif', 'serif'],
        relish: ['Relish Pro', 'sans-serif'],
        relishlight: ['Relish Pro Light', 'sans-serif'],
        sans:  ['Relish Pro', 'sans-serif'],
      },

    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    // ...
  ],
}
