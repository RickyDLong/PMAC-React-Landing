/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors:{
        'ulm_red': '#862633',
        'ulm_maroon': '#3B0000',
        'ulm_logo_red': '#6F0129'
      }
    },
  },
  plugins: [],
}
