/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./public/index.html"],
  theme: {
    extend: {
      fontFamily: {
        mont: "'Montserrat', sans-serif",
      },
      backgroundImage: {
        home: "url('./images/bg-intro-desktop.png')",
      },
    },
  },
  plugins: [],
};
