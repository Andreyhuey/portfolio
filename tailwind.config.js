/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      primary: "Orbitron",
      secondary: "Rajdhani",
      tertiary: "Aldrich",
    },
    extend: {
      colors: {
        primary: "#0a0a0a",
        accent: "#B809C3",
      },
    },
    container: {
      padding: {
        DEFAULT: "15px",
      },
    },
    screens: {
      xs: "320px",
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
    },
  },
  plugins: [],
};
