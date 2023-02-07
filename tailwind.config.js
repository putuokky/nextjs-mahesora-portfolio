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
      'white': '#ffffff',
      'black': '#000000',
      // 'primary': '#13005A',
      // 'secondary': '#00337C',
      // 'third': '#1C82AD',
      // 'fourth': '#03C988',
      'primary': '#041C32',
      'secondary': '#04293A',
      'third': '#064663',
      'fourth': '#ECB365',
    },
  },
  plugins: [],
}
