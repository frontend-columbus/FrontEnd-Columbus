<template>
  <div class="py-2 md:py-2">
    <section>
      <header class="pb-4">
        <h1 class="font-extrabold text-2xl">Events</h1>
      </header>
      <div class="grid grid-cols-1 gap-6" style="grid-auto-rows: 1fr;">
        <event
          v-for="event in events"
          v-bind="event"
          :key="event.datetime.toString()"
        />
      </div>
    </section>
  </div>
</template>

<script>
import Event from "~/components/Event"

import { DateTime } from 'luxon'

export default {
  components: {
    Event
  },
  async asyncData({ $content }) {
    let events = await $content('events')
      .only(['slug', 'title', 'datetime', 'summary', 'rsvp', 'recording'])
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
  background: linear-gradient(114.63deg, #B56B45 47.46%, #C17E5C 76.87%);
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
