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
      animation: {
        spotlight: "spotlight 2s ease .75s 1 forwards",
        scroll:
          "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
      },
      keyframes: {
        spotlight: {
          "0%": {
            opacity: "0",
            transform: "translate(-72%, -62%) scale(0.5)",
          },
          "100%": {
            opacity: "1",
            transform: "translate(-50%,-40%) scale(1)",
          },
        },
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
      },
    },
    fontFamily: {
      marxiana: ["TT Marxiana Antiqua", "sans-serif"],
    },
  },
  plugins: [require("tailwindcss-animate")],
};

// function addVariablesForColors({ addBase, theme }: any) {
//   let allColors = flattenColorPalette(theme("colors"));
//   let newVars = Object.fromEntries(
//     Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
//   );

//   addBase({
//     ":root": newVars,
//   });
// }

export default config;
