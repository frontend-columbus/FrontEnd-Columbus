<template>
  <div class="py-2 md:py-2">
    <section>
      <header class="pb-4">
        <h1 class="font-extrabold text-2xl">Events</h1>
      </header>
      <div>
        <article
          v-for="({title, datetime, summary, rsvp}) in events"
          :key="datetime"
          class="border border-gray-400 shadow-sm p-4 my-6"
        >
          <div class="flex flex-col md:flex-row pb-8 md:pb-0">
            <div class="py-2 md:py-2 px-16 flex flex-col justify-center items-center">
              <div class="font-semibold text-2xl">{{ datetime.toFormat('MMMM') }}</div>
              <div class="font-bold text-5xl leading-tight">{{ datetime.toFormat('W') }}</div>
            </div>
            <div class="text-center md:text-left flex-1">
              <div class="pb-1 max-w-md">
                <h3 class="font-semibold text-xl text-gray-700">{{ title }}</h3>
                <h4 class="text-base text-gray-500">Event starts at {{ datetime.toFormat('tt') }}</h4>
              </div>
              <div class="max-w-2xl">
                <p class="text-lg text-gray-700">{{ summary }}</p>
              </div>
              <div class="w-full flex flex-row justify-center items-center md:justify-end pt-8">
                <a :href="rsvp" class="mx-6 p-2 font-bold text-primary text-lg">RSVP</a>
                <nuxt-link
                  to="/"
                  class="mx-6 p-2 font-bold bg-primary text-white text-lg"
                >Learn More</nuxt-link>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import { DateTime } from 'luxon'

export default {
  components: {
    Logo
  },
  async asyncData({ $content }) {
    let events = await $content('events')
      .only(['title', 'datetime', 'summary', 'rsvp'])
      .fetch()

    events = events
      .map(event => {
        const datetime = new DateTime.fromString(event.datetime, 'y-M-d T')

        return {
          ...event,
          datetime
        }
      })
      .sort((a, b) => b.datetime - a.datetime)

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
