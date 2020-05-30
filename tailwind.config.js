/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/
module.exports = {
  theme: {
    extend: {
      transitionProperty: {
        'height': 'height',
      },
      colors: {
        'primary-darker': '#2E2A3C',
        primary: '#5C5577',
        'primary-lighter': '#8F88AA',
        'primary-icon': '#655D83',
        secondary: '#E2F497',
      }
    }
  },
  variants: {
    height: ['responsive', 'hover', 'focus', 'group-hover'],
    textColor: ['responsive', 'hover', 'focus', 'group-hover'],
    visibility: ['responsive', 'hover', 'focus', 'group-hover'],
  },
  plugins: []
}
