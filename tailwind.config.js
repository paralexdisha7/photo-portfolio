/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      logo: ["Cormorant Garamond"],
      outfit: ["Outfit", "serif"],
      italiana: ["italiana", "serif"],
      great: ["Great Vibes", "serif"],
    },
    colors: {
      yellow: "#FFF0BC",
      grey:'#2B2B2B',
      black:'#000',
      greyDark:'#0B0B0B'
    },
    screens: {
      sm: "340px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    backgroundImage: {
      "custom-image": "url('/background.png')",
    },
  },
  plugins: [],
};
