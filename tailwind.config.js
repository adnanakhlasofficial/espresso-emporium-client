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
        'deep-black': "#1B1A1A",
        'dark-brown': "#331A15"
      },
      backgroundImage: {
        'navbg': "url('/images/navbg.jpg')",
        'bannerbg': "url('/images/bannerbg.png')",
      },
      fontFamily: {
        'raleway': ["Raleway", "sans-serif"],
        'rancho': ["Rancho", "cursive"]
      },
      dropShadow: {
        'text-xl': "2px 2px 5px #56413D", 
        'text-2xl': '2px 2px 5px #404040',
      }
    },
  },
  plugins: [],
}