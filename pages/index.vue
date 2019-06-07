<template>
  <main class="max-w-xl mx-auto">
    <div class="flex flex-row">
      <section class="max-w-sm">
        <div class="text-center mb-8">
          <img
            src="logo.svg"
            alt="Front end columbus logo, two brackets with FE between them"
          />
        </div>
        <p class="leading-normal text-lg mb-8" style="color: #616161;">
          This group is primarily for front end developers with a passion for
          UX/UI, CSS/Sass, JavaScript, HTML and web browser based development.
        </p>
        <div class="flex flex-row">
          <a href="/" class="ghost ghost-red button button-primary">
            Present
          </a>
          <a href="/" class="button button-secondary">
            Sponsor
          </a>
        </div>
      </section>
    </div>
  </main>
</template>

<style scoped lang="postcss">
.button {
  @apply uppercase no-underline px-8 py-3 font-semibold text-xl relative mr-12;
  transition: all 0.2s;
}
.button-primary {
  @apply text-white;
  background: #ffb99b;
}
.button-secondary {
  @apply border-2;
  color: #ffb99b;
  border-color: #ffb99b;
}
.button-secondary:hover {
  @apply text-white;
  background: #ffb99b;
}
.ghost::before {
  @apply absolute pin-t pin-l ml-1 mt-1 w-full h-full;
  content: '';
  z-index: -1;
  transition: all 0.2s;
}
.ghost-red::before {
  background: #ffddcf;
}
.ghost:hover::before {
  transform: translateX(+2px) translateY(+2px);
}
</style>
