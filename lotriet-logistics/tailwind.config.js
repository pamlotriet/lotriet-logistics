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
        'shadow-gold': '0px 2px 8px rgba(165, 142, 52, 0.5)',
        'card-primary': '0 6px 20px rgba(165, 142, 52, 0.7)', 
        'card-secondary': '0 15px 30px rgba(0, 0, 0, 0.2)',
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
      keyframes: {
        'drive-in': {
          '0%': { transform: 'translateX(-60vw)', opacity: '0' },  // Start off-screen
          '100%': { transform: 'translateX(0)', opacity: '1' },  // End at the original position
        },
        'float-in': {
          '0%': { transform: 'translateX(160)', opacity: '0' },  // Start off-screen
          '100%': { transform: 'translateX(0)', opacity: '1' },  // End at the original position
        },
      },
      animation: {
        'drive-in-1': 'drive-in 2s ease-in-out forwards',
        'drive-in-2': 'drive-in 2.5s ease-in-out  forwards',
        'drive-in-3': 'drive-in 3s ease-in-out  forwards',
        'float-in':'float-in 3s ease-in-out  forwards'
      },
      transform: {
        'scale-x-[-1]': 'scaleX(-1)',
    },
    },
  },
  plugins: [
  ],
}