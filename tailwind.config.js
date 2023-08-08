/** @type {import('tailwindcss').Config} */
module.exports = {
   darkMode: ['class'],
   content: [
      './pages/**/*.{ts,tsx}',
      './components/**/*.{ts,tsx}',
      './app/**/*.{ts,tsx}',
      './src/**/*.{ts,tsx}'
   ],
   theme: {
      container: {
         center: true,
         padding: '2rem',
         screens: {
            '2xl': '1400px'
         }
      },
      extend: {
         keyframes: {
            'accordion-down': {
               from: { height: 0 },
               to: { height: 'var(--radix-accordion-content-height)' }
            },
            'accordion-up': {
               from: { height: 'var(--radix-accordion-content-height)' },
               to: { height: 0 }
            }
         },
         animation: {
            'accordion-down': 'accordion-down 0.2s ease-out',
            'accordion-up': 'accordion-up 0.2s ease-out'
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
   plugins: [require('tailwindcss-animate')]
};
