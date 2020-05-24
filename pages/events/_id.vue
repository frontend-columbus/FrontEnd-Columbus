<template>
  <div class="py-2 md:py-2">
    <div class="flex flex-row items-center max-w-full pb-4">
      <nuxt-link
        to="/events"
        class="font-semibold text-gray-700 py-1 mr-12 hover:text-primary flex flex-row items-center"
      >
        <span v-html="feather.icons['arrow-left'].toSvg()" class="mr-2" />
        Back
      </nuxt-link>
      <a
        v-if="content.recording"
        :href="content.recording"
        class="font-semibold border border-primary text-primary px-4 py-1 mr-4 hover:shadow"
      >Watch Recording</a>
      <a
        v-if="content.rsvp"
        :href="content.rsvp"
        class="font-semibold bg-primary text-white px-4 py-1 mr-4 hover:shadow"
      >RSVP</a>
    </div>
    <section class="max-w-3xl">
      <nuxt-content :document="content" />
    </section>
  </div>
</template>

<script>
import feather from 'feather-icons'

import { DateTime } from 'luxon'

export default {
  components: {
    Event
  },
  data() {
    return {
      feather
    }
  },
  async asyncData({ $content, params }) {
    const content = await $content(`events/${params.id}`).fetch()

    return { content }
  }
}
</script>

<style lang="postcss">
.nuxt-content h1 {
  @apply font-extrabold text-2xl py-4;
  background: linear-gradient(114.63deg, #ffb99b 47.46%, #ffccb6 76.87%);
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
.nuxt-content p {
  @apply text-lg font-medium leading-loose text-gray-600 ;
}
</style>
