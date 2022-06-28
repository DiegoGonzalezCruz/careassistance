/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Comfortaa: ['Comfortaa', 'cursive'],
        FiraSans: ['Fira Sans', 'sans-serif'],
      }
    },
  },
  plugins: [
    require("daisyui"),
    require('@tailwindcss/forms')
  ],
  daisyui: {
    styled: true,
    themes: [
      {
        mytheme: {
          primary: "#6265F3",
          secondary: "#9D3FD7",
          accent: "#FBAE48",
          neutral: "#4d4d4c",
          "base-100": "#ffffff",
          "base-200": "#181874",
        },
      }
    ],
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "dark",
  },
}
