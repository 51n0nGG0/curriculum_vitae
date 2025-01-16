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
        console: 'Lucida Console, Courier New, monospace',
        poppins: 'Poppins, serif',
        montserrat: 'Montserrat, serif'
      },
      margin: {
        header: '55px 0px 57px calc((100% - 490px)* 0)'
      },
      gridTemplateColumns: {
        full: '100%'
      },
      gridTemplateRows: {
        root: 'min-content 1fr min-content'
      },
      minHeight: {
        main: 'calc(100vh - 144px)'
      }
      
    }
  },
  plugins: [],
}

