/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        'rem-60': '3.75rem', 
      },
      lineHeight: {
        'rem-60': '3.75rem', 
      },
      width: {
        'percent-5': '5%', 
        'percent-50': '50%', 
      },
    },
  },
  plugins: [],
}
