<template>
  <div class="py-2 md:py-2">
    <section>
      <header class="pb-4">
        <h1 class="font-extrabold text-2xl">We're always looking for speakers!</h1>
      </header>
      <article class="max-w-2xl">
        <p
          class="text-lg font-medium leading-relaxed text-gray-600 tracking-wide pb-6"
        >Front End Columbus is a welcoming, no pressure community composed of front end developers, designers and tech enthusiasts around the county.</p>
        <p
          class="text-lg font-medium leading-relaxed text-gray-600 tracking-wide"
        >We accept talks of any skill level related to front end development or design. Not sure if your talk is a fit? Reach out to us anyway!</p>
        <div class="py-10">
          <form name="cfp" method="POST" data-netlify="true" class="max-w-lg">
            <p class="py-2">
              <label>
                <div
                  class="text-base font-extrabold uppercase tracking-wide pb-2"
                >Presentation length</div>
                <select
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
                  name="session_summary"
                  class="px-3 py-1 text-lg border border-gray-600 w-full"
                />
              </label>
            </p>
            <div class="py-2">
              <button
                class="font-semibold bg-primary text-white px-4 py-1 hover:shadow"
                type="submit"
              >Submit</button>
            </div>
          </form>
        </div>
      </article>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
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
  }
}
</script>
