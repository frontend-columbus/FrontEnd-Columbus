<template>
  <div class="ctaGrid grid grid-cols-1 md:grid-cols-2 max-w-lg mx-auto gap-6 py-8">
    <div
      class="border-4 justify-center border-gray-500 py-2 px-6 shadow relative flex justify-center items-center flex-col cursor-pointer ease-in transition duration-200 hover:shadow-lg"
      v-for="{ header, subheader, link} in squares"
      :key="subheader"
    >
      <nuxt-link :to="link">
        <div
          class="absolute top-0 right-0 pt-2 pr-2 text-primary"
          v-html="feather.icons['arrow-right'].toSvg({ 'stroke-width': '4px', width: '30px', height: '30px'})"
        />
        <h3 class="font-extrabold text-6xl text-gray-800" v-if="header">{{ header }}</h3>
        <h4 class="text-xl font-extrabold uppercase text-gray-700" v-if="subheader">{{ subheader }}</h4>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import feather from 'feather-icons'
import { DateTime } from 'luxon'

export default {
  data() {
    return {
      feather,
      squares: [
        {
          header: '-',
          subheader: 'upcoming events',
          link: '/events'
        },
        {
          header: '-',
          subheader: 'community job postings',
          link: '/jobs'
        },
        {
          header: '4',
          subheader: 'members in discord',
          link: '/community'
        },
        {
          subheader: "we're looking for speakers!",
          link: '/cfp'
        }
      ]
    }
  },
  mounted() {
    this.setEventsCount()
    this.setJobPostingsCount()
  },
  methods: {
    async setEventsCount() {
      const events = await this.$content('events').fetch()
      const eventsCount = events.filter(event => {
        const dateTime = new DateTime.fromString(event.datetime, 'y-M-d T')
        return dateTime > new DateTime.local()
      }).length

      this.squares[0].header = events.length > 0 ? eventsCount : 0
    },
    async setJobPostingsCount() {
      const jobPostings = await this.$content('jobs').fetch()

      this.squares[1].header = jobPostings.length > 0 ? jobPostings.length : 0
    }
  }
}
</script>

<style lang="postcss">
.ctaGrid {
  grid-auto-rows: 1fr;
}
</style>
