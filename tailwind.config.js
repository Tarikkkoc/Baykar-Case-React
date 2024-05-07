/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      mobile: { max: "519px" },
      tablet: { max: "1315px", min: "520px" },
      desktop: { min: "1316px" },
    },
    extend: {
      backgroundImage: {
        headerGradient:
          "linear-gradient(to right bottom, white 50%, rgb(236,241,206) 50%)",
      },
      colors: {
        customRed: "#78350F",
        customBlue: "rgba(15, 23, 42, 1)",
        customGreen: "rgba(71, 85, 105, 1)",
        customWhite: "rgba(255, 255, 255, 1)",
        customWhite2: "rgba(226, 232, 240, 1)",
      },
      padding: {
        custom5: "5.5px",
      },
      fontSize: {
        Heading1L: [
          "96px",
          {
            lineHeight: "105.6px",
            letterSpacing: "-0.01em",
            fontWeight: "800",
          },
        ],
        Heading1: [
          "72px",
          {
            lineHeight: "79.2px",
            letterSpacing: "-0.01em",
            fontWeight: "800",
          },
        ],
        Heading2: [
          "56px",
          {
            lineHeight: "61.6px",
            letterSpacing: "-0.01em",
            fontWeight: "800",
          },
        ],
        Heading5: [
          "32px",
          {
            lineHeight: "35.2px",
            letterSpacing: "-0.01em",
            fontWeight: "700",
          },
        ],
        Heading6: [
          "24px",
          {
            lineHeight: "26.4px",
            letterSpacing: "-0.01em",
            fontWeight: "700",
          },
        ],
        BodyXXL: [
          "24px",
          {
            lineHeight: "38.4px",
            letterSpacing: "-0.01em",
            fontWeight: "400",
          },
        ],
        BodyXL: [
          "20px",
          {
            lineHeight: "36px",
            letterSpacing: "-0.01em",
            fontWeight: "400",
          },
        ],
        BodyL: [
          "18px",
          {
            lineHeight: "28.8px",
            letterSpacing: "-0.01em",
            fontWeight: "400",
          },
        ],
        BodyM: [
          "16px",
          {
            lineHeight: "22.4px",
            letterSpacing: "-0.01em",
            fontWeight: "400",
          },
        ],
        SubtitleXL: [
          "20px",
          {
            lineHeight: "22px",
            letterSpacing: "-0.01em",
            fontWeight: "500",
          },
        ],
        SubtitleM: [
          "16px",
          {
            lineHeight: "17.6px",
            letterSpacing: "-0.01em",
            fontWeight: "500",
          },
        ],
        ButtonXL: [
          "24px",
          {
            lineHeight: "24px",
            letterSpacing: "-0.01em",
            fontWeight: "700",
          },
        ],
        ButtonL: [
          "20px",
          {
            lineHeight: "24px",
            letterSpacing: "-0.01em",
            fontWeight: "500",
          },
        ],
        ButtonM: [
          "16px",
          {
            lineHeight: "24px",
            letterSpacing: "-0.01em",
            fontWeight: "500",
          },
        ],
      },
    },
  },
  plugins: [],
};
