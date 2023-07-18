/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
      './pages/**/*.{js,ts,jsx,tsx}',
      './components/**/*.{js,ts,jsx,tsx}'
   ],
   theme: {
      extend: {
         animation: {
            'spin-slow': 'spin 3s linear infinite'
         },
         colors: {
            'cool-gray': {
               200: '#9fA8BC',
               500: '#828EA9',
               900: '#6F7C9B'
            },
            'carolina-blue': '#6CB0DA',
            'raisin-black-lighter': '#292C3D',
            'raisin-black-light': '#1A1C26',
            'raisin-black': '#16161F',
            'oxford-blue': '#19263A',
            'yinmn-blue': {
               200: '#506CA5',
               500: '#3D5380',
               900: '#354865'
            }
         }
      }
   },
   plugins: []
};
