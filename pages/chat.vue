<template>
  <div
    class="content-container sm:h-screen w-full flex | antialiased text-gray-200 bg-chat | overflow-hidden"
  >
    <main class="flex-grow flex flex-row min-h-0">
      <section
        class="flex-none flex flex-col | group overflow-auto | md:w-2/5 lg:max-w-sm | transition-all duration-300 ease-in-out"
        :class="[showContacts ? 'w-3/5' : 'w-24']"
      >
        <header class="flex-none flex justify-center items-center p-4">
          <h1 class="text-md font-bold">Chat</h1>
        </header>
        <div class="flex-none p-4">
          <SearchContact
            v-model="search"
            @click.native="showContacts = true"
          ></SearchContact>
        </div>
        <section id="contact-list" class="flex-1 h-full">
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
  name: 'Chat',
  layout: 'nav',

  data() {
    return {
      search: '',
      contactSelected: {
        avatar: '',
        name: '',
        last_time: '',
      },
      showContacts: true,
      initialPosition: null,
      currentPosition: null,
      diff: null,
    }
  },
  mounted() {
    const contactList = document.getElementById('contact-list')
    contactList.addEventListener('touchstart', this.handleTouchStart, false)
    contactList.addEventListener('touchend', this.handleTouchEnd, false)
  },
  methods: {
    selectedContact(contact) {
      console.log(contact)
      this.contactSelected.avatar = contact.avatar
      this.contactSelected.name = contact.name
      this.contactSelected.last_time = contact.last_time
    },
    handleTouchStart(e) {
      this.initialPosition = e.touches[0].pageX
    },
    handleTouchEnd(e) {
      this.currentPosition = e.changedTouches[0].pageX
      this.diff = this.currentPosition - this.initialPosition
      if (this.diff > 35) {
        // Ampliando el rango de mov
        this.showContacts = true
      } else if (this.diff < -35) {
        this.showContacts = false
      }
    },
  },
}
</script>
