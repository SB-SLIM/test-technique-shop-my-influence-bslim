/** @type {import('tailwindcss').Config} */


module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  important: "#root",
  theme: {
    extend: {
      colors: { primary: "#032958" },
    },
  },
  corePlugins: {
    // Remove Tailwind CSS's preflight style so it can use the MUI's preflight instead (CssBaseline).
    preflight: false,
  },
  plugins: [],
};
