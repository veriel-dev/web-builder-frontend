/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", "/components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  safelist: [
    { pattern: /^scale-(0|50|75|90|95|100|105|110|125|150)$/ },
    { pattern: /^-translate-y-(0|1|2|3|4|5|6)$/ },
    { pattern: /^rotate-(0|1|2|3|6|12|45|90|180)$/ },
    { pattern: /^scale-(0|50|75|90|95|100|105|110|125|150)$/, variants: ["hover"] },
    { pattern: /^-translate-y-(0|1|2|3|4|5|6)$/, variants: ["hover"] },
    { pattern: /^rotate-(0|1|2|3|6|12|45|90|180)$/, variants: ["hover"] },
  ],
  plugins: [require("tailwindcss-animate")],
};
