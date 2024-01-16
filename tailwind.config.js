/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#9CBBE2",
        secondary: "#94B5DE",
        tertiary: "#5881B2",
        borderColor: "#BCD4F3",
      },
      screens: {
        xxs: "320px",
        xs: "420px",
      },
    },
  },
  plugins: ["prettier-plugin-tailwindcss"],
};
