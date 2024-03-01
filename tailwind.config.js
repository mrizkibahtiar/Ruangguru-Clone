/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html, js}", "./dist/js/index.js"],
  theme: {
    fontFamily: {
      'Inter': ['Inter']
    },
    extend: {
      animation: {
        munculBawah: 'munculBawah 1s ease-in-out 1',
        munculAtas: 'munculAtas 1s ease-in-out 1',
        sembunyiAtas: 'sembunyiAtas 1s ease-in-out 1',
        sembunyiBawah: 'sembunyiBawah 1s ease-in-out 1',
      },
      keyframes: {
        munculBawah: {
          '0%': { transform: 'translateY(-500px)' },
          // '25%': { transform: 'translateY(-300px)' },
          // '50%': { transform: 'translateY(-100px)' },
          '100%': { transform: 'translateY(0px)' }
        },
        sembunyiAtas: {
          '0%': { transform: 'translateY(0)' },
          // '25%': { transform: 'translateY(-300px)' },
          // '50%': { transform: 'translateY(-100px)' },
          '100%': { transform: 'translateY(-500px)' }
        },
        munculAtas: {
          '0%': { transform: 'translateY(500px)' },
          // '25%': { transform: 'translateY(-300px)' },
          // '50%': { transform: 'translateY(-100px)' },
          '100%': { transform: 'translateY(0px)' }
        },
        sembunyiBawah: {
          '0%': { transform: 'translateY(0px)' },
          // '25%': { transform: 'translateY(-300px)' },
          // '50%': { transform: 'translateY(-100px)' },
          '100%': { transform: 'translateY(500px)' }
        },
      }
    },
  },
  plugins: [],
}

