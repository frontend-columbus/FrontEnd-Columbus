<template>
  <div class="py-2 md:py-2">
    <section>
      <header class="pb-4">
        <page-header>{{ content.title }}</page-header>
        <div class="flex flex-col md:flex-row py-6">
          <div class="my-2 md:my-0 md:mr-4">
          <secondary-action :full="true" to="/events">
            <span v-html="feather.icons['arrow-left-circle'].toSvg()" class="mr-2" />
            <span>Back to events</span>
          </secondary-action>
          </div>
          <div class="my-2 md:my-0 md:mx-4" v-if="content.rsvp">
            <primary-action :full="true" :href="content.rsvp">RSVP on MeetUp</primary-action>
          </div>
          <div class="my-2 md:my-0 md:mx-4" v-if="content.recording">
            <primary-action :full="true" :href="content.recording">View recording</primary-action>
          </div>
        </div>
      </header>
      <main>
        <paragraph>
          <nuxt-content :document="content" />
        </paragraph>
      </main>
    </section>
  </div>
</template>

<script>
import feather from 'feather-icons'
import { DateTime } from 'luxon'

import PageHeader from '~/components/PageHeader'
import PageHeader2 from '~/components/PageHeader2'
import Paragraph from '~/components/Paragraph'
import PrimaryAction from '~/components/PrimaryAction'
import SecondaryAction from '~/components/SecondaryAction'

export default {
  components: {
    PageHeader,
    PageHeader2,
    Paragraph,
    PrimaryAction,
    SecondaryAction
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
.nuxt-content hr {
  @apply my-6;
}
.nuxt-content li::before {
  content: '';
  border-radius: 100px;
  @apply bg-primary inline-block mr-3;
  height: 12px;
  width: 12px;
}
.nuxt-content li {
  @apply pl-2 py-3 block;
}
</style>
