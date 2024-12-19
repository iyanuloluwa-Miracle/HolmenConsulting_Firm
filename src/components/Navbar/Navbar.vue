<template>
  <nav class="bg-white fixed w-full z-20 top-0 start-0">
    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <div>
        <img src="../../assets/Logo/Holmen logo.svg" alt="Holmen Logo" class="h-8 md:h-10" />
      </div>

      <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
        <button
          type="button"
          class="text-[#B262BA] dark:hover:text-white bg-[#E6B3E6] hover:bg-[#E6B3E6] focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold rounded-lg text-sm h-12 px-4 py-2 text-center dark:bg-[#E6B3E6] dark:hover:bg-[#B262BA] dark:focus:ring-[#E6B3E6]"
        >
          Get in touch
        </button>

        <button
          @click="toggleMenu"
          type="button"
          class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-sticky"
          aria-expanded="false"
        >
          <span class="sr-only">Open main menu</span>
          <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>
      </div>

      <div :class="{'hidden': !isMenuOpen, 'block': isMenuOpen}" class="items-center justify-between w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
        <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-[#E6B3E6] rounded-lg  md:space-x-9 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white">
          <li class="block py-2 px-3 text-gray-700  rounded md:bg-transparent md:p-0 md:dark:text-gray-400 font-bold dark:hover:text-[#4E4545]">
            <router-link to="/" class="nav-link">Home</router-link>
          </li>
          <li class="block py-2 px-3 text-gray-700 rounded md:bg-transparent md:p-0 md:dark:text-gray-400 font-bold dark:hover:text-[#4E4545]">
            <router-link to="/about">About</router-link>
          </li>
          <li class="block py-2 px-3 text-gray-700 rounded md:bg-transparent md:p-0 md:dark:text-gray-400 font-bold dark:hover:text-[#4E4545]">
            <router-link to="/services">Solutions & Services</router-link>
          </li>
          <li class="block py-2 px-3 text-gray-700  rounded md:bg-transparent md:p-0 md:dark:text-gray-400 font-bold dark:hover:text-[#4E4545]">
            <router-link to="/projects">Projects</router-link>
          </li>
          <li class="block py-2 px-3 text-gray-700  rounded md:bg-transparent md:p-0 md:dark:text-gray-400 font-bold dark:hover:text-[#4E4545]">
            <router-link to="/contact">Contact</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isMenuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
  },
};
</script>