/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        burgundy: {
          DEFAULT: '#6E252C',
          light: '#8A323A',
          dark: '#521B21'
        },
        wine: {
          DEFAULT: '#2B1718',
          dark: '#1C0F10',
          light: '#3D2224'
        },
        gold: {
          DEFAULT: '#C7A66A',
          light: '#DBC08C',
          dark: '#B08E50'
        },
        cream: {
          DEFAULT: '#F5EBDD',
          light: '#FBF7F2',
          dark: '#E8DCB'
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Cinzel"', '"Plus Jakarta Sans"', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
