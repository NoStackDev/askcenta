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
        "requests-cards-2": "repeat(2, minmax(0, 1fr))",
      },
      
      gridTemplateRows: {
        "masonry": "masonry"
      },

      boxShadow: {
        "category-card": "0px 8px 16px -4px rgba(22, 34, 51, 0.08)",
        "request-card":
          "0px 16px 24px 0px #16223314, 0px 4px 8px -4px #16223314",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
