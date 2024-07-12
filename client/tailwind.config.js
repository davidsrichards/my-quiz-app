/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "four-colors":
          " linear-gradient(90deg, #BA68C8 10%, #FFB300 25% 25%, #FFF9C4 75% 80%, #F8BBD0)",
        "four-colors-hover":
          " linear-gradient(90deg, #F8BBD0 10%, #FFF9C4 25% 25%, #FFB300 75% 80%, #BA68C8)",
      },
    },
  },
  plugins: [],
};
