/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      fontFamily: {
        spectrum: ["SpectrumSans", "sans"],
        "spectrum-bold": ["SpectrumSansBold", "sans"],
        "spectrum-medium": ["SpectrumSansMedium", "sans"],
        "spectrum-light": ["SpectrumSansLight", "sans"],
      },
      backgroundImage: {
        "hero-sm":
          "linear-gradient(to right bottom, rgba(255, 255, 255 ,0), rgba(255, 255, 255, 1)), url('../public/hero-sm.jpeg')",
      },
      screens: {
        ld: "992px",
      },
    },
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("prettier-plugin-tailwindcss"),
  ],
};
