<template>
  <div class="flex-1 overflow-y-scroll">
    <ContactComponent :online="false"></ContactComponent>
    <div
      v-for="i in 2"
      :key="i"
      class="flex justify-between items-center p-3 hover:bg-gray-800 rounded-lg relative"
    >
      <div class="w-16 h-16 relative flex flex-shrink-0">
        <img
          class="shadow-md rounded-full w-full h-full object-cover"
          src="https://randomuser.me/api/portraits/women/61.jpg"
          alt=""
        />
      </div>
      <div
        class="flex-auto min-w-0 ml-4 mr- 6 hidden md:block group-hover:block"
      >
        <p class="">Angelina Jolie</p>
        <div class="flex items-center text-sm text-gray-600">
          <div class="min-w-0">
            <p class="truncate">Ok, luego hablamos dsdsdddsdsdsdsddsdsdsds</p>
          </div>
          <p class="ml-2 whitespace-no-wrap">ahora</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data: () => ({
    contacts: [
      {
        name: 'Dani',
        image: '',
      },
    ],
  }),
}
</script>
