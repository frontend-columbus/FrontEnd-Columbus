<template>
  <div class="py-2 md:py-2">
    <section>
      <header>
        <page-header>Join our Discord Community</page-header>
      </header>
      <main>
        <PrimaryAction href="https://discord.gg/GCmCgcM">Join the Discord Channel</PrimaryAction>
        <div class="w-full flex flex-row justify-center items-center py-12">
          <iframe
            src="https://discordapp.com/widget?id=714103890093801512&theme=dark"
            height="500"
            allowtransparency="true"
            frameborder="0"
            title="Discord Widget"
          ></iframe>
        </div>
      </main>
    </section>
  </div>
</template>

<script>
import PageHeader from '~/components/PageHeader.vue'
import PrimaryAction from '~/components/PrimaryAction.vue'

export default {
  components: {
    PrimaryAction,
    PageHeader
  }
}
</script>

<style lang="postcss">
iframe {
  width: 100%;
}
</style>
