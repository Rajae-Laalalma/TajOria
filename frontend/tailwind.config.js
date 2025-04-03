/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Playfair: ['Playfair Display', 'serif'],
      },
      colors: {
      customGray: '#F8F3E9',
    },
    },
    
  },
  plugins: [],
}