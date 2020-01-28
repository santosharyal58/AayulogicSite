/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */

const { colors } = require('tailwindcss/defaultTheme')
module.exports = {
  theme: {
    screens: {
      sm: '540px',
      md: '720px',
      lg: '960px',
      xl: '1140px'
    },
    extend: {
      // screens: {
      //   'xs': {'max': '639px'}
      // },
      colors: {
        textcolor: '#929292',
        titlecolor: '#444',
        activecolor: '#6173f4',
        footercolor: '#052950',
        gray: {
          ...colors.gray,
          bgg: '#F0F0F0'
        }
      },
      maxWidth: {
        '3': '30rem',
        '4': '40rem',
        '5': '50rem',
        '7': '70rem',
        '8': '8rem',
        '25': '25%',
        '50': '50%',
        '75': '75%',
        '100': '100%',
        mob: '54rem',
        fifteen: '15rem',
        quarter: '25rem',
        half: '50rem'
      },
      fontSize: {
        '1.6': '1.6rem',
        '7xl': '5rem'
      }
    }
  },

  // variants: {},
  plugins: []
}
