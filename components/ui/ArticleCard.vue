<template>
  <div class="container">
    <div class="bg-white rounded overflow-hidden shadow-md">
      <nuxt-link
        class="block text-gray-800 rounded-lg shadow-lg p-6"
        :to="`/blog/${article.id}`"
      >
        <header class="text-2xl font-bold">{{ article.title }}</header>
        <p class="mt-4">
          {{ article.content }}
        </p>
        <footer class="flex items-center mt-6">
          <img
            class="w-20 rounded-full border-4 border-main"
            :src="image"
            :alt="article.name"
          />
          <div class="ml-6">
            <p class="text-xl font-bold">{{ article.title }}</p>
            <p class="text-sm mt-1">{{ article.title }}</p>
          </div>
        </footer>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    article: Object,
    slug: String,
    image: String,
  },
}
</script>
