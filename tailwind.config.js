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
    extend: {
      colors: {
        'primary': '#CB602C',
        'secondary': '#B24510',
        'third': '#6A615D',
        'fourth': '#2C1E18',
        'fiveth': '#F2EFE7',
        'sixth': '#362720',
      },
    },
  },
  plugins: [],
}
