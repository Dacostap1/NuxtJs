<template>
  <section class="flex-auto flex flex-col border-l border-gray-800">
    <ChatBodyHeader :contactSelected="contactSelected"></ChatBodyHeader>
    <div class="flex-1 p-4 overflow-y-scroll">
      <MessageComponent
        v-for="(message, index) in messages"
        :key="index"
        :message="message"
        class="my-2"
      ></MessageComponent>
    </div>
    <ChatBodyFooter></ChatBodyFooter>
  </section>
</template>
<script>
export default {
  props: {
    contactSelected: {
      default: () => {
        return {}
      },
    },
  },
  watch: {
    contactSelected: {
      handler() {
        console.log(this.contactSelected)
        this.$nuxt.$loading.start()
        setTimeout(() => this.$nuxt.$loading.finish(), 200)
      },
      deep: true,
    },
  },

  data() {
    return {
      messages: [
        {
          type: 'me',
          message: 'hola',
        },
        {
          type: 'user',
          message: 'hola que tal Daniel, Como estás??',
        },
        {
          type: 'me',
          message: 'Bien y tu',
        },
        {
          type: 'user',
          message:
            'Jajajajajaj te pasdassaldj kjsd kdjskd jsakd jskad jkasdj skdj skdj skd jskd jsk jskdjskdjskd',
        },
        {
          type: 'user',
          message: 'chau',
        },
        {
          type: 'me',
          message:
            'Jajajajajaj te pasdassaldj kjsd kdjskd jsakd jskad jkasdj skdj skdj skd jskd jsk jskdjskdjskd',
        },
        {
          type: 'me',
          message:
            'Jajajajajaj te pasdassaldj kjsd kdjskd jsakd jskad jkasdj skdj skdj skd jskd jsk jskdjskdjskd',
        },
        {
          type: 'me',
          message:
            'Jajajajajaj te pasdassaldj kjsd kdjskd jsakd jskad jkasdj skdj skdj skd jskd jsk jskdjskdjskd',
        },
      ],
    }
  },
}
</script>
