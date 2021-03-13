<template>
  <div
    class="flex justify-between items-center p-3 hover:bg-gray-800 rounded-lg relative"
  >
    <div class="w-16 h-16 relative flex flex-shrink-0">
      <img
        class="shadow-md rounded-full w-full h-full object-cover"
        src="https://randomuser.me/api/portraits/men/97.jpg"
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
      class="flex-auto min-w-0 ml-4 mr-6 hidden md:block group-hover:block no-read"
    >
      <p>Tony Stark</p>
      <div class="flex items-center text-sm">
        <div class="min-w-0">
          <p class="truncate">Hey, Are you there?</p>
        </div>
        <p class="ml-2 whitespace-no-wrap">10min</p>
      </div>
    </div>
    <div
      class="bg-blue-700 w-3 h-3 rounded-full flex flex-shrink-0 hidden md:block group-hover:block"
    ></div>
  </div>
</template>
<script>
export default {
  props: {
    online: {
      type: Boolean,
      default: true,
    },
  },
  data() {},
}
</script>
<style scoped>
.no-read {
  @apply font-bold;
}
</style>
