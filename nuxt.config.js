
export default {
  mode: 'spa',
  /*
  ** Headers of the page
  */
  head: {
    title: 'Front End Columbus',
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
  generate: {
    async routes() {
      const { $content } = require('@nuxt/content')
      const files = await $content().only(['path']).fetch()

      return files.map(file => file.path === '/index' ? '/' : file.path)
    }
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
}
