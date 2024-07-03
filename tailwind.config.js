/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "eviolet": {
          50: "#f5f0ff",
          100: "#ede4ff",
          200: "#ddcdff",
          300: "#c5a6ff",
          400: "#ab73ff",
          500: "#943bff",
          600: "#8c14ff",
          700: "#8000ff",
          800: "#6c01d6",
          900: "#5903af",
          950: "#360077",
        },
      }
    },
  },
  plugins: [],
};
