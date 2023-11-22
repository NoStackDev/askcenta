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
        overlayShow: "overlayShow 200ms ease-in-out",
        contentShow: "contentShow 200ms ease-in-out",
        contentShowMd: "contentShowMd 150ms ease-in-out",
        dialogFirstContentShow: "dialogFirstContentShow 200ms ease-in-out",
        dialogHide: "dialogHide 200ms ease-in-out",
        dialogHideMd: "dialogHideMd 200ms ease-in-out",
        sidebarOverlayShow: "sidebarOverlayShow 200ms ease-in-out",
        "hamburger-up-rotate": "hamburger-up-rotate 200ms ease-out both",
        "hamburger-down-rotate": "hamburger-down-rotate 200ms ease-out both",
        "hamburger-stroke-hide":
          "hamburger-stroke-hide 200ms ease-out forwards",
      },

      gridTemplateColumns: {
        "categories-card-cols-3": "repeat(3, 1fr)",
        "categories-card-cols-6": "repeat(6, 1fr)",
        "requests-cards-2": "repeat(2, minmax(0, 1fr))",
      },

      gridTemplateRows: {
        masonry: "masonry",
      },

      boxShadow: {
        "category-card": "0px 8px 16px -4px rgba(22, 34, 51, 0.08)",
        "request-card":
          "0px 16px 24px 0px #16223314, 0px 4px 8px -4px #16223314",
        "place-a-request": "2px 4px 8px 0px #0000004D",
        "response-card":
          "0px 16px 24px 0px rgba(22, 34, 51, 0.08), 0px 4px 8px -4px rgba(22, 34, 51, 0.08)",
      },

      backgroundImage: {
        "request-gradient":
          "linear-gradient(84.35deg, #6356E5 -10.98%, #4FC1E9 118.31%)",
        "index-topbar-bg": "url('/images/index_topbar_bg.svg')",
      },

      screens: {
        "320screen": "320px",
        "1104screen": "1104px",
      },

      keyframes: {
        overlayShow: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },

        sidebarOverlayShow: {
          from: {
            bottom: "-100%",
          },
          to: {
            bottom: "-72px",
          },
        },

        contentShow: {
          from: {
            transform: "translateY(100%)",
          },
          to: {
            transform: "translateY(0)",
          },
        },
        contentShowMd: {
          from: {
            opacity: "0",
            transform: "translate(-50%, -48%) scale(0.5)",
          },
          to: { opacity: "1", transform: "translate(-50%, -50%) scale(1)" },
        },

        dialogFirstContentShow: {
          "0%": {
            display: "block",
          },
          "1%": {
            left: "-100%",
          },
          "100%": {
            left: "0%",
          },
        },

        dialogHide: {
          from: {
            transform: "translateY(0%)",
          },
          to: {
            transform: "translateY(100%)",
          },
        },

        dialogHideMd: {
          from: {
            opacity: "1",
            transform: "translate(-50%, -50%) scale(1)",
          },
          to: { opacity: "0", transform: "translate(-50%, -48%) scale(0.5)" },
        },

        "hamburger-up-rotate": {
          "0%": {
            "transform-box": "fill-box",
            "transform-origin": "center",
            "animation-timing-function":
              "cubic-bezier(0.16, -0.88, 0.97, 0.53)",
            transform: "translateY(0px)",
          },

          "30%": {
            "transform-box": "fill-box",
            "transform-origin": "center",
            "animation-timing-function": "cubic-bezier(0.34, 1.56, 0.64, 1)",
            transform: "translateY(-10px)",
          },
          "100%": {
            "transform-box": "fill-box",
            "transform-origin": "center",
            transform: "translateY(-10px) rotate(45deg) scale(0.9)",
          },
        },

        "hamburger-down-rotate": {
          "0%": {
            "transform-box": "fill-box",
            "transform-origin": "center",
            "animation-timing-function":
              "cubic-bezier(0.16, -0.88, 0.97, 0.53)",
            transform: "translateY(0px)",
          },
          "30%": {
            "transform-box": "fill-box",
            "transform-origin": "center",
            "animation-timing-function": "cubic-bezier(0.34, 1.56, 0.64, 1)",
            transform: "translateY(10px)",
          },
          "100%": {
            "transform-box": "fill-box",
            "transform-origin": "center",
            transform: "translateY(10px) rotate(-45deg) scale(0.9)",
          },
        },

        "hamburger-stroke-hide": {
          "29%": {
            opacity: "1",
          },
          "30%": {
            opacity: "0",
          },
          "100%": {
            opacity: "0",
          },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
