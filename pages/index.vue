<template>
  <div class="py-6 md:py-16">
    <header class="flex flex-col items-center">
      <!-- <logo /> -->
      <h1
        class="font-extrabold text-4xl md:text-5xl uppercase tracking-wider text-center"
        :style="{ background: `linear-gradient(115deg, ${colors.primary} 15%, ${colors.primaryIcon} 60%)` }"
      >Front End Columbus</h1>
      <div class="py-4">
        <p
          class="max-w-lg text-center text-lg font-medium leading-relaxed text-gray-700 tracking-wide"
        >Columbus based Front End development community, meetup and more.</p>
      </div>
    </header>
    <main class="py-8">
      <cta-grid />
    </main>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import CtaGrid from '~/components/CTAGrid.vue'
import { theme } from '~/tailwind.config.js'

export default {
  components: {
    Logo,
    CtaGrid
  },
  data() {
    return {
      colors: theme.extend.colors
    }
  }
}
</script>

<style lang="postcss" scoped>
h1 {
  background-clip: text !important;
  -webkit-text-fill-color: transparent;
}
</style>
