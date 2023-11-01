/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        lightRed: "hsla(0, 100%, 67%, .05)",
        orangeyYellow: "hsla(39, 100%, 56%, .1)",
        greenTeal: "hsla(166, 100%, 37%, .04)",
        cobaltBlue: "hsl(234, 85%, 45%, .04)",
        lightSlateBlue: "hsl(252, 100%, 67%)",
        lightRoyalBlue: "hsl(241, 81%, 54%)",
        violetBlue: "hsla(256, 72%, 46%, 1)",
        persianBlue: "hsla(241, 72%, 46%, 0)",
        paleBlue: "hsl(221, 100%, 96%)",
        lightLavender: "hsl(241, 100%, 89%)",
        darkGrayBlue: "hsl(224, 30%, 27%)",
        attribution: "hsl(228, 45%, 44%)"
      },

      fontFamily:{
        "Hanken-Grotesk": ["Hanken Grotesk", "sans-serif"]
      }
    },
  },
  plugins: [],
}

