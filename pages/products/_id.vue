<template>
  <div>
    {{ product.content }}
  </div>
</template>
<script>
export default {
  props: ['id'],
  async asyncData({ $axios, params }) {
    console.log(params)
    const product = await $axios.$get(
      `https://my-json-server.typicode.com/iosamuel/demo/products/${params.id}`
    )
    return { product }
  },
}
</script>
