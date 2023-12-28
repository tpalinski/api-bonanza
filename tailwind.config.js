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
      }
    },
  },
  plugins: [],
}

