<template>
  <section>
    <Navbar />
    <!-- Hero Section -->
    <div class="pt-40">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800">
          Holmen Consulting. <br />
          Aligning <span class="text-purple-500">Technology</span> with
          Business.
        </h1>

        <p class="mt-4 text-gray-600 text-base sm:text-lg lg:text-xl font-bold">
          Holmen Consulting partner with businesses to provide scalable
          enterprise solutions to meet the needs of our clients. Our solutions
          are delivered through a team of experienced, result-driven resources.
        </p>

        <div class="mt-6">
          <a
            href="https://wa.me/+8148595834"
            class="inline-block px-6 py-3 bg-purple-500 text-white font-bold text-sm rounded-lg shadow-md hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-300"
          >
            Book a Free Consulting Call
          </a>
        </div>

        <!-- Image and Services Section -->
        <div
          class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 flex flex-col lg:flex-row items-center space-y-8 lg:space-y-0 lg:space-x-10"
        >
          <img
            src="../../assets/Images/consultingfirm.svg"
            alt="Consulting Team"
            class="rounded-lg shadow-lg w-full"
            loading="lazy"
          />
        </div>

        <div class="py-10">
          <div class="container mx-auto px-4">
            <div
              class="text-center lg:flex lg:justify-between lg:items-start lg:space-x-7 md:justify-center md:items-center"
            >
              <div>
                <h2
                  class="text-3xl font-bold text-gray-800 mb-4 lg:mb-0 lg:text-4xl"
                >
                  Let's learn more<br />
                  about our services.
                </h2>
              </div>
              <div class="md:text-center">
                <p class="text-gray-600 max-w-md py-2 font-bold">
                  We provide experienced technical and consulting services for
                  both large and mid-market companies across platforms.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="py-10">
          <div class="container mx-auto px-4">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div
                class="bg-yellow-50 p-8 rounded-lg text-center transition duration-300 ease-in-out transform hover:scale-105"
              >
                <div class="mb-4">
                  <img
                    src="../../assets/Images/counselling.svg"
                    alt="User Icon"
                    className="w-10 h-10 mx-auto animate-bounce"
                    loading="lazy"
                  />
                </div>
                <h3 class="text-lg font-bold mb-2 animate-fadeIn">
                  Consulting
                </h3>
                <p
                  class="text-gray-600 animate-fadeIn animate-delay-200 font-bold"
                >
                  We collaborate with you to discuss your project requirements
                  and solutions.
                </p>
                <button
                  class="mt-4 px-4 py-2 bg-yellow-50 text-[#9C883C] font-extrabold rounded-md hover:bg-[#5e532d] hover:text-white animate-fadeIn animate-delay-400"
                >
                  Get in Touch</button
                >-
              </div>
              <div
                class="bg-pink-50 p-8 rounded-lg text-center transition duration-300 ease-in-out transform hover:scale-105"
              >
                <div class="mb-4">
                  <img
                    src="../../assets/Images/management.svg"
                    alt="User Icon"
                    className="w-10 h-10 mx-auto animate-bounce"
                    loading="lazy"
                  />
                </div>
                <h3 class="text-lg font-bold mb-2 animate-fadeIn">
                  Management
                </h3>
                <p
                  class="text-gray-600 animate-fadeIn animate-delay-200 font-bold"
                >
                  We assist you in defining and managing the tasks and timelines
                  for your project.
                </p>
                <button
                  class="mt-4 px-4 py-2 bg-pink-50 text-[#717171] rounded-md hover:bg-[#8a608f] hover:text-white animate-fadeIn animate-delay-400 font-extrabold"
                >
                  Get in Touch
                </button>
              </div>
              <div
                class="bg-gray-50 p-8 rounded-lg text-center transition duration-300 ease-in-out transform hover:scale-105"
              >
                <div class="mb-4">
                  <img
                    src="../../assets/Images/implementation.svg"
                    alt="User Icon"
                    className="w-10 h-10 mx-auto animate-bounce"
                    loading="lazy"
                  />
                </div>
                <h3 class="text-lg font-bold mb-2 animate-fadeIn">
                  Implementation
                </h3>
                <p
                  class="text-gray-600 animate-fadeIn animate-delay-200 font-bold"
                >
                  We provide both functional and technical resources to aid you
                  in implementing your solutions.
                </p>
                <button
                  class="mt-4 px-4 py-2 bg-gray-50 text-[#6980E3] rounded-md hover:bg-[#6a85ff] hover:text-white animate-fadeIn animate-delay-400 font-extrabold"
                >
                  Get in Touch
                </button>
              </div>
              <div
                class="bg-cyan-50 p-8 rounded-lg text-center transition duration-300 ease-in-out transform hover:scale-105"
              >
                <div class="mb-4">
                  <img
                    src="../../assets/Images/service.svg"
                    alt="User Icon"
                    className="w-10 h-10 mx-auto animate-bounce"
                    loading="lazy"
                  />
                </div>
                <h3 class="text-lg font-bold mb-2 animate-fadeIn">
                  Advisory Services
                </h3>
                <p
                  class="text-gray-600 animate-fadeIn animate-delay-200 font-bold"
                >
                  We also provide alternate financial engineering solutions to
                  add your ideas to life.
                </p>
                <button
                  class="mt-4 px-4 py-2 bg-cyan-50 text-[#3E94B5] font-extrabold rounded-md hover:bg-[#11323f] hover:text-white animate-fadeIn animate-delay-400"
                >
                  Get in Touch
                </button>
              </div>
            </div>
          </div>
        </div>

        <div class="bg-[#F6F6F6]"></div>
      </div>
    </div>

    <section class="bg-[#FDEEFF] py-12">
      <div class="container mx-auto px-4">
        <!-- Section Title -->
        <h2 class="text-2xl font-bold text-gray-800 mb-6 sm:text-3xl">
          What our client says about us.
        </h2>

        <!-- Testimonial Content -->
        <div class="flex flex-col space-y-6">
          <div class="testimonial-content">
            <p
              class="text-gray-700 font-semibold text-lg sm:text-xl leading-relaxed"
            >
              {{ testimonials[currentIndex].text }}
            </p>

            <div class="flex items-center justify-between mt-6">
              <!-- Client Info -->
              <div class="flex items-center space-x-4">
                <img
                  :src="testimonials[currentIndex].image"
                  :alt="testimonials[currentIndex].author"
                  class="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <p class="font-bold text-gray-800 text-base">
                    {{ testimonials[currentIndex].author }}
                  </p>
                  <p class="text-gray-500 text-sm">
                    {{ testimonials[currentIndex].company }}
                  </p>
                </div>
              </div>

              <!-- Pagination Controls -->
              <div class="flex items-center space-x-4">
                <button
                  @click="previousTestimonial"
                  class="flex items-center justify-center w-12 h-12 border border-purple-500 text-purple-500 rounded-lg hover:bg-purple-500 hover:text-white transition"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15.75 19.5L8.25 12l7.5-7.5"
                    />
                  </svg>
                </button>

                <span class="text-gray-600 text-sm sm:text-base">
                  {{ formatPageNumber(currentIndex + 1) }}/{{
                    formatPageNumber(testimonials.length)
                  }}
                </span>

                <button
                  @click="nextTestimonial"
                  class="flex items-center justify-center w-12 h-12 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M8.25 4.5l7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Footer />
  </section>
