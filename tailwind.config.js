/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        '2/4':'3fr 1fr'
      }
    },
  },
  plugins: [],
}
