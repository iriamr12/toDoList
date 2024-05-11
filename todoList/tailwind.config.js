/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        C1B263B: '#1B263B',
        C0D1B2A: '#0D1B2A',
        C415A77: '#415A77',
        C778DA9: '#778DA9',
        CE0E1DD: '#E0E1DD',
      }
    },
  },
  plugins: [],
}