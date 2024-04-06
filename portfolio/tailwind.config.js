/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.html", "./src/**/*.jsx", "./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        "primary-black": "rgb(10, 10, 10)",
      },
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};
