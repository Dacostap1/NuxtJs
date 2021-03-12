<template>
  <div
    class="max-w-2xl bg-white border-2 border-gray-300 p-5 rounded-md tracking-wide shadow-lg"
  >
    <nuxt-link :to="`/blog/${article.id}`">
      <div class="flex">
        <img
          class="w-40 rounded-md border-2 border-gray-300"
          :src="image"
          :alt="article.name"
        />
        <div id="body" class="flex flex-col ml-5">
          <h4 class="text-xl font-semibold mb-2">
            {{ article.title }}
          </h4>

          <p
            id="content"
            class="text-gray-800 mt-2"
            v-html="$md.render(article.content)"
          >
            {{ article.content }}
          </p>

          <div class="flex mt-5">
            <img
              class="w-6 rounded-full border-2 border-gray-300"
              :src="image"
              :alt="article.name"
            />
            <p class="ml-3">John Doe</p>
          </div>
        </div>
      </div>
    </nuxt-link>
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
