<template>
  <ul class="flex flex-row flex-wrap">
    <li
      v-for="member in members"
      :key="member.name"
      class="mr-4 mb-4 text-xs bg-gray-100 rounded-full overflow-hidden leading-tight hover:shadow-lg hover:bg-secondary transition ease-in duration-200"
      
    >
      <a :href="member.email ? `mailto: ${member.email}` : member.contact_url" class="relative overflow-hidden">
        <div
          class="w-full h-full flex justify-center items-center text-center p-1 z-10"
        >{{ member.name }}</div>
        <div class="top-0 left-0 z-20 w-full h-full absolute bg-cover" :style="`background-image: url(/memberPhotos/${member.photo})`"/>
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    names: Array
  },
  data() {
    return {
      members: []
    }
  },
  async mounted() {
    this.members = await this.fetchMembers()
  },
  methods: {
    async fetchMembers() {
      const { names } = this
      return this.$content('members')
        .where({ name: { $in: names } })
        .only(['name', 'photo', 'email', 'contact_url'])
        .fetch()
    }
  }
}
</script>

<style scoped lang="postcss">
li div {
  width: 70px;
  height: 70px;
}
</style>