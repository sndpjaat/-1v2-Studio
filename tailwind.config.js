/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "Poppins": "sans-serif",
        "Orbitron": "sans-serif",
      },

      screens: {
        sm: "576px",
        md: "768px",
        lg: "992px",
        xl: "1200px",
      },
      backgroundImage: {
        'complex-gradient': 'linear-gradient(108.48deg,#ff1e2f 8.2%,#3ebfff 31.38%)',
      },

    },
  },
plugins: [],
}