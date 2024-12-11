/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "turquesa-profundo": "#20B2AA",
        "coral-neon": "#FF4B4B",
        "grafito-suave": "36454F",
      },
    },
  },
  plugins: [],
};
