/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        x: "0px 0px 10px 2px rgba(0, 0, 0, 0.3)",
      },
      colors: {
        bottle: "#025728",
      },
    },
  },
  plugins: [],
};
