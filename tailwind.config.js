/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Darker Grotesque", "sans-serif"],
      },

      // Define custom colors

      colors: {
        Gray: "#6F6565",
        Pale_lavender_pink: "#FACDFF",
        Medium_orchid_purple: "#B262BA",
      },
    },
  },
};