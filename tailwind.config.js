module.exports = {
  content: ["./public/**/*.{html,js}"],
  plugins: [require("daisyui"), require("@tailwindcss/typography")],
  daisyui: {
    themes: ["winter", "dark", "garden"],
  },
};
