<template>
  <article class="border border-gray-400 shadow-sm p-6 flex flex-row">
    <div class="w-2/3 flex flex-col justify-center">
      <div class="font-semibold text-blue-900 text-base">{{ datetime.toFormat('FF') }}</div>
      <h3 class="text-xl font-extrabold tracking-wide uppercase pb-2 text-gray-900">{{ title }}</h3>
      <p class="max-w-lg text-base font-medium leading-relaxed text-gray-600 tracking-wide">{{ summary }}</p>
    </div>
    <div class="flex flex-col justify-center items-end flex-1">
      <a v-if="isUpcoming" href="#" class="font-semibold border border-primary text-primary px-4 py-1 m-2 hover:shadow">RSVP</a>
      <a v-if="recording && !isUpcoming" :href="recording" class="font-semibold border border-primary text-primary px-4 py-1 m-2 hover:shadow">Watch Recording</a>
      <nuxt-link
        href="#"
        class="font-semibold bg-primary text-white px-4 py-1 m-2 hover:shadow"
        :to="`/events/${slug}`"
      >Learn More</nuxt-link>
    </div>
  </article>
</template>

<script>
import { DateTime } from 'luxon'

export default {
  props: {
    title: String,
    datetime: Object,
    summary: String,
    rsvp: String,
    recording: String,
    slug: String
  },
  computed: {
    isUpcoming() {
      const now = DateTime.local()
      return this.datetime > now
    }
  }
}
</script>

<style lang="postcss">
</style>
