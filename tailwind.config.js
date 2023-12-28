/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      "boxShadow": {
        "glow": '0 0 140 90 rgba(0, 0, 0, 0.3)'
      },
      "animation": {
        tilt: "tilt 10s infinite linear"
      },
      "keyframes": {
        tilt: {
          "0%, 50%, 100%": {
            transform: "rotate(0deg)"
          },
          "25%": {
            transform: "rotate(2deg)"
          },
          "75%": {
            transform: "rotate(-2deg)"
          }
        }
      }
    },
  },
  plugins: [],
}

