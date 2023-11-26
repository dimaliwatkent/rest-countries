/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "2rem",
      },
      fontFamily: {
        sans: ["Nunito Sans", "sans-serif"],
      },
      colors: {
        "dark-elements": "hsl(209, 23%, 22%)",
        "dark-background": "hsl(207, 26%, 17%)",
        "dark-text": "hsl(0, 0%, 100%)",
        "light-text": "hsl(200, 15%, 8%)",
        "light-background": "hsl(0, 0%, 98%)",
        "light-elements": "hsl(0, 0%, 97%)",
      },
    },
  },
  plugins: [],
};
