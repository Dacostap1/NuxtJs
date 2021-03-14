<template>
  <div
    class="flex"
    :class="[message.type !== 'me' ? 'justify-start' : 'justify-end']"
  >
    <p
      class="px-6 py-3 bg-blue-700 max-w-xs lg:max-w-md flex-initial"
      :class="[message.type !== 'me' ? 'my-msm' : 'contact-msm']"
      v-html="message.message"
    ></p>
  </div>
</template>
<script>
export default {
  props: {
    message: {
      type: Object,
      default: () => {
        return {}
      },
    },
  },
}
</script>
<style>
.my-msm {
  @apply bg-blue-700  rounded-r-full;
}

.contact-msm {
  @apply bg-gray-800 rounded-l-full;
}
</style>
