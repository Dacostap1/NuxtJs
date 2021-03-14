<template>
  <div
    class="flex justify-between items-center p-3 hover:bg-gray-800 rounded-lg relative"
  >
    <div class="w-16 h-16 relative flex flex-shrink-0">
      <img
        class="shadow-md rounded-full w-full h-full object-cover"
        :src="avatar"
        alt=""
      />

      <div
        v-if="online"
        class="absolute bg-gray-900 p-1 rounded-full bottom-0 right-0"
      >
        <div class="bg-green-500 rounded-full w-3 h-3"></div>
      </div>
    </div>

    <div
      class="flex-auto min-w-0 ml-4 mr-6 hidden md:block group-hover:block"
      :class="[!visto ? 'no-read' : '']"
    >
      <p>{{ name }}</p>
      <div class="flex items-center text-sm">
        <div class="min-w-0">
          <p class="truncate">{{ last_message }}</p>
        </div>
        <p class="ml-2 whitespace-no-wrap">{{ last_time }}</p>
      </div>
    </div>
    <div
      v-if="!visto"
      class="bg-blue-700 w-3 h-3 rounded-full flex flex-shrink-0 hidden md:block group-hover:block"
    ></div>
  </div>
</template>
<script>
export default {
  props: {
    avatar: {
      type: String,
      default: '',
    },
    name: {
      type: String,
      default: '',
    },
    last_message: {
      type: String,
      default: '',
    },
    last_time: {
      type: String,
      default: '',
    },
    visto: {
      type: Boolean,
      default: false,
    },
    online: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {}
  },
}
</script>
<style scoped>
.no-read {
  @apply font-bold;
}
</style>
