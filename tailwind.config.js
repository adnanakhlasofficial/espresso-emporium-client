/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': "#E3B577",
        'dark-gray': "#242222", 
      },
      backgroundImage: {
        'navbg': "url('/images/navbg.jpg')",
        'bannerbg': "url('/images/bannerbg.png')",
      },
      fontFamily: {
        'raleway': ["Raleway", "sans-serif"],
        'rancho': ["Rancho", "cursive"]
      }
    },
  },
  plugins: [],
}