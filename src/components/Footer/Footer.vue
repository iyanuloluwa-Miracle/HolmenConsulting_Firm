<template>
  <footer class="bg-gray-100 text-gray-800 py-12">
    <div class="container mx-auto px-4">
      <!-- Top Section -->
      <div class="flex flex-wrap justify-between items-start">
        <!-- Logo and Address -->
        <div class="w-full sm:w-1/4 mb-8 sm:mb-0">
          <img src="../../assets/Logo/Holmen logo.svg" alt="Holmen Consulting Logo" class="h-10 mb-6">
          <p class="text-sm mb-1 font-bold">8/10 Broad Street, Marina, Lagos</p>
          <a href="mailto:solutions@holmenconsult.com" class="text-sm font-semibold text-blue-600 hover:underline block mb-1">
            solutions@holmenconsult.com
          </a>
          <p class="text-sm mb-4 font-bold">+234 901 072 6699</p>
          <button class="bg-purple-500 text-white px-6 py-2 rounded-md font-bold">
            Get In Touch
          </button>
        </div>

        <!-- Links Section -->
        <div class="w-full sm:w-1/4 mb-8 sm:mb-0">
          <ul class="space-y-2">
            <li><a href="#" class="hover:underline text-sm font-bold">Our Approach</a></li>
            <li><a href="#" class="hover:underline text-sm font-bold">Recruiting & Matching</a></li>
            <li><a href="#" class="hover:underline text-sm font-bold">Working With Us</a></li>
          </ul>
        </div>
        <div class="w-full sm:w-1/4 mb-8 sm:mb-0">
          <ul class="space-y-2">
            <li><a href="#" class="hover:underline text-sm font-bold">Our Services</a></li>
            <li><a href="#" class="hover:underline text-sm font-bold">About Us</a></li>
            <li><a href="#" class="hover:underline text-sm font-bold">Contact Us</a></li>
          </ul>
        </div>
        <div class="w-full sm:w-1/4">
          <ul class="space-y-2">
            <li><a href="#" class="hover:underline text-sm font-bold">Privacy Policy</a></li>
            <li><a href="#" class="hover:underline text-sm font-bold">Terms & Conditions</a></li>
          </ul>
          <div class="mt-4">
            <input
              type="email"
              placeholder="Enter your email"
              class="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none"
            />
            <button class="bg-purple-500 text-white px-6 py-2 rounded-md mt-3 w-full font-bold">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <!-- Bottom Section -->
      <div class="border-t mt-8 pt-4 flex flex-wrap justify-between items-center text-sm text-gray-600">
        <!-- Links -->
        <div class="flex flex-wrap gap-4">
          <a href="#" class="hover:underline font-bold">Terms of Service</a>
          <a href="#" class="hover:underline font-bold">Privacy Policy</a>
          <a href="#" class="hover:underline font-bold">Security</a>
          <a href="#" class="hover:underline font-bold">Sitemap</a>
        </div>
        <!-- Copyright -->
        <p class="mt-4 sm:mt-0 font-bold">© 2025 Holmen Consulting. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "ExactFooter",
};
</script>

<style scoped>
/* Ensure proper spacing and alignment for all elements */
</style>
