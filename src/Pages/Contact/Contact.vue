<template>
  <div>
    <Navbar />
    <div class="max-w-6xl mx-auto p-4 md:p-8">
      <div class="p-6 md:p-12">
        <h2 class="text-[48px] md:text-4xl font-bold text-center mb-2">
          Contact <span class="text-purple-600">Us</span>
        </h2>
        <p class="text-center text-gray-600 mb-8 font-semibold">
          We will be happy to help you out!
        </p>

        <div class="flex flex-col md:flex-row items-center gap-8">
          <!-- Illustration Section -->
          <div class="w-full md:w-1/2 flex justify-center">
            <img
              src="../../assets/Images/contact-us.svg"
              alt="Contact illustration"
              class="w-full max-w-sm"
            />
          </div>

          <div class="w-full md:w-1/2">
            <form @submit.prevent="handleSubmit" class="space-y-6">
              <div>
                <label for="name" class="block text-gray-700 font-bold mb-2"
                  >What is your name?</label
                >
                <input
                  id="name"
                  v-model="formData.name"
                  type="text"
                  class="w-full px-4 py-3 rounded-md border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition duration-200"
                  required
                />
              </div>

              <!-- Email Input -->
              <div>
                <label for="email" class="block text-gray-700 font-bold mb-2"
                  >Your email address</label
                >
                <input
                  id="email"
                  v-model="formData.email"
                  type="email"
                  class="w-full px-4 py-3 rounded-md border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition duration-200"
                  required
                />
              </div>

              <!-- Message Input -->
              <div>
                <label for="message" class="block text-gray-700 font-bold mb-2"
                  >Your message</label
                >
                <textarea
                  id="message"
                  v-model="formData.message"
                  rows="5"
                  class="w-full px-4 py-3 rounded-md border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition duration-200 resize-none"
                  required
                ></textarea>
              </div>

              <!-- Submit Button -->
              <button
                type="submit"
                class="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-md transition duration-300 ease-in-out"
                :disabled="isSubmitting"
              >
                {{ isSubmitting ? "Sending..." : "Send message" }}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div class="max-w-full p-4">
      <div
        class="relative w-full h-64 md:h-96 overflow-hidden rounded-md shadow-lg"
      >
        <!-- Replace the iframe below with your desired map embed or API -->
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31513.964726763!2d3.3784843856695516!3d6.4475695999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2553b4dc5d%3A0x0!2sLagos!5e0!3m2!1sen!2sng!4v1698169437311!5m2!1sen!2sng"
          class="absolute top-0 left-0 w-full h-full border-0"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
    <Footer />
    
  </div>
</template>

<script>
import Navbar from "../../components/Navbar/Navbar.vue";
import Footer from "../../components/Footer/Footer.vue";

export default {
  components: {
    Navbar,
    Footer
  },
  data() {
    return {
      formData: {
        name: "",
        email: "",
        message: "",
      },
      isSubmitting: false,
    };
  },
  methods: {
    async handleSubmit() {
      this.isSubmitting = true;
      try {
        console.log("Form submitted:", this.formData);
        this.formData = {
          name: "",
          email: "",
          message: "",
        };
        alert("Message sent successfully!");
      } catch (error) {
        console.error("Error submitting form:", error);
        alert("There was an error sending your message. Please try again.");
      } finally {
        this.isSubmitting = false;
      }
    },
  },
};
</script>
