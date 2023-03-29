/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      // that is animation class
      animation: {
        fadeIn: 'fadeIn 700ms ease-in',
      },
      // that is actual animation
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 }
        }
      }
    }
  },
  plugins: [
    require('flowbite/plugin')
  ],
}