/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'Dm': ['DM Sans", sans-serif'],
      'Roboto': ['Roboto", sans-serif']
    },
    extend: {
      backgroundImage: {
        'back-img': "url('./public/back.jpg')",
      },
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
      }
    },
  },
  plugins: [],
}