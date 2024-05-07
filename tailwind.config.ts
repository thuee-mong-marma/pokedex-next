import type { Config } from "tailwindcss";

const config: Config = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "pokemon-bg": "url('/images/background.jpg')",
      },
      colors: {
        normal: "var(--normal)",
        fire: "var(--fire)",
        water: "var(--water)",
        "grass": "var(--grass)",
        electric: "var(--electric)",
        ice: "var(--ice)",
        fighting: "var(--fighting)",
        poison: "var(--poison)",
        ground: "var(--ground)",
        flying: "var(--flying)",
        psychic: "var(--psychic)",
        bug: "var(--bug)",
        rock: "var(--rock)",
        ghost: "var(--ghost)",
        dark: "var(--dark)",
        dragon: "var(--dragon)",
        steel: "var(--steel)",
        fairy: "var(--fairy)",
      },
    },

  },
  plugins: [],
};
export default config;
