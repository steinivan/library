/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      height: {
      '80v': '80vh',
      },
      width: {
        
      },
      maxHeight:{
        '80v': '80vh',
      },
      colors:{
        'bookSeparateBeginning':'#222222'
      }
    },
    
  },
  plugins: [],
}
