/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html, js}", "./dist/js/index.js"],
  theme: {
    fontFamily: {
      'Inter': ['Inter']
    },
    extend: {
      animation: {
        muncul: 'muncul 1s ease-in-out 1',
        sembunyi: 'sembunyi 1s ease-in-out 1'
      },
      keyframes: {
        muncul: {
          '0%': { transform: 'translateY(-500px)' },
          // '25%': { transform: 'translateY(-300px)' },
          // '50%': { transform: 'translateY(-100px)' },
          '100%': { transform: 'translateY(0px)' }
        },
        sembunyi: {
          '0%': { transform: 'translateY(0)' },
          // '25%': { transform: 'translateY(-300px)' },
          // '50%': { transform: 'translateY(-100px)' },
          '100%': { transform: 'translateY(-500px)' }
        }
      }
    },
  },
  plugins: [],
}

