<template>
  <div class="py-6 md:py-16">
    <header class="flex flex-col items-center">
      <!-- <logo /> -->
      <h1
        class="font-extrabold text-4xl md:text-5xl uppercase tracking-wider text-center"
        :style="{
          background: `linear-gradient(140deg, ${colors.primary} 0%, ${colors['primary-lighter']} 100%)`
        }"
      >
        Front End Columbus
      </h1>
      <div class="max-w-lg text-center">
        <Paragraph
          >Columbus based Front End development community, meetup and
          more.</Paragraph
        >
      </div>
    </header>
    <main class="py-8">
      <cta-grid />
    </main>
  </div>
</template>

<script>
import { theme } from '~/tailwind.config.js'

import Logo from '~/components/Logo.vue'
import CtaGrid from '~/components/CTAGrid.vue'
import Paragraph from '~/components/Paragraph.vue'

export default {
  components: {
    Logo,
    CtaGrid,
    Paragraph
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
