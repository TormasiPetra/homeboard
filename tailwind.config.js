/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{svelte,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Rubik', 'Arial', 'sans-serif'],
      },
    },
    
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        custom: {
          primary: "#26337B",
          "primary-content": "#ffffff",
          secondary: "#5A75BF",
          "secondary-content": "#1C1F33",
          accent: "#F49F0A",
          neutral: "#FFFBFF",
          "base-100": "#ffffff",
          info: "#BFCDE0",
          success: "#857885",
          warning: "#00ff00",
          error: "#ff0000",
          talon: "#EBEBD3",
          text: "#2A2E43",
          "buttonBg": "#4B61AB",
        },
      },
    ],
  },
};
