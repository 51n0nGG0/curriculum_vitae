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
        header: '55px 0px 57px 0px',
        headertop: '22px 0px 10px 0px',
        headerbottom: '0px 0px 22px 0px'
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

