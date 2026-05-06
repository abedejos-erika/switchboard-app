/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-bg': '#081321',
        'brand-blue': '#3e73d5',
        'brand-blue-light': '#f0f6ff',
        'border-color': '#e1e1e6',
        'cool-white': '#e9edf4',
        'text-primary': '#181b1f',
        'text-secondary': '#5b6271',
        'text-gray': '#3e434d',
        'text-dark': '#324054',
        'steel': '#b1b7c5',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

