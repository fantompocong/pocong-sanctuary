/** @type {import('tailwindcss').Config} */
const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        primary: ["monospace", ...fontFamily.sans],
      },
      colors: {
        darkPrimary: "#121212",
        darkSecondary: "#212121",
        lightPrimary: "#EDF6F9",
        lightSecondary: "#FFFFFF",
        greenAccent: "#00FF80",
        redAccent: "#d62424",
        yellowAccent: "#F2BB02",
        grayAccent: "#413C58",
      },
    },
  },
  plugins: [],
};
