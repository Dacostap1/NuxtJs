<template>
  <section id="recent-projects">
    <div class="h-screen grid grid-cols-8">
      <div
        class="col-span-8 lg:col-span-4 flex flex-col items-center justify-center bg-profile p-4 font-sans space-y-4"
      >
        <h1 class="text-white text-4xl sm:text-6xl font-light">
          Recent Projects
        </h1>
        <p class="text-xl text-white font-light text-center mx-4 md:mx-28">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus
          asperiores esse non fugit, aliquam vero?
        </p>

        <div class="lg: grid lg:grid-cols-2 gap-3">
          <img
            src="~/assets/projects/project1.jpeg"
            alt="welcome"
            class="h-80 w-full object-cover"
          />
          <img
            src="~/assets/projects/project2.jpeg"
            alt="welcome"
            class="h-80 w-full object-cover"
          />
          <img
            src="~/assets/projects/project3.jpeg"
            alt="welcome"
            class="h-80 w-full object-cover"
          />
          <img
            src="~/assets/projects/project4.jpeg"
            alt="welcome"
            class="h-80 w-full object-cover"
          />
        </div>
      </div>

      <div class="image col-start-5 col-span-5 hidden lg:block">
        <img
          src="~/assets/recentprojects.png"
          alt="welcome"
          class="h-screen object-cover w-full"
        />
      </div>
    </div>
  </section>
</template>
