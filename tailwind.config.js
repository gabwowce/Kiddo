/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-kiddo)', 'system-ui', 'sans-serif'],
      },
      colors: {
        kiddo: {
          text:        "#000000", // pagrindiniai tekstai (juoda)
          muted:       "#64758B", // pilka tekstams (antraštėms, aprašams)
          onDark:      "#F8FAFC", // labai šviesi – tekstui ant tamsių BG
          bg:          "#FFFFFF", // pagrindinis BG
          bgSoft:      "#FEF7EC", // kai kurie fono blokai (soft)
          card:        "#F5F5F5", // kortelių fonas
          accent:      "#DF484B", // akcentas (pvz., žinutės, ženkliukai)
          brand:       "#2463EB", // pagr. veiksmo spalva: mygtukai/checkbox
        },
      },
    },
  },
  plugins: [],
};
