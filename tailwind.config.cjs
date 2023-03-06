/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        hankenGrotesk: ['Hanken Grotesk', 'sans-serif']
      },

      colors: {
        // primary colors
        light_red: "hsl(0, 100%, 67%)",
        orangey_yellow: "hsl(39, 100%, 56%)",
        green_teal: "hsl(166, 100%, 37%)",
        cobalt_blue: "hsl(234, 85%, 45%)",

        // gradient colors
        light_slate_blue: "hsl(252, 100%, 67%)",
        light_royal_blue: "hsl(241, 81%, 54%)",
        violet_blue: "hsla(256, 72%, 46%, 1)",
        persian_blue: "hsla(241, 72%, 46%, 0)",

        // neutral colors
        white: "hsl(0, 0%, 100%)",
        pale_blue: "hsl(221, 100%, 96%)",
        light_lavender: "hsl(241, 100%, 89%)", 
        dark_grey_blue: "hsl(224, 30%, 27%)"
      }
    },
  },
  plugins: [],
}
