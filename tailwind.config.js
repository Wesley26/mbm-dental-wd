module.exports = {
  purge: {
    enabled: false,
      content: [ './src/**/*.js' ],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'navColor': '#cccccc',
      },
      fontFamily: {
        'navFontFamily': ['Times-New-Roman', 'system-ui'],
      },
      fontSize: {
        'navText': '2.5rem',
      },
      spacing: {
        'navWidthSpace': '18rem',
        'navHeightLogo-Desktop': '20rem',
        'navWidthLogo-Desktop': '23rem',
        'navHeightLogo-Mobile': '28rem',
        'navWidthLogo-Mobile': '32rem',
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
      scale: ['hover', 'active'],
      transform: ['hover', 'focus', 'active'],
    },
  },
  plugins: [],
}
