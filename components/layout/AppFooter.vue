<template>
  <nav class="bg-gray-800 fixed bottom-0 w-full sm:hidden">
    <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
      <div class="relative flex items-center justify-between h-16">
        <div
          class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start"
        >
          <nuxt-link to="/" class="mr-5 text-2xl text-white font-semibold">
            <div class="flex-shrink-0 flex items-center w-8 h-8">
              <svg
                viewBox="0 0 20 20"
                class="w-full h-full stroke-current text-blue-500"
              >
                <path d="M8 20H3V10H0L10 0l10 10h-3v10h-5v-6H8v6z"></path>
              </svg>
            </div>
          </nuxt-link>
          <nuxt-link to="/chat" class="text-2xl text-white font-semibold">
            <div class="flex-shrink-0 flex items-center w-8 h-8">
              <svg
                viewBox="0 0 20 20"
                class="w-full h-full stroke-current text-blue-500"
              >
                <path
                  d="M10 15l-4 4v-4H2a2 2 0 0 1-2-2V3c0-1.1.9-2 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-8zM5 7v2h2V7H5zm4 0v2h2V7H9zm4 0v2h2V7h-2z"
                ></path>
              </svg>
            </div>
          </nuxt-link>
        </div>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  data() {
    return {
      showMenu: false,
    }
  },
  methods: {
    async fetchSuggestions(searchInput) {
      const { data } = await this.$storyapi.get('cdn/stories', {
        starts_with: 'articles/',
        resolve_relations: 'author',
        search_term: searchInput,
        per_page: 5,
      })

      return data.stories
    },
  },
}
</script>
