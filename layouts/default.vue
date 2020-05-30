<template>
  <div class="w-full md:max-w-5xl px-6 md:px-12 mx-auto">
    <nav class="w-full justify-start items-center flex flex-col md:flex-row py-6">
      <logo width="80" />
      <ul class="flex flex-row px-10 max-w-full overflow-x-auto">
        <li
          v-for="link in navigation"
          :key="link"
          style="white-space: nowrap;"
          :class="`group relative inline-block whitespace-no-wrap text-base pb-1 text-primary-darker hover:text-primary mx-4 lowercase  ${isCurrent(link.view) && 'font-bold'}`"
        >
          <div :class="`${!isCurrent(link.view) && 'invisible'} group-hover:visible absolute w-full h-2 bottom-0 mb-1 z-10 bg-secondary`"/>
          <nuxt-link :to="link.href" class="z-20 relative">{{ link.label }}</nuxt-link>
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
