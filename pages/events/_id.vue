<template>
  <div class="py-2 md:py-2">
    <div class="flex flex-col md:flex-row items-center max-w-full pb-4">
      <nuxt-link
        to="/events"
        class="font-semibold text-gray-700 py-1 md:mr-12 hover:text-primary flex flex-row items-center my-2 md:my-0"
      >
        <span v-html="feather.icons['arrow-left'].toSvg()" class="mr-2" />
        Back
      </nuxt-link>
      <a
        v-if="content.recording"
        :href="content.recording"
        class="font-semibold border border-primary text-primary px-4 py-1 md:mr-4 hover:shadow my-2 md:my-0"
      >Watch Recording</a>
      <a
        v-if="content.rsvp"
        :href="content.rsvp"
        class="font-semibold bg-primary text-white px-4 py-1 md:mr-4 hover:shadow my-2 md:my-0"
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
  @apply font-extrabold text-2xl py-4 text-gray-800;
}
.nuxt-content p {
  @apply text-base font-medium leading-relaxed text-gray-700 my-1;
}
.nuxt-content hr {
  @apply my-6;
}
</style>
