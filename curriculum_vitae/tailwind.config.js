/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        oswald: 'Oswald, ui-serif',
        console: 'Lucida Console, Courier New, monospace'
      }
    }
  },
  plugins: [],
}

