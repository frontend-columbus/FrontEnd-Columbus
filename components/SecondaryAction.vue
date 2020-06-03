<template functional>
  <component
    :is="props.to ? 'nuxt-link' : 'a'"
    :to="props.to"
    :href="props.href"
    :class="`${props.full ? 'block' : 'inline-block'} text-center group relative text-primary border-primary border-2 font-bold text-lg px-10 py-2 cursor-pointer transition ease-in duration-200 hover:text-white`"
  >
    <div class="z-10 h-0 group-hover:h-full w-full bottom-0 left-0 absolute bg-primary transition-height ease-in duration-100" />
    <div class="z-20 relative flex justify-center items-center flex-row w-full">
      <slot />
    </div>
  </component>
</template>