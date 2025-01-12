/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "main-background": " url('./public/glassesImage/background.jpg')",
      },
    },
  },
  plugins: [],
};
