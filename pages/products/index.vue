<template>
  <div class="container mx-auto">
    <h1>xd</h1>
    <br />
    <ul class="list-disc">
      <NuxtLink
        v-for="product in products"
        :key="product.id"
        :to="`/products/${product.id}`"
        id="product.id"
      >
        {{ product.content }}</NuxtLink
      >
    </ul>
    <br />
    <button class="button--grey" @click="refresh">Refresh</button>
  </div>
</template>
<script>
export default {
  async asyncData({ $axios }) {
    const products = await $axios.$get(
      'https://my-json-server.typicode.com/iosamuel/demo/products'
    )
    return { products }
  },
  mounted() {
    window.onNuxtReady(() => {
      // Podemos agregar más scripts luego de que ya cargo
      console.log('Nuxt.js is ready and mounted')
    })
  },
  methods: {
    refresh() {
      this.$nuxt.refresh()
    },
  },
}
</script>
