<template>
  <article class="pt-6">
    <page-subtext>Posted {{ timeDiff }} days ago {{ memberEmployees.length > 0 ? ` | ${memberEmployees.length} member(s) work here` : ''}}</page-subtext>
    <page-header2>{{ title }}</page-header2>
    <ul class="flex flex-row pb-4 -mt-4">
      <li
        class="rounded bg-secondary text-black text-sm px-3 py-1 mr-3 font-bold"
        v-for="category in categories.split(',')"
        :key="category"
      >{{ category }}</li>
    </ul>
    <div class="flex flex-col md:flex-row py-6">
      <div class="my-2 md:my-0">
        <primary-action :full="true" :to="`/jobs/${slug}`">Read more</primary-action>
      </div>
      <div class="my-2 md:my-0 md:mx-4" v-if="apply_url">
        <secondary-action :full="true" :href="apply_url">Apply</secondary-action>
      </div>
    </div>
  </article>
</template>

<script>
import PageHeader2 from '~/components/PageHeader2.vue'
import PageSubtext from '~/components/PageSubtext'
import PrimaryAction from '~/components/PrimaryAction'
import SecondaryAction from '~/components/SecondaryAction'

import { DateTime } from 'luxon'

export default {
  components: {
    PageSubtext,
    PageHeader2,
    PrimaryAction,
    SecondaryAction
  },
  props: {
    title: String,
    slug: String,
    datetime: String,
    categories: String,
    apply_url: String,
    member_employees: String
  },
  computed: {
    timeDiff() {
      return Math.round(DateTime.local().diff(DateTime.fromFormat(this.datetime, 'y-M-d T'), ['days']).days)
    },
    memberEmployees() {
      return this.member_employees?.split(',') ?? []
    }
  }
}
</script>
