/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        gilroy: ["Gilroy", "sans-serif"],
        sarala: ["Sarala", "sans-serif"],
        productSans: ["Product Sans", "sans-serif"],
      },
      colors: {
        black: "var(--black-color)",
        primary: "rgba(216, 25, 30)",
        secondary: "var(--secondary-color)",
        grayText: "var(--gray-text-color)",
        grayLabel: "var(--gray-label-color)",
        yellowAccent: "Var(--yellow-color)",
      },
      backgroundImage: {
        "white-pattern": "url('/src/assets/images/bg-pattern-white.svg')",
        "black-pattern": "url('/src/assets/images/bg-pattern-black.svg')",
      },
    },
  },
  plugins: [],
};
