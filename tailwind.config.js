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
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
  ],
  daisyui: {
    styled: true,
    themes: [
      {
        mytheme: {
          primary: "#6666FF",
          secondary: "#A63AE6",
          accent: "#FFC01F",
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
