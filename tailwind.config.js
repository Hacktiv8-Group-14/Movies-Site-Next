/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        red: "#E50914",
        secondary: {
          red: "#B81D24",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
