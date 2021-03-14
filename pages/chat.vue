<template>
  <div
    class="h-screen w-full flex antialiased | text-gray-200 bg-gray-900 | overflow-hidden"
  >
    <div class="flex-1 flex flex-col">
      <main class="flex-grow flex flex-row min-h-0">
        <section
          class="flex-none flex flex-col | group overflow-auto | w-24 hover:w-80 md:w-2/5 lg:max-w-sm | transition-all duration-300 ease-in-out"
        >
          <header
            class="header p-4 flex flex-row justify-center items-center flex-none"
          >
            <h1 class="text-md font-bold">Chat</h1>
          </header>
          <div class="search-box p-4 flex-none">
            <SearchContact v-model="search"></SearchContact>
          </div>
          <section class="flex-1 h-full">
            <ContactList :search="search"></ContactList>
          </section>
        </section>
        <section class="flex-auto flex flex-col border-l border-gray-800">
          <ChatBody></ChatBody>
        </section>
      </main>
    </div>
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
