const { theme } = require('tailwindcss/defaultConfig')

module.exports = {
  purge: [],
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        main: theme.colors.gray['500'], // #38b2ac
        chat: '#1a202c',
        'msm-sent': '#2D3748',
        'msm-received': '#2b6cb0',
      },
    },
  },
  variants: {
    extend: {
      width: ['hover'],
      display: ['group-hover'],
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
