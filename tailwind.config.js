/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      backgroundColor: {
        main: "var(--main-bg)",
        soft: "var(--soft-bg)",
        dark: "var(--dark-bg)"
      },
      textColor: {
        main: "var(--main-color)",
        soft: "var(--soft-color)",
        dark: "var(--dark-color)"
      },
      borderColor: {
        soft: "var(--soft-bg)"
      }
    },
  },
  plugins: [],
}

