<template>
  <div>
    <header class="max-w-lg mx-auto">
      <a href="#">
        <h1 class="text-4xl font-bold text-white text-center">Startup</h1>
      </a>
    </header>
    <main
      class="bg-white max-w-lg mx-auto p-8 md:p-12 my-10 rounded-lg shadow-2xl"
    >
      <section>
        <h3 class="font-bold text-2xl">Welcome to Startup</h3>
        <p class="text-gray-600 pt-2">Sign in to your account.</p>
      </section>

      <section class="mt-10">
        <UserAuthForm :submitForm="login"></UserAuthForm>
      </section>
    </main>

    <div class="max-w-lg mx-auto text-center mt-12 mb-6">
      <p class="text-white">
        Don't have an account?
        <a href="#" class="font-bold hover:underline">Sign up</a>.
      </p>
    </div>

    <footer class="max-w-lg mx-auto flex justify-center text-white">
      <a href="#" class="hover:underline">Contact</a>
      <span class="mx-3">•</span>
      <a href="#" class="hover:underline">Privacy</a>
    </footer>
  </div>
</template>
<script>
export default {
  layout: 'default',
  methods: {
    login(userInfo) {
      this.$auth.loginWith('laravelSanctum', {
        data: userInfo,
      })
      alert(userInfo)
    },
  },
}
</script>
<style scoped>
body {
  background-color: #9921e8;
  background-image: linear-gradient(315deg, #9921e8 0%, #5f72be 74%);
}
</style>
>
