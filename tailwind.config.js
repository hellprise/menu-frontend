/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
      },
      colors: {
        // primary: "#DDE0BD",
        primary: "#38A3A5",
        secondary: "#D4A276",
        orange: "#f0c808",
        gray: { dim: "#726E75", taupe: "#F2F2F2" },
      },
      fontFamily: {
        climate: ["Climate Crisis", "cursive"],
        nunito: ["Nunito", "sans-serif"],
      },
      gridTemplateColumns: {
        menus: "1fr 15% 1fr",
      },
    },
  },
  plugins: [],
};
