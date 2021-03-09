<template>
  <div class="px-4 mt-4">
    <header>
      <h2 class="text-5xl">{{ article.name }}</h2>
      <div class="flex items-center mt-6">
        <img
          class="w-20 rounded-full border-4 border-main"
          :src="`http://localhost:1337${article.image[0].url}`"
          :alt="article.name"
        />
        <div class="ml-6">
          <p class="text-xl font-bold">{{ article.name }}</p>
          <p class="text-sm mt-1">
            {{ article.name }}
          </p>
        </div>
      </div>
    </header>
    <div class="mt-4">
      <nuxt-link
        v-for="tag in tag_list"
        :key="tag.name"
        :to="`/tag/${tagSlug(tag.name)}`"
        class="rounded-full text-white bg-green-500 uppercase text-sm mr-2 px-2 py-1"
        >{{ tag.name }}</nuxt-link
      >
    </div>
    <div v-html="$md.render(article.content)" class="prose mt-8"></div>
  </div>
</template>
<script>
import kebabCase from 'lodash/kebabCase'
import { createSEOMeta } from '@/plugins/seo'
export default {
  layout: 'blog',
  head() {
    // SEO por página
    const { name, content, image } = this.article
    return {
      title: name,
      meta: createSEOMeta({
        title: name,
        description: content,
        image: image[0].url,
        url: 'xd',
      }),
    }
  },
  data() {
    return {
      tag_list: [
        { name: 'Beasts', taggings_count: 2 },
        { name: 'Techniques', taggings_count: 1 },
      ],
    }
  },
  async asyncData({ $axios, params }) {
    const article = await $axios.$get(
      `http://localhost:1337/blogs/${params.slug}`
    )

    console.log(process.env.HOST_NAME)
    return { article }
  },
  methods: {
    tagSlug(tag) {
      return kebabCase(tag) // metodo de lodash
    },
  },
}
</script>
