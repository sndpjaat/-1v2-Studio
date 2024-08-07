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
      backgroundColor: {
        'complex-gradient': 'linear-gradient(108.48deg,#ff1e2f 8.2%,#3ebfff 31.38%)',
        'accordion_Color': 'linear-gradient(0deg, #9E0000 -14.1%, #FF1212 123.08%),',
        'linear_Gradient': 'linear-gradient(108.48deg, #FF1E2F 8.2%, #3EBFFF 31.38%),',
        // "skyborder": '#3EBFFF',
        // "blur_black": '#FFFFFF08',
        'custom_red_gradient': 'linear-gradient(0deg, #9E0000 100%, #FF1212 100%)',
      },

      backgroundSize: {
        '100%': "100% 100%"
      },

      backgroundImage: {
        headerBgpic: `url("./assets/image/png/headerBgpic.png")`,
        featuredBgImg: `url("./assets/image/webp/featuredBgImg.webp")`,
        impactBg: `url("./assets/image/webp/impactBg.Img.webp")`,
        AccordianImg: `url("./assets/image/webp/AccordianImg.webp")`,
        fireplaceBgimg: `url("./assets//image/png/fireplaceBgimg.png")`,
        suscribeBgImg: `url("./assets//image/png/suscribeBgImg.png")`,
        footerBgImg: `url("./assets/image/webp/footerBgImg.webp")`,
        btnBody: `url("./assets/image/png/btnBody.png")`,



      },
    },
  },
  plugins: [],
}

