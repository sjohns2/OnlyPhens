/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index/html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      dropShadow: {
        'left': '3px 10px 15px -3px rgba(107, 125, 255, 0.6)',
      },
      boxShadow: {
        'lg': '3px 10px 15px -3px rgba(107, 125, 255, 0.6)',
      },
      colors: {
        cream: '#fffef7',
        lavender: '#d0d6ff',
        purple: '#b7c0ff',
        lurple: '#f7f8ff',
      },
    },
  },
  plugins: [],
}

