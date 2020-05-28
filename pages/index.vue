<template>
  <div class="py-6 md:py-16">
    <header class="flex flex-col items-center">
      <!-- <logo /> -->
      <h1
        class="font-extrabold text-4xl md:text-5xl uppercase tracking-wider text-center"
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

export default {
  components: {
    Logo,
    CtaGrid
  }
}
</script>

<style lang="postcss" scoped>
h1 {
  background: linear-gradient(115deg, #BB5000 15%, #E8751F 60%);
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
