/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        '3/4':'3fr 1fr',
        '1/2':'2fr 1fr 1fr'
        
      }
    },
  },
  plugins: [],
}
