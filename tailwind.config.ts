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
        },
        green: "#C2C884",
        cream: "#FEF5EB",
      },
      fontFamily: {
        marxiana: ["TT Marxiana Antiqua", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
