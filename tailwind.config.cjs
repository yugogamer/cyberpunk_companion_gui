/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  darkMode: 'class',
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    colors: {
      primary: {
        dark: '#29132e',
        light: '#f393f5f',
      },
      secondary: {
        dark: '#321450',
        light: '#6a7e6a',
      },
      tertiary: {
        dark: "#860029",
        light: "#ffe69d",
      },
      quaternary: {
        dark: "#de004e",
        light: "#ff9760",
      },
      quinary: {
        dark: "#f887ff",
        light: "#e96d5e",
      },
      text:{
        dark: "#fffffe",
        light: "#000000",
      }
    }
  },
  plugins: [],
}
