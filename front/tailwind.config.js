const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors:{
      'light.blue':"#181ec7",
      'grays':{
        'light':"#e3e3e3",
        'mid':"#706f75",
        'dark':"#333333"},
      gray: colors.gray,
      black: colors.black,
      white: colors.white,
      },
    fontFamily:{
      confortaa:['Comfortaa','sans-serif'],
      bitter:['Bitter','sans-serif'],
      yesevaOne:['Yeseva+One',' serif'],
    }
  },
  plugins: [],
}