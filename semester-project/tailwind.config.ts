import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        lato: ["Lato", "sans-serif"],
      },
      colors: {
        "brand-pink": {
          100: "#FC9371",
          50: "#FDB9A4",
        },
        "brand-zinc": {
          50: "#323836",
        },
        "brand-mint": {
          50: "#ABC3BA",
          100: "#BCCFC8"
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
}
export default config;
