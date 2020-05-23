<template>
  <div class="container px-12 mx-auto">
    <nav class="w-full justify-start items-center flex flex-col md:flex-row py-6">
      <logo width="80" />
      <ul class="flex flex-row px-10 overflow-x-auto">
        <li v-for="link in navigation" :key="link" class="text-lg font-semibold text-gray-700 hover:text-primary px-4 lowercase">
          <nuxt-link to="link.href">
            {{ link.label }}
          </nuxt-link>
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
  data () {
    return {
      navigation: [
        {
          label: 'home',
          href: '/'
        },
        {
          label: 'events',
          href: '/events'
        }
      ]
    }
  }
}
</script>

<style>
</style>
