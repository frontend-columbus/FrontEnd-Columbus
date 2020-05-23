<template>
  <div class="py-6 md:py-16">
    <header class="flex flex-col items-center">
      <!-- <logo /> -->
      <h1 class="font-extrabold text-4xl md:text-5xl uppercase tracking-wider text-center">Front End Columbus</h1>
      <div class="py-4">
        <p
          class="max-w-lg text-center text-lg font-medium leading-relaxed text-gray-600 tracking-wide"
        >Columbus based Front End development community, meetup and more.</p>
      </div>
    </header>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  }
}
</script>

<style scoped>
h1 {
  background: linear-gradient(114.63deg, #FFB99B 47.46%, #FFCCB6 76.87%);
  background-clip: text;
  -webkit-text-fill-color: transparent;

}
</style>
