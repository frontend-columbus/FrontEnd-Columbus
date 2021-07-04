
export default {
  target: 'static',
  /*
  ** Headers of the page
  */
  generate: {
    routes: ['/events/2020-05-21', '/events/2020-06-25', '/events/2020-07-30', '/events/2020-08-13', '/events/2020-08-27', '/events/2021-02-25', 'events/2021-08-08']
  },
  head: {
    title: 'Front End Columbus',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Columbus based Front End development community, meetup and more.' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:url', property: 'og:url', content: 'https://frontendcolumbus.com' },
      { hid: 'og:title', property: 'og:title', content: 'Front End Columbus' },
      { hid: 'og:description', property: 'og:description', content: 'Columbus based Front End development community, meetup and more.' },
      { hid: 'og:image', property: 'og:image', content: 'https://frontendcolumbus.com/metaimage.png' },
      { hid: 'twitter:card', property: 'twitter:card', content: 'summary_large_image' },
      { hid: 'twitter:url', property: 'twitter:url', content: 'https://frontendcolumbus.com' },
      { hid: 'twitter:title', property: 'twitter:title', content: 'Front End Columbus' },
      { hid: 'twitter:description', property: 'twitter:description', content: 'Columbus based Front End development community, meetup and more.' },
      { hid: 'twitter:image', property: 'twitter:image', content: 'https://frontendcolumbus.com/metaimage.png' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxt/content'
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    babel: {
      presets({ isServer }) {
        return [
          [
            require.resolve('@nuxt/babel-preset-app'),
            // require.resolve('@nuxt/babel-preset-app-edge'), // For nuxt-edge users
            {
              buildTarget: isServer ? 'server' : 'client',
              corejs: { version: 3 }
            }
          ]
        ]
      }
    },
    extend(config, ctx) {
    }
  }
}