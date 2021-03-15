<template>
  <div class="flex-none">
    <div class="flex items-center p-4">
      <button
        type="button"
        class="flex flex-shrink-0 focus:outline-none mx-2 block text-blue-600 hover:text-blue-700 w-6 h-6"
      >
        <svg viewBox="0 0 20 20" class="w-full h-full fill-current">
          <path
            d="M10,1.6c-4.639,0-8.4,3.761-8.4,8.4s3.761,8.4,8.4,8.4s8.4-3.761,8.4-8.4S14.639,1.6,10,1.6z M15,11h-4v4H9  v-4H5V9h4V5h2v4h4V11z"
          />
        </svg>
      </button>
      <div class="relative flex-grow">
        <label>
          <input
            class="rounded-full py-2 pl-3 pr-10 w-full border border-gray-800 bg-gray-800 text-gray-200 focus:border-gray-700 focus:bg-gray-900 focus:outline-none focus:shadow-md transition duration-300 ease-in"
            type="text"
            value=""
            placeholder="Aa"
          />
          <button
            type="button"
            class="absolute top-0 right-0 mt-2 mr-3 flex flex-shrink-0 focus:outline-none block text-blue-600 hover:text-blue-700 w-6 h-6"
          >
            <svg viewBox="0 0 20 20" class="w-full h-full fill-current">
              <path
                d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zM6.5 9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm7 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm2.16 3a6 6 0 0 1-11.32 0h11.32z"
              ></path>
            </svg>
          </button>
        </label>
      </div>
      <button
        type="button"
        class="flex flex-shrink-0 focus:outline-none mx-2 block text-blue-600 hover:text-blue-700 w-6 h-6"
      >
        <svg viewBox="0 0 20 20" class="w-full h-full fill-current">
          <path
            d="M11.0010436,0 C9.89589787,0 9.00000024,0.886706352 9.0000002,1.99810135 L9,8 L1.9973917,8 C0.894262725,8 0,8.88772964 0,10 L0,12 L2.29663334,18.1243554 C2.68509206,19.1602453 3.90195042,20 5.00853025,20 L12.9914698,20 C14.1007504,20 15,19.1125667 15,18.000385 L15,10 L12,3 L12,0 L11.0010436,0 L11.0010436,0 Z M17,10 L20,10 L20,20 L17,20 L17,10 L17,10 Z"
          ></path>
        </svg>
      </button>
    </div>
  </div>
</template>
<script>
export default {}
</script>
