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
      xs: '320px',
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
        textcolor: '#1B2A31',
        titlecolor: '#444',
        activecolor: '#045CB6',
        footercolor: '#243B68',
        bgsecondary: '#f2f9ff',
        newfooter: '#303849',
        bordercolor: '#dbdee5',
        gray: {
          ...colors.gray,
          bgg: '#F0F0F0'
        }
      },
      width: {
        '1/2': '50%'
      },
      maxWidth: {
        '3r': '3.6rem',
        '4r': '4.8rem',
        '3': '30rem',
        '4': '40rem',
        '5': '50rem',
        '7': '70rem',
        '8': '8rem',
        '10': '10rem',
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
      },
      inset: {
        '25': '25rem'
      }
    }
  },

  // variants: {},
  plugins: []
}
