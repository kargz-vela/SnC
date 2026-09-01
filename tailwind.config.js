/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#F7F5F0',
          100: '#EEECE6',
          200: '#DCE4EE',
          300: '#DDD9D0',
          400: '#17345F',
          500: '#20201E',
          600: '#171717',
        },
        navy: '#17345F',
        slate: '#66635D',
        charcoal: '#171717',
        'off-white': '#F7F5F0',
        'blue-gray': '#66635D',
        'soft-gray': '#EEECE6',
      },
      fontFamily: {
        sans: ['DM Sans', 'Helvetica Neue', 'sans-serif'],
        display: ['Playfair Display', 'Georgia', 'serif'],
      },
      boxShadow: {
        'card': '0 12px 30px rgba(23, 23, 23, 0.06)',
        'card-hover': '0 16px 36px rgba(23, 23, 23, 0.09)',
        'lg': '0 12px 30px rgba(23, 23, 23, 0.08)',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}
