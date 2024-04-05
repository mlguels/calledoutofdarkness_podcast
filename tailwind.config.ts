import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        pink: {
          primary: "#CEA39D",
          secondary: "#F7CDD0",
          tertiary: "#FDEEE8",
          quatro: "#9E6781",
        },
        green: { primary: "#C2C884", secondary: "#879B78" },
        cream: "#FEF5EB",
        brown: {
          primary: "#794F42",
          secondary: "#996B5A",
        },
        blue: {
          primary: "#E2EFFA",
          secondary: "#93B0E1",
        },
      },
    },
    fontFamily: {
      marxiana: ["TT Marxiana Antiqua", "sans-serif"],
    },
  },
  plugins: [],
};

export default config;
