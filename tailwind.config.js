/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        albertus: ['AlbertusNova', 'sans-serif'],
        cursive: ['Birthstone', 'sans-serif'],
      }
    },
  },
  daisyui: {
    themes: ["cupcake", "light", "dark", "garden", "pastel"]
  },
  plugins: [require("daisyui")],
}