<template>
  <div>
    <form class="flex flex-col" @submit.prevent="login">
      <div class="mb-6 pt-3 rounded bg-gray-200">
        <label
          class="block text-gray-700 text-sm font-bold mb-2 ml-3"
          for="email"
          >Email</label
        >
        <input
          v-model="userInfo.email"
          id="email"
          type="text"
          class="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3"
        />
      </div>
      <div class="mb-6 pt-3 rounded bg-gray-200">
        <label
          class="block text-gray-700 text-sm font-bold mb-2 ml-3"
          for="password"
          >Password</label
        >
        <input
          v-model="userInfo.password"
          id="password"
          type="password"
          class="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3"
        />
      </div>
      <div class="flex justify-end">
        <a
          href="#"
          class="text-sm text-purple-600 hover:text-purple-700 hover:underline mb-6"
          >Forgot your password?</a
        >
      </div>
      <button
        class="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 rounded shadow-lg hover:shadow-xl transition duration-200"
        type="submit"
        @click="submitForm(userInfo)"
      >
        Sign In
      </button>
    </form>
  </div>
</template>
<script>
export default {
  props: ['submitForm'],
  data() {
    return {
      userInfo: {
        email: 'trabajador@example.com',
        password: 'password',
      },
    }
  },
  methods: {
    login() {},
  },
}
</script>
