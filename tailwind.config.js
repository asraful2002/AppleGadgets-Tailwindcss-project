/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {},
    },
    extend: {
      screens: {},
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
