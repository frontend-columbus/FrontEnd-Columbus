<template>
  <div class="py-2">
    <section>
      <header class="pb-4 flex flex-row justify-between items-center">
        <page-header>Jobs</page-header>
        <p>
          <label>
            <select
              v-model="filter"
              class="px-3 py-1 text-lg border border-gray-600 capitalize"
            >
              <option value="all">All Categories</option>
              <option
                v-for="category in categories"
                :value="category"
                :key="category"
                >{{ category }}</option
              >
            </select>
          </label>
        </p>
      </header>
      <main>
        <div v-for="job in filteredResults" :key="job.slug">
          <job v-bind="job" />
          <hr />
        </div>
      </main>
    </section>
  </div>
</template>

<script>
import Job from '~/components/Job.vue'
import PageHeader from '~/components/PageHeader.vue'

import { DateTime } from 'luxon'

export default {
  components: {
    PageHeader,
    Job
  },
  data() {
    return {
      filter: 'all'
    }
  },
  async asyncData({ $content }) {
    let jobs = await $content('jobs')
      .only([
        'slug',
        'title',
        'datetime',
        'categories',
        'apply_url',
        'member_employees'
      ])
      .fetch()

    jobs.sort((a, b) => b.datetime - a.datetime)

    return {
      jobs
    }
  },
  computed: {
    categories() {
      return [
        ...new Set(
          this.jobs.reduce(
            (p, j) => (p = p.concat(j.categories.split(','))),
            []
          )
        )
      ]
    },
    filteredResults() {
      if (!this.jobs?.length) return []
      if (this.filter === 'all') return this.jobs
      else return this.jobs.filter(job => job.categories.includes(this.filter))
    }
  }
}
</script>
