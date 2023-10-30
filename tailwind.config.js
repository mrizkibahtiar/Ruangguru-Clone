/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html, js}"],
  theme: {
    fontFamily: {
      'Inter': ['Inter']
    },
    extend: {
      animation: {
        ganti: 'ganti 2s ease-in-out infinite'
      },
      keyframes: {
        ganti: {
          '0%, 100%': { transform: 'scale(0)' },
          '50%': { transform: 'scale(1)' }
        }
      }
    },
  },
  plugins: [],
}
