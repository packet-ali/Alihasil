export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    extend: {

      colors: {

        primary: "#16A34A",

        secondary: "#22C55E",

        earth: "#A16207",

        soft: "#F6FFF7",

        darkgreen: "#14532D",
      },

      borderRadius: {

        card: "24px",

        section: "32px",
      },

      boxShadow: {

        card:
          "0 4px 15px rgba(0,0,0,.06)",

        soft:
          "0 10px 25px rgba(0,0,0,.08)",
      },
    },
  },

  plugins: [],
};
