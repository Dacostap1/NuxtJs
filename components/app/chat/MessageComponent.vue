<template>
  <div
    class="flex"
    :class="[message.type !== 'me' ? 'justify-start' : 'justify-end']"
  >
    <p
      class="px-6 py-3 max-w-xs lg:max-w-md flex-initial"
      :class="[message.type == 'me' ? 'my-msm' : 'contact-msm']"
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
  @apply rounded-l-full;
}

.my-msm {
  background-color: theme('colors.msm-sent');
}

.contact-msm {
  @apply rounded-r-full;
}

.contact-msm {
  background-color: theme('colors.msm-received');
}
</style>
