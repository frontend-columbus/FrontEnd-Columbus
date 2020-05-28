<template>
  <div class="py-2 md:py-2">
    <section>
      <header class="pb-4">
        <h1
          class="font-extrabold text-2xl max-w-lg"
        >We're on Discord!</h1>
      </header>
      <div class="py-2">
        <a
          href="https://discord.gg/GCmCgcM"
          class="font-semibold border border-primary text-primary px-4 py-1 hover:shadow"
          :to="`/events/${slug}`"
        >Join the Discord Channel</a>
      </div>
      <div class="w-full flex flex-row justify-center items-center py-12">
        <iframe
          src="https://discordapp.com/widget?id=714103890093801512&theme=dark"
          height="500"
          allowtransparency="true"
          frameborder="0"
        ></iframe>
      </div>
    </section>
  </div>
</template>

<style lang="postcss">
h1 {
  background: linear-gradient(114.63deg, #B56B45 47.46%, #C17E5C 76.87%);
  background-clip: text;
  display: inline;
  -webkit-text-fill-color: transparent;
}

iframe {
  width: 100%;
}
</style>
