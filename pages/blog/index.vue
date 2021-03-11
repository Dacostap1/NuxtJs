<template>
  <div class="mt-4">
    <section>
      <div>
        <h1 class="text-4xl font-bold">Articles</h1>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-4">
          <ArticleCard
            v-for="article in products"
            :key="article.id"
            :article="article"
            image="https://images.unsplash.com/photo-1593642532744-d377ab507dc8?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2700&q=80"
          />
        </div>
      </div>
    </section>
    <div v-if="$auth.loggedIn">loageado</div>
    <div v-else>No loageado</div>
    <div class="bg-white mt-2 border-black w-30">
      <v-select
        :options="options"
        label="Selecciona algo"
        placeholder="Selecciona algo"
      />
    </div>
  </div>
</template>
<script>
export default {
  layout: 'nav',
  middleware: ['auth-admin'],

  meta: {
    permissions: ['read-blog'],
  },

  transition: 'fade',

  async asyncData({ $axios }) {
    const products = await $axios.$get('http://localhost:1337/blogs')
    return { products }
  },
  data() {
    return {
      options: ['foo', 'bar', 'baz'],
    }
  },
}
</script>
