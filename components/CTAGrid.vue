<template>
  <div class="ctaGrid grid grid-cols-1 md:grid-cols-2 max-w-lg mx-auto gap-6 py-8">
    <nuxt-link
      :key="subheader"
      :to="link"
      v-for="{ header, subheader, link } in squares"
      class="bg-secondary relative ctaGrid--item group"
    >
      <div class="bg-primary h-0 bottom-0 group-hover:h-full absolute w-full transition-height ease-in duration-200" />
      <div class="px-6 py-8 h-full w-full relative">
        <span
          class="absolute top-0 right-0 pt-2 pr-2 text-primary-icon group-hover:text-white transition ease-in duration-500"
          v-html="feather.icons['arrow-right-circle'].toSvg({ 'stroke-width': '1px', width: '35px', height: '35px'})"
        />
        <div :class="`h-full flex flex-col ${!header && 'justify-center'}`">
          <span
            v-if="header"
            class="h-20 font-bold text-5xl text-primary group-hover:text-white transition ease-in duration-300 text-left block"
          >{{ header }}</span>
          <span v-if="subheader" class="text-2xl text-primary group-hover:text-white transition ease-in duration-300 text-left block">{{ subheader }}</span>
        </div>
      </div>
    </nuxt-link>
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
        // {
        //   header: '-',
        //   subheader: 'community job postings',
        //   link: '/jobs'
        // },
        {
          header: '12',
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
    // this.setJobPostingsCount()
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
