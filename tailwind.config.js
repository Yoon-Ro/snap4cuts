/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      keyframes: {
        slideUpDown: {
          '0%': { 
            transform: 'translateY(20%)',
            opacity: '0'
          },
          '10%': {
            transform: 'translateY(0)',
            opacity: '1'
          },
          '90%': {
            transform: 'translateY(0)',
            opacity: '1'
          },
          '100%': {
            transform: 'translateY(-20%)',
            opacity: '0'
          }
        },
        flash: {
          '0%': { 
            opacity: '0'
          },
          '10%': {
            opacity: '1'
          },
          '100%': {
            opacity: '0'
          }
        }
      },
      animation: {
        'slideUpDown': 'slideUpDown 4s ease-in-out infinite',
        'flash': 'flash 500ms ease-out'
      }
    },
  },
  plugins: [],
} 