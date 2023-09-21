module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  content: ["./public/**/*.html", "./src/**/*.vue"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        darkblue: {
          // DEFAULT: "#050f2e",
          DEFAULT: "#081324",
        },
      },
      transitionTimingFunction: {
        cubic: "cubic-bezier(0.645, 0.045, 0.355, 1)",
      },
    },
  },
  variants: {},
  plugins: [],
};
