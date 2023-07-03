/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        'dark': 'hsl(229, 25%, 31%)',
        'head': 'hsl(217, 16%, 45%)',
        'score': 'hsl(229, 64%, 46%)',
        'onegrad': 'hsl(214, 47%, 23%)',
        'secgrad': 'hsl(237, 49%, 15%)',
        'onepaper': '#2c668b',
        'secpaper': 'hsl(230, 89%, 65%)',
        'oneSic': 'hsl(39, 89%, 49%)',
        'secSic' : 'hsl(40, 84%, 53%)',
        'oneRock': 'hsl(349, 71%, 52%)',
        'secRock': 'hsl(349, 70%, 56%)',
      },
      fontFamily: {
        'barlow': ['Barlow Semi Condensed'],
      },
    },
  },
  plugins: [],
}

