<template>
  <div class="py-2 md:py-2">
    <section>
      <header class="pb-4">
        <page-header>{{ content.title }}</page-header>
        <div class="flex flex-col md:flex-row py-6">
          <div class="my-2 md:my-0 md:mr-4">
            <secondary-action :full="true" to="/jobs">
              <span v-html="feather.icons['arrow-left-circle'].toSvg()" class="mr-2" />
              <span>Back to jobs</span>
            </secondary-action>
          </div>
          <div class="my-2 md:my-0 md:mx-4" v-if="content.apply_url">
            <primary-action :full="true" :href="content.apply_url">Apply to Job</primary-action>
          </div>
        </div>
        <div class="my-8 py-4 px-8 bg-primary h-full w-full relative" v-if="memberEmployees.length > 0">
          <span class="text-white block pb-6 font-bold text-xl max-w-md">Reach out to Front End Columbus members who work here:</span>
          <member-list :names="memberEmployees" />
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
import PageSubtext from '~/components/PageSubtext'
import Paragraph from '~/components/Paragraph'
import PrimaryAction from '~/components/PrimaryAction'
import SecondaryAction from '~/components/SecondaryAction'
import MemberList from '~/components/MemberList'

export default {
  components: {
    PageHeader,
    PageHeader2,
    PageSubtext,
    Paragraph,
    PrimaryAction,
    SecondaryAction,
    MemberList
  },
  data() {
    return {
      feather
    }
  },
  async asyncData({ $content, params }) {
    const content = await $content(`jobs/${params.id}`).fetch()

    return { content }
  },
  computed: {
    memberEmployees() {
      return this.content?.member_employees?.split(',') ?? []
    }
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
