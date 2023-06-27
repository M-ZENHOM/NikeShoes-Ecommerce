import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        "2xl": { max: "1535px" },
        xl: { max: "1360px" },
        lg: { max: "1200px" },
        md: { max: "768px" },
        sm: { max: "639px" },
      },
      gridTemplateColumns: {
        fluid: "repeat(auto-fill,minmax(350px,1fr))",
      },
    },
  },
  daisyui: {
    themes: ["cupcake"],
  },
  plugins: [require("daisyui")],
} satisfies Config;
