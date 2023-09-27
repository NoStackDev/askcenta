import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#6356E5",
        card: "#F3F6F6",
        white: "#FFFFFF",
        black: "#000000",
      },

      fontFamily: {
        roboto: ["var(--font-roboto)", "system-ui"],
        poppins: ["var(--font-poppins)", "system-ui"],
      },

      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },

      gridTemplateColumns: {
        "categories-card-cols-3": "repeat(3, 1fr)",
        "categories-card-cols-6": "repeat(6, 1fr)",
      },

      boxShadow: {
        "category-card": "0px 8px 16px -4px rgba(22, 34, 51, 0.08)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
