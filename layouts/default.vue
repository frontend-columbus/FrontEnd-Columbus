<template>
  <div class="max-w-5xl px-12 mx-auto">
    <nav class="w-full justify-start items-center flex flex-col md:flex-row py-6">
      <logo width="80" />
      <ul class="flex flex-row px-10 overflow-x-auto">
        <li
          v-for="link in navigation"
          :key="link"
          :class="`text-lg pb-1 font-semibold text-gray-700 hover:text-primary px-4 lowercase  ${isCurrent(link.view) && 'border-b-2 border-primary text-primary'}`"
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
      title: 'Front End Columbus'
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
