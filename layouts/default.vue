<template>
  <div class="w-full md:max-w-5xl px-6 md:px-12 mx-auto">
    <nav class="w-full justify-start items-center flex flex-col md:flex-row py-6">
      <logo width="80" />
      <ul class="flex flex-row px-10 max-w-full overflow-x-auto">
        <li
          v-for="link in navigation"
          :key="link"
          style="white-space: nowrap;"
          :class="`inline-block whitespace-no-wrap text-lg pb-1 font-semibold text-gray-700 hover:text-primary mx-4 lowercase  ${isCurrent(link.view) && 'md:border-b-2 md:border-primary text-primary'}`"
        >
          <nuxt-link :to="link.href">{{ link.label }}</nuxt-link>
        </li>
      </ul>
    </nav>
    <nuxt />
  </div>
</template>

<script>
import Logo from '~/components/Logo'

export default {
  components: {
    Logo
  },
  data() {
    return {
      navigation: [
        {
          label: 'home',
          href: '/',
          view: 'index'
        },
        {
          label: 'events',
          href: '/events',
          view: ['events', 'events-id']
        },
        {
          label: 'community',
          href: '/community',
          view: 'community'
        },
        {
          label: 'want to speak?',
          href: '/cfp',
          view: 'cfp'
        }
      ]
    }
  },
  head() {
    return {
      title: 'Front End Columbus',
        meta: [
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
      ]
    }
  },
  methods: {
    isCurrent(view) {
      const currentView = this.$nuxt.$route.name

      if (typeof view === 'string') return view === currentView
      else return view.includes(currentView)
    }
  }
}
</script>

<style>
</style>
