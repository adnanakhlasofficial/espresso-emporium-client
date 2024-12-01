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
        'normal-gray': "#858484",
        'deep-black': "#1B1A1A",
        'dark-brown': "#331A15",
        'off-white': "#F4F3F0",
        'blue-gray': "#374151"
      },
      backgroundImage: {
        'navbg': "url('/images/navbg.jpg')",
        'bannerbg': "url('/images/bannerbg.png')",
        'sectionbg': "url('/images/sectionbg.png')",
        'formbg': "url('/images/formbg.png')"
      },
      fontFamily: {
        'raleway': ["Raleway", "sans-serif"],
        'rancho': ["Rancho", "cursive"]
      },
      dropShadow: {
        'text-xl': "2px 2px 5px #56413D", 
        'text-2xl': '2px 2px 5px #404040',
        'text-3xl': '2px 2px 5px #797F89',
      }
    },
  },
  plugins: [],
}