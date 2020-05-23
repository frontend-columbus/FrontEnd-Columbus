<template>
  <div class="py-2 md:py-2">
    <section>
      <header class="pb-4">
        <h1 class="font-extrabold text-2xl">Events</h1>
      </header>
      <div>
        <article
          v-for="({title, datetime, summary}) in events"
          :key="datetime"
          class="border border-gray-400 shadow-sm p-4 my-6"
        >
          <div class="pb-2 max-w-md">
            <h3 class="font-semibold text-xl text-gray-700">{{ title }}</h3>
            <h4 class="text-base text-gray-500">{{ datetime }}</h4>
          </div>
          <div class="max-w-2xl">
            <p class="text-lg text-gray-700 leading-loose">{{ summary }}</p>
          </div>
        </article>
      </div>
    </section>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  },
  async asyncData({ $content }) {
    const events = await $content('events')
      .only(['title', 'datetime', 'summary'])
      .sortBy('datetime', 'desc')
      .fetch()

    return {
      events
    }
  }
}
</script>

<style scoped>
h1 {
  background: linear-gradient(114.63deg, #ffb99b 47.46%, #ffccb6 76.87%);
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
