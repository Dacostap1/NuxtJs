<template>
  <div>
    <h1>xd</h1>
    <Nuxt />
    <div>{{ content }}</div>
    <button class="button--grey" @click="refresh">Refresh</button>
  </div>
</template>
<script>
export default {
  layout: 'contact',
  asyncData({ params, $http }) {
    return { content: 'Created at: ' + new Date() }
  },
  mounted() {
    this.loadBar() // show load bar by 2 seconds
    window.onNuxtReady(() => {
      // Podemos agregar más scripts luego de que ya cargo
      console.log('Nuxt.js is ready and mounted')
    })
  },
  methods: {
    refresh() {
      this.$nuxt.refresh()
    },
    loadBar() {
      this.$nextTick(() => {
        this.$nuxt.$loading.start()
        setTimeout(() => this.$nuxt.$loading.finish(), 2000)
      })
    },
  },
}
</script>
