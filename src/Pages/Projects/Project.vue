<template>
  <div>
    <Navbar />

    <section class="container mx-auto pt-32 pb-20 px-6 lg:px-20">
      <div
        class="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-10"
      >
        <!-- Text Content -->
        <div class="lg:w-1/2 max-w-xl">
          <h1 class="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            <span class="text-purple-500">Digital</span> Solutions<br />
            and <span class="text-purple-500">Services.</span>
          </h1>

          <p class="text-gray-600 mb-8 text-[22px] font-bold leading-relaxed">
            At Holmen, we understand that the digital landscape is
            ever-evolving, and businesses need strategic guidance to navigate
            and thrive in this dynamic environment. As a leading consulting firm
            specializing in digital solutions, we are here to be your trusted
            partner on the journey to digital transformation.
          </p>

          <button
            class="bg-purple-500 text-white px-6 py-3 rounded-md hover:bg-purple-600 transition-colors duration-300"
          >
            Get In Touch
          </button>
        </div>

        <!-- Image Container -->
        <div class="lg:w-1/2 flex justify-center lg:justify-end">
          <div class="w-full max-w-sm">
            <img
              src="../../assets/Images/Solutionimage.svg"
              alt="Digital Solutions"
              class="rounded-lg shadow-lg w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Navbar from "../../components/Navbar/Navbar.vue";

export default {
  components: {
    Navbar,
  },
};
</script>
