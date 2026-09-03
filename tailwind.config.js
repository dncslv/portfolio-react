/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          900: "#0B1220",
          800: "#131B2C",
          700: "#1D2740",
        },
        surface: {
          DEFAULT: "#FFFFFF",
          soft: "#F7F8FB",
          muted: "#F0F2F7",
        },
        border: {
          DEFAULT: "#E4E7EF",
        },
        accent: {
          DEFAULT: "#3B4FE0",
          dark: "#2C3BB8",
          soft: "#EEF0FD",
        },
        data: { DEFAULT: "#0E8F82", soft: "#E5F5F3" },
        qa: { DEFAULT: "#C77A1F", soft: "#FBF0E1" },
        web: { DEFAULT: "#7A4FE0", soft: "#F1ECFD" },
      },
      fontFamily: {
        display: ["'Plus Jakarta Sans'", "sans-serif"],
        body: ["'Plus Jakarta Sans'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      boxShadow: {
        card: "0 1px 2px rgba(15, 23, 42, 0.04), 0 8px 24px -12px rgba(15, 23, 42, 0.10)",
        cardHover: "0 4px 8px rgba(15, 23, 42, 0.06), 0 16px 32px -12px rgba(15, 23, 42, 0.16)",
      },
      maxWidth: {
        content: "1180px",
      },
    },
  },
  plugins: [],
};
