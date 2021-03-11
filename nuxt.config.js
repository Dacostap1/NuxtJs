export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  loading: {
    color: 'DodgerBlue',
    height: '10px',
    continuous: true,
    duration: 3000,
  },

  pageTransition: {
    name: 'page',
    mode: 'out-in',
    beforeEnter(el) {
      console.log('Before enter page...')
    },
  },

  layoutTransition: {
    name: 'layout',
    mode: 'out-in',
    beforeEnter(el) {
      console.log('Before enter layout...')
    },
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'my-first-nuxt',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'mi primer blog' }, //Importante SEO
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['~/plugins/seo.js'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: {
    dirs: [
      '~/components',
      '~/components/ui',
      '~/components/layout',
      '~/components/app',
    ],
  },

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/auth-next',
    '@nuxt/content',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    ['@nuxtjs/markdownit', { html: true, injected: true }],
    '@nuxtjs/sitemap',
    'nuxt-vue-select',
  ],

  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: 'tailwind.config.js',
    exposeConfig: false,
    config: {},
  },

  sitemap: {
    hostname: process.env.HOST_NAME,
    routes: [], // all the dynamic routes
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    credentials: true,
  },

  auth: {
    scopeKey: 'user.permissions',
    strategies: {
      laravelSanctum: {
        provider: 'laravel/sanctum',
        url: 'http://localhost:8000',
        endpoints: {
          login: { url: '/login' },
        },
      },
    },
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
