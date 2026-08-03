import { Colors } from "./constants/Colors";

/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ["./App/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {

      colors:{
        light:{
          primary: Colors.light.primary,
          secondary: Colors.light.secondary,
          tertiary: Colors.light.tertiary,
          text: Colors.light.text,
          background: Colors.light.background
        },
        dark:{
          primary: Colors.dark.primary,
          secondary: Colors.dark.secondary,
          tertiary: Colors.dark.tertiary,
          text: Colors.dark.text,
          background: Colors.dark.background
        }
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