</template>

<script>
import Navbar from "../../components/Navbar/Navbar.vue";
import Footer from "../../components/Footer/Footer.vue";
import testimonial_image from '../../assets/Images/Kathy-wulfken.svg'


export default {
  components: {
    Navbar,
    Footer,
  },
  data() {
    return {
      currentIndex: 0,
      testimonials: [
        {
          text: "I worked with consultants @ Holmen Consulting for several years in ERP implementation consulting. They have significant expertise in ERP software packages, and a high level of motivation and self-initiatives. I would not hesitate to hire Holmen Consultants again at any time, should a future opportunity arise.",
          author: "Kathy Wulfken, Practice Leader",
          company: "Latis Technologies Inc",
          image: testimonial_image,
        },
        {
          text: "The team at Holmen Consulting provided exceptional service throughout our ERP implementation project. Their expertise and dedication made the entire process smooth and successful.",
          author: "John Doe, Project Manager",
          company: "Tech Solutions Ltd",
          image: testimonial_image,
        },

        {
          text: "The team at Holmen Consulting provided exceptional service throughout our ERP implementation project. Their expertise and dedication made the entire process smooth and successful.",
          author: "John Doe, Project Manager",
          company: "Tech Solutions Ltd",
          image: testimonial_image,
        },

        {
          text: "The team at Holmen Consulting provided exceptional service throughout our ERP implementation project. Their expertise and dedication made the entire process smooth and successful.",
          author: "John Doe, Project Manager",
          company: "Tech Solutions Ltd",
          image: testimonial_image,
        },

        {
          text: "The team at Holmen Consulting provided exceptional service throughout our ERP implementation project. Their expertise and dedication made the entire process smooth and successful.",
          author: "John Doe, Project Manager",
          company: "Tech Solutions Ltd",
          image: testimonial_image,
        },
      ],
    };
  },
  methods: {
    nextTestimonial() {
      this.currentIndex =
        (this.currentIndex + 1) % this.testimonials.length;
    },
    previousTestimonial() {
      this.currentIndex =
        (this.currentIndex - 1 + this.testimonials.length) %
        this.testimonials.length;
    },
    formatPageNumber(index) {
      return index.toString().padStart(2, "0");
    },
  },
};
</script>


<style>
@keyframes bounce {
  0%,
  100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-10px);
  }
}

@keyframes fadeIn {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-bounce {
  animation: bounce 1s ease-in-out infinite;
}

.animate-fadeIn {
  animation: fadeIn 0.5s ease-in-out;
}

.animate-delay-200 {
  animation-delay: 0.2s;
}

.animate-delay-400 {
  animation-delay: 0.4s;
}
</style>
