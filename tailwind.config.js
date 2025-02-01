/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.html"],
  theme: {
    extend: {
      fontFamily: {
        satoshi: ['Satoshi', 'sans-serif'],
        poppins: ["Poppins", "sans-serif"],
      },

    screens: {
        'xs': '480px',  // Custom small screen
      },
    },
  },
  plugins: [],
}

