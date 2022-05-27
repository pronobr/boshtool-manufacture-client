module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/src/images/banner.jpg')",
      }
    },
  },
  plugins: [require("daisyui")],
}
