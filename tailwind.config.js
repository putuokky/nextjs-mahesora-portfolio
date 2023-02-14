/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'white': '#FFFFFF',
      'black': '#000000',
      'primary': '#E65616',
      'secondary': '#D1310A',
      'third': '#898989',
      'fourth': '#FFFFFF',
      'fiveth': '#303030',
      'sixth': '#292929',
      'seventh': '#1A1A1A',
      'eighth': '#1F1F1F',
    },
  },
  plugins: [],
}
