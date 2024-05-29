/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.{html,js}'],
  theme: {
    extend: {
      colors:
        {
        '80082-LightGray': '#6E7886',
        '80082-DarkGray': '#2C2F38',
        '80082-Pink': '#DA506E',
        '80082-Blue': '#67C4E3'
      },
      fontFamily:{
        'sans':['Poppins', 'sans-serif' ]
      }
    },
  },
  plugins: [  
    require('tailwindcss-animated')
  ] 
}

