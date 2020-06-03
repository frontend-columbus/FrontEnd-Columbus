<template>
  <div class="py-2 md:py-2">
    <section>
      <header class="pb-4">
        <page-header>We're always looking for speakers!</page-header>
      </header>
      <main class="max-w-2xl">
        <paragraph>Front End Columbus is a welcoming, no pressure community composed of front end developers, designers and tech enthusiasts around the county.</paragraph>
        <paragraph>We accept talks of any skill level related to front end development or design. Not sure if your talk is a fit? Reach out to us anyway!</paragraph>
        <div class="py-10">
          <form @submit.prevent="onSubmit" class="max-w-lg">
            <p class="py-2">
              <label>
                <div class="text-base font-extrabold uppercase tracking-wide pb-2">Your name</div>
                <input
                  v-model="name"
                  type="text"
                  name="name"
                  class="px-3 py-1 text-lg border border-gray-600 w-full"
                />
              </label>
            </p>
            <p class="py-2">
              <label>
                <div class="text-base font-extrabold uppercase tracking-wide pb-2">Your email</div>
                <input
                  v-model="email"
                  type="email"
                  name="email"
                  class="px-3 py-1 text-lg border border-gray-600 w-full"
                />
              </label>
            </p>
            <p class="py-2">
              <label>
                <div
                  class="text-base font-extrabold uppercase tracking-wide pb-2"
                >Presentation length</div>
                <select
                  v-model="session_length"
                  name="session_length"
                  class="px-3 py-1 text-lg border border-gray-600 w-full"
                  :options="lengthOptions"
                >
                  <option
                    v-for="{value, label} in lengthOptions"
                    :key="value"
                    :value="value"
                  >{{ label }}</option>
                </select>
              </label>
            </p>
            <p class="py-2">
              <label>
                <div class="text-base font-extrabold uppercase tracking-wide pb-2">Title</div>
                <input
                  v-model="session_title"
                  type="text"
                  name="session_title"
                  class="px-3 py-1 text-lg border border-gray-600 w-full"
                />
              </label>
            </p>
            <p class="py-2">
              <label>
                <div class="text-base font-extrabold uppercase tracking-wide pb-2">Summary</div>
                <textarea
                  v-model="session_summary"
                  name="session_summary"
                  class="px-3 py-1 text-lg border border-gray-600 w-full"
                />
              </label>
            </p>
            <div class="py-2">
              <primary-action type="submit">Submit</primary-action>
            </div>
          </form>
        </div>
      </main>
    </section>
  </div>
</template>

<script>
import Paragraph from '~/components/Paragraph'
import PageHeader from '~/components/PageHeader'
import PrimaryAction from '~/components/PrimaryAction'

export default {
  components: {
    Paragraph,
    PageHeader,
    PrimaryAction
  },
  data() {
    return {
      name: '',
      email: '',
      session_length: 'unknown',
      session_title: '',
      session_summary: '',
      lengthOptions: [
        {
          value: 'unknown',
          label: 'Not sure yet'
        },
        {
          value: 'short',
          label: 'Short - 10 minutes'
        },
        {
          value: 'medium',
          label: 'Medium - 30 minutes'
        },
        {
          value: 'long',
          label: 'Long - 60 minutes'
        },
        {
          value: 'workshop',
          label: 'Workshop - 2+ hours'
        }
      ]
    }
  },
  methods: {
    async onSubmit() {
      const {
        name,
        email,
        session_length,
        session_title,
        session_summary
      } = this

      await fetch('/.netlify/functions/submitCFP', {
        method: 'POST',
        body: JSON.stringify({
          name,
          email,
          session_length,
          session_title,
          session_summary
        })
      })

      alert('Thanks for your submission! We will reach out to you shortly.')
    }
  }
}
</script>
