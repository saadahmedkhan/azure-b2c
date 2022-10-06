/** @type {import("tailwindcss").Config} */

const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  content: [
    "./src/index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    fontFamily: {
      sans: ["Mulish", ...defaultTheme.fontFamily.sans]
    },
    colors: {
      transparent: "transparent",
      yellow: {
        light: "#FAFAE8",
        DEFAULT: "#FDEC99",
        dark: "#FAD000"
      },
      white: "#FFFFFF",
      black: "#231F20",
      gray: {
        100: "#F3F3F3",
        200: "#EEEEEE",
        300: "#DEDEDE",
        400: "#D9D9D9",
        500: "#AEAEAE",
        600: "#8D8D8D",
        700: "#5D5D5D",
        800: "#353535",
        900: "#231F20"
      },
      red: {
        100: "#EED2D3",
        300: "#DCA5A7",
        400: "#CB787B",
        700: "#B94B4F",
        900: "#A81E23"
      }
    }
  },
  plugins: []
}
