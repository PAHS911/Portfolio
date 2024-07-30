/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "selector",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        ml: "660px",
        mx: "950px",
        sm: "330px",
      },
    },
  },
  plugins: [],
};
