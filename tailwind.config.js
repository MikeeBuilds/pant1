/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#000",
        white: "#fff",
        gray: "rgba(255, 255, 255, 0.8)",
      },
      fontFamily: {
        commodus: "Commodus",
        metropolis: "Metropolis",
        arial: "Arial",
      },
      borderRadius: {
        xl: "20px",
      },
    },
    fontSize: {
      "11xl": "30px",
      "3xl": "22px",
      mini: "15px",
      "105xl-7": "124.7px",
      "lg-3": "18.3px",
      "38xl-2": "57.2px",
      "47xl": "66px",
      "61xl": "80px",
      lg: "18px",
      xl: "20px",
      lgi: "19px",
      "14xl": "33px",
      "9xl-3": "28.3px",
      "16xl": "35px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
