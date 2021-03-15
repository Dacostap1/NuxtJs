<template>
  <div
    class="h-screen w-full flex | antialiased text-gray-200 bg-gray-900 | overflow-hidden"
  >
    <main class="flex-grow flex flex-row min-h-0">
      <section
        class="flex-none flex flex-col | group overflow-auto | w-24 hover:w-80 md:w-2/5 lg:max-w-sm | transition-all duration-300 ease-in-out"
      >
        <header class="flex-none flex justify-center items-center p-4">
          <h1 class="text-md font-bold">Chat</h1>
        </header>
        <div class="flex-none p-4">
          <SearchContact v-model="search"></SearchContact>
        </div>
        <section class="flex-1 h-full">
          <ContactList :search="search"></ContactList>
        </section>
      </section>

      <ChatBody></ChatBody>
    </main>
  </div>
</template>
<script>
export default {
  // layout: 'nav',
  name: 'ChatComponent',
  data() {
    return {
      search: '',
    }
  },
}
</script>
