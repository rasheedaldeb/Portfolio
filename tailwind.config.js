/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'primery' : '#445964',
      'secondery' : '#263138',
      'hover' : '#fff'
    },
    width: {
      'mobil' : '400px',
      'input_big' : '550px',
      'input_small' : '250px'
    },
    height: {
      'mobil': '350px'
    },
    extend: {},
  },
  plugins: [],
}

