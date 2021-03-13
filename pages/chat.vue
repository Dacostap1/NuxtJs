<template>
  <div
    class="h-screen w-full flex antialiased | text-gray-200 bg-gray-900 | overflow-hidden"
  >
    <div class="flex-1 flex flex-col">
      <main class="flex-grow flex flex-row min-h-0">
        <section
          class="flex-none flex flex-col | group overflow-auto | w-24 hover:w-64 md:w-2/5 lg:max-w-sm | transition-all duration-300 ease-in-out"
        >
          <header
            class="header p-4 flex flex-row justify-center items-center flex-none"
          >
            <h1 class="font-bold">Messenger</h1>
          </header>
          <div class="search-box p-4 flex-none">
            <SearchContact></SearchContact>
          </div>
          <section name="contact-list flex-1 h-full">
            <ContactList></ContactList>
          </section>
        </section>
        <section></section>
      </main>
    </div>
  </div>
</template>
<style>
.group:hover .group-hover\:block {
  display: block;
}
.hover\:w-64:hover {
  width: 45%;
}
</style>
<script>
export default {
  // layout: 'nav',
}
</script>
