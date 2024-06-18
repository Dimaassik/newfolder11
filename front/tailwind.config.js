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
      red: colors.red,
         },
    fontFamily:{
      comfortaa: ['Comfortaa', 'sans-serif'],
      bitter: ['Bitter', 'sans-serif'],
      pressstart: ['Press Start 2P', 'serif'],
      yeseva: ['Yeseva One', 'sans-serif'],
    }
  },
  plugins: [],
}