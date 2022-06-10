module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#f9004d",
          secondary: "#f6f6f6",
          accent: "#ee076e",
          neutral: "#3d4451",
          "danger": "#C50707",
          "base-100": "#ffffff",
          
        },
      },
      "white",
      "cupcake",
    ],
  },



  plugins: [require("daisyui")],
}