/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-alt": "#1A1E1F",
        secondary: "#FACD66",
        gray: "rgba(239, 238, 224, 0.25)",
        light: "#EFEEE0",
        dark: "#1D2123",
        primary: "#A4C7C6",
        alt: "#A4C7C6",
      },
      gridTemplateColumns: {
        main: "repeat(13, minmax(0, 1fr))",
      },
    },
  },
  plugins: [],
};
