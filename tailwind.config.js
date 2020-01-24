/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */

const { colors } = require('tailwindcss/defaultTheme')
module.exports = {
  theme: {
    extend: {
      colors: {
        textcolor: '#929292',
        titlecolor: '#444',
        activecolor: '#6173f4',
        footercolor:'#052950',
        gray: {
          ...colors.gray,
          bgg: '#F0F0F0'
        }
      },
      maxWidth: {
        '3': '30rem',
        '4': '40rem',
        '5': '50rem',
        '8': '8rem',
        '25': '25%',
        '50': '50%',
        '75': '75%',
        '100': '100%',
        quarter: '25rem',
        half: '50rem'
      },
      fontSize: {
        '1.6': '1.6rem'
      }
    }

    // screens: {
    //   xl: '1280px',
    //   lg: '1024px',
    //   md: '768px',
    //   xs: '575px'
    // }
  },

  // variants: {},
  plugins: []
}
