/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ["./App/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {

      colors:{
        primary:'rgb(189,107,77)',
        secondary: 'rgb(230,220,220)',
        background: 'rgb(251,233,219)'


      },

      fontFamily:{
        'poppins-semibold': ['Poppins-SemiBold','sans-serif'],
        'poppins-medium': ['Poppins-Medium','sans-serif'],
        'nunito-regular': ['Nunito-Regular','sans-serif']

      }
    },
  },
  plugins: [],
}