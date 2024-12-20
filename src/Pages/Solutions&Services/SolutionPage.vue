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

    <div class="container mx-auto px-4 py-12 bg-[#FDEEFF]">
      <h1
        class="text-3xl md:text-4xl font-bold text-center text-purple-900 mb-12"
      >
        Discover Our Range of Solutions and Services
      </h1>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
        <!-- Digital Transformation Card -->
        <div
          class="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
        >
          <div class="flex justify-center mb-6">
            <div class="relative">

                <img src="../../assets/Images/dt.svg" alt="Digital Transformation"/>
              
            </div>
          </div>
          <h2 class="text-xl font-semibold text-gray-800 mb-4 text-center">
            Digital Transformation
          </h2>
          <p class="text-gray-600 text-center text-sm">
            We will define your digital IT architecture and design a
            transformation road-map to digitize your assets, align your people
            with your business goals, stimulate innovation, drive operational
            efficiency.
          </p>
        </div>

        <!-- Cloud Migration Card -->
        <div
          class="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
        >
          <div class="flex justify-center mb-6">
            <div class="relative">

                <img src="../../assets/Images/CM.svg" alt="Digital Transformation"/>
              
            </div>
          </div>
          <h2 class="text-xl font-semibold text-gray-800 mb-4 text-center">
            Cloud Migration
          </h2>
          <p class="text-gray-600 text-center text-sm">
            Business Process Re-Engineering (BPR) optimizes core processes by
            automating non-value-added tasks. Our team collaborates to analyze
            and redesign your workflows.
          </p>
        </div>

        <!-- ERP & Core Systems Card -->
        <div
          class="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
        >
          <div class="flex justify-center mb-6">
            <div class="w-40 h-40 relative">
              <svg
                class="w-full h-full text-blue-500"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="2"
                  y="2"
                  width="20"
                  height="20"
                  rx="2"
                  stroke="currentColor"
                  stroke-width="2"
                />
                <path
                  d="M8 8h8M8 12h8M8 16h8"
                  stroke="currentColor"
                  stroke-width="2"
                />
              </svg>
            </div>
          </div>
          <h2 class="text-xl font-semibold text-gray-800 mb-4 text-center">
            ERP & Core Systems
          </h2>
          <p class="text-gray-600 text-center text-sm">
            Simple and effective implementation of ERP solutions with acceptable
            levels of customization to meet your needs. Understanding your
            requirements is critical.
          </p>
        </div>

        <!-- Business Process Re-engineering Card -->
        <div
          class="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
        >
          <div class="flex justify-center mb-6">
            <div class="w-40 h-40 relative">
              <svg
                class="w-full h-full text-blue-500"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="6"
                  stroke="currentColor"
                  stroke-width="2"
                />
                <path
                  d="M12 2v4m0 12v4M2 12h4m12 0h4"
                  stroke="currentColor"
                  stroke-width="2"
                />
              </svg>
            </div>
          </div>
          <h2 class="text-xl font-semibold text-gray-800 mb-4 text-center">
            Business Process Re-engineering
          </h2>
          <p class="text-gray-600 text-center text-sm">
            Our team helps analyze and redesign your workflows, automating
            processes where possible to enhance efficiency and reduce costs
            while maintaining quality.
          </p>
        </div>

        <!-- Data Analytics Card -->
        <div
          class="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
        >
          <div class="flex justify-center mb-6">
            <div class="w-40 h-40 relative">
              <svg
                class="w-full h-full text-blue-500"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 14h4v7H4v-7zM10 9h4v12h-4V9zM16 3h4v18h-4V3z"
                  stroke="currentColor"
                  stroke-width="2"
                />
              </svg>
            </div>
          </div>
          <h2 class="text-xl font-semibold text-gray-800 mb-4 text-center">
            Data Analytics
          </h2>
          <p class="text-gray-600 text-center text-sm">
            Transform your raw data into actionable insights with our advanced
            analytics solutions. We help you make data-driven decisions to drive
            business growth.
          </p>
        </div>

        <!-- Cybersecurity Solutions Card -->
        <div
          class="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
        >
          <div class="flex justify-center mb-6">
            <div class="w-40 h-40 relative">
              <svg
                class="w-full h-full text-blue-500"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 2L3 7v5c0 5.5 3.8 10.7 9 12 5.2-1.3 9-6.5 9-12V7l-9-5z"
                  stroke="currentColor"
                  stroke-width="2"
                />
                <path
                  d="M12 9v6m0 2v.01"
                  stroke="currentColor"
                  stroke-width="2"
                />
              </svg>
            </div>
          </div>
          <h2 class="text-xl font-semibold text-gray-800 mb-4 text-center">
            Cybersecurity Solutions
          </h2>
          <p class="text-gray-600 text-center text-sm">
            Protect your digital assets with our comprehensive security
            solutions. We provide threat detection, prevention, and response
            services to keep your data safe.
          </p>
        </div>
      </div>
    </div>
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
