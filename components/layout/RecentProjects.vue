<template>
  <section id="recent-projects" class="h-auto lg:h-screen overflow-hidden">
    <div class="grid grid-cols-8">
      <div
        class="col-span-8 lg:col-span-4 flex flex-col items-center justify-center bg-profile p-4 md:p-6 font-sans space-y-6"
      >
        <h1 class="text-white text-4xl sm:text-6xl font-light">
          Recent Projects
        </h1>
        <p class="text-xl text-white font-light text-center mx-4 md:mx-24">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus
        </p>

        <div class="lg: grid lg:grid-cols-2 gap-3 h-auto sm:h-96 lg:max-h-auto">
          <div class="max-h-60 sm:min-h-full">
            <img
              src="~/assets/projects/project1.jpeg"
              alt="welcome"
              class="h-full w-full object-cover"
            />
          </div>
          <div class="max-h-60 sm:min-h-full">
            <img
              src="~/assets/projects/project1.jpeg"
              alt="welcome"
              class="h-full w-full object-cover"
            />
          </div>
          <div class="max-h-60 sm:min-h-full">
            <img
              src="~/assets/projects/project1.jpeg"
              alt="welcome"
              class="h-full w-full object-cover"
            />
          </div>
          <div class="max-h-60 sm:min-h-full">
            <img
              src="~/assets/projects/project1.jpeg"
              alt="welcome"
              class="h-full w-full object-cover"
            />
          </div>

          <!--         <img
            src="~/assets/projects/project2.jpeg"
            alt="welcome"
            class="h-80 min-h-full md:max-h-60 lg:max-h-96 w-full object-cover"
          /> -->
          <!--           <img
            src="~/assets/projects/project3.jpeg"
            alt="welcome"
            class="h-80 min-h-full md:max-h-60 lg:max-h-96 w-full object-cover"
          />
          <img
            src="~/assets/projects/project4.jpeg"
            alt="welcome"
            class="h-80 min-h-full md:max-h-60 lg:max-h-96 w-full object-cover"
          /> -->
        </div>
      </div>

      <div class="image col-start-5 col-span-5 hidden lg:block h-screen">
        <img
          src="~/assets/recentprojects.png"
          alt="welcome"
          class="object-cover w-full h-screen"
        />
      </div>
    </div>
  </section>
</template>
