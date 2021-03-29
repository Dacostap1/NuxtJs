<template>
  <section id="welcome" class="h-screen">
    <div class="grid grid-cols-8 min-h-full">
      <div class="image col-start-1 col-span-4 hidden md:block h-screen">
        <img
          src="~/assets/welcome.png"
          alt="welcome"
          class="object-cover h-full w-full"
        />
      </div>
      <div
        class="welcome col-start-2 col-span-6 md:col-start-6 md:col-span-2 flex flex-col space-y-4 justify-center items-center"
      >
        <h1 class="self-start font-sans font-light text-6xl flex-shrink">
          Welcome!
        </h1>
        <p
          class="text-xl font-sans font-light leading-normal text-left flex-shrink"
        >
          Lorem ipsum dolor sit amet, consectetur ad ipiscin elit. Etiam
          vulputate augue vel felis gra vida porta. Lorem ipsum dolor sit amet,
          cons ectetur adipiscing elit.<br />
          Lorem ipsum dolor sit amet, consectetur ad ipiscin elit. Etiam
          vulputate augue vel felis gra vida porta. Lorem ipsum dolor sit amet,
          cons ectetur adipiscing elit.
        </p>
        <button
          class="self-start uppercase px-3 h-10 text-white rounded-full bg-purple-300 font-medium"
        >
          Learn more!
        </button>
      </div>
    </div>
  </section>
</template>
