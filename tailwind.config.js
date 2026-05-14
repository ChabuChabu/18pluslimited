/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./gatsby-browser.js"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#eefbf5",
          100: "#d8f3e3",
          200: "#b7e2c6",
          300: "#8ed0a6",
          400: "#5abd83",
          500: "#0097d7",
          600: "#117cae",
          700: "#0f5d83",
          800: "#0f5f59",
          900: "#06314b",
          950: "#061a2b"
        },
        accent: {
          500: "#ef4e4e",
          600: "#d93f3f"
        }
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "sans-serif"]
      },
      boxShadow: {
        soft: "0 20px 70px -30px rgba(6, 26, 43, 0.35)"
      }
    }
  },
  plugins: [require("@tailwindcss/forms")]
};
