/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    colors: {
      black: '#000000',
      white: '#FFFFFF',
      gold:'#A58E34'
    },
    extend: {
      boxShadow: {
        'white-glow': '0 0 10px 2px rgba(255, 255, 255, 0.75)',
        'custom-blue': '0px 4px 8px rgba(1, 36, 109, 0.5)', // Custom shadow color
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [
  ],
}