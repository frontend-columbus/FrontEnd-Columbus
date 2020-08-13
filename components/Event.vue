<template>
  <article class="pt-6">
    <page-subtext>{{ datetime.toFormat("ff") }}</page-subtext>
    <page-header2>{{ title }}</page-header2>
    <paragraph>{{ summary }}</paragraph>
    <div class="flex flex-col md:flex-row py-6">
      <div class="my-2 md:my-0">
        <primary-action :full="true" :to="`/events/${slug}`">Read more</primary-action>
      </div>
      <div class="my-2 md:my-0 md:mx-4" v-if="rsvp">
        <secondary-action :full="true" :href="rsvp">RSVP on MeetUp</secondary-action>
      </div>
      <div class="my-2 md:my-0 md:mx-4" v-if="recording">
        <secondary-action :full="true" :href="recording">View recording</secondary-action>
      </div>
    </div>
  </article>
</template>

<script>
import { DateTime } from 'luxon'

import Paragraph from '~/components/Paragraph.vue'
import PageHeader2 from '~/components/PageHeader2.vue'
import PageSubtext from '~/components/PageSubtext.vue'
import PrimaryAction from '~/components/PrimaryAction.vue'
import SecondaryAction from '~/components/SecondaryAction.vue'

export default {
  components: {
    Paragraph,
    PageHeader2,
    PageSubtext,
    PrimaryAction,
    SecondaryAction
  },
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
