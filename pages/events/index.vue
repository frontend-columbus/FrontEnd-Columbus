<template>
  <div class="py-2 md:py-2">
    <section>
      <header class="pb-4">
        <page-header>Events</page-header>
      </header>
      <main>
        <div v-for="event in events" :key="event.datetime.toString()">
          <event v-bind="event" />
          <hr />
        </div>
      </main>
    </section>
  </div>
</template>

<script>
import { DateTime } from 'luxon'

import Event from '~/components/Event.vue'
import PageHeader from '~/components/PageHeader.vue'

export default {
  components: {
    Event,
    PageHeader
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
