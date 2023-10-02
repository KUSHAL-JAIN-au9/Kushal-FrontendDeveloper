/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brandPrimary: "#4CAF4F",
        neutralDGrey: "#FFF",
        neutralGrey: "#FFF",
        neutralSilver: "#000",
        gray900: "#FFF",
        neutralBlack: "#263238",
      },
      backgroundImage: {
        "my-image-class1": "url('./assets/FALBAN1.png')",
        "my-image-class2": "url('./assets/FAL9.png')",
        "my-image-class3": "url('./assets/FALBAN3.png')",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
