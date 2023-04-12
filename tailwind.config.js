/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '500px',
      md: '768px',
      pmd: '820px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {},
  },
  plugins: [],
}

