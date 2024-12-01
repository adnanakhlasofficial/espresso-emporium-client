/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'navbg': "url('/images/navbg.jpg')"
      },
      fontFamily: {
        'raleway': ["Raleway", "sans-serif"],
        'rancho': ["Rancho", "cursive"]
      }
    },
  },
  plugins: [],
}