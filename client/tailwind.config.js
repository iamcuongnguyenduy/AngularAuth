/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}",
  "./node_modules/tw-elements/dist/js/**/*.js"],
  theme: {
    extend: {},
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
  // plugins: [require("prettier-plugin-tailwindcss")],
  
}

