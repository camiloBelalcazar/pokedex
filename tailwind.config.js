/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      "xxs": "375px",
      "xs": "480px",
      "sm": "640px",
      "md": "768px",
      "lg": "1024px",
      "xl": "1280px",
      "2xl": "1536px",
      "3xl": "1700px",
    },
    extend: {
      colors: {
        primary: "#dd1a1a",
        secondary: "#0c0c0c",
      },
    },
  },
  plugins: [],
};

