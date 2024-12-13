/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./app/**/*.{vue,js,ts,jsx,tsx}"  // Aggiungi questa riga se i tuoi file sono nella directory app
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}