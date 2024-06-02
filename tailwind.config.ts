import type { Config } from "tailwindcss";
const plugin = require("tailwindcss/plugin");

const defaultTheme = require("tailwindcss/defaultTheme");
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // Configuring tha grid cols
      gridTemplateColumns: {
        "custom-layout": "0fr 2fr 0.5fr",
      },

      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },

    lightMode: {
      bg: "white",
      text: "black",
    },
    defaultMode: false,
    fontFamily: {
      crimson: ["Crimson Text", ...defaultTheme.fontFamily.serif],
    },
  },
  plugins: [
    // plugin(function ({ matchUtilities, theme }) {
    //   matchUtilities(
    //     {
    //       "translate-z": (value) => ({
    //         "--tw-translate-z": value,
    //         transform: ` translate3d(var(--tw-translate-x), var(--tw-translate-y), var(--tw-translate-z)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))`,
    //       }), // this is actual CSS
    //     },
    //     { values: theme("translate"), supportsNegativeValues: true }
    //   );
    // }),
  ],
};
export default config;
