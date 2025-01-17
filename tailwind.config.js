/** @type {import('tailwindcss').Config} */
export const content = [
  "./index.html",
  "./src/**/*.{vue,js,ts,jsx,tsx}",
  "./app/**/*.{vue,js,ts,jsx,tsx}" // Aggiungi questa riga se i tuoi file sono nella directory app
];
export const theme = {
  extend: {},
};
export const plugins = [];