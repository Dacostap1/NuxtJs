<template>
  <div
    class="content-container sm:h-screen w-full flex | antialiased text-gray-200 bg-chat | overflow-hidden"
  >
    <main class="flex-grow flex flex-row min-h-0">
      <section
        class="flex-none flex flex-col | group overflow-auto | w-24 hover:w-3/5 md:w-2/5 lg:max-w-sm | transition-all duration-300 ease-in-out"
      >
        <header class="flex-none flex justify-center items-center p-4">
          <h1 class="text-md font-bold">Chat</h1>
        </header>
        <div class="flex-none p-4">
          <SearchContact v-model="search"></SearchContact>
        </div>
        <section class="flex-1 h-full">
          <ContactList
            :search="search"
            @selectedContact="selectedContact"
          ></ContactList>
        </section>
      </section>

      <ChatBody :contactSelected="contactSelected"></ChatBody>
    </main>
  </div>
</template>
<script>
export default {
  layout: 'nav',
  name: 'Chat',
  data() {
    return {
      search: '',
      contactSelected: {
        avatar: '',
        name: '',
        last_time: '',
      },
    }
  },
  methods: {
    selectedContact(contact) {
      console.log(contact)
      this.contactSelected.avatar = contact.avatar
      this.contactSelected.name = contact.name
      this.contactSelected.last_time = contact.last_time
    },
  },
}
</script>
