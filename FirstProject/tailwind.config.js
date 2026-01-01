/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,css}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        "techCareer-green": "#00C26D",
      },
      fontFamily: {
        testFont: ['Roboto', 'sans-serif'],
        open: ['Open Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
