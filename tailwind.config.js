/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {

        primary: '#000000',
        secondary: '#617AFA',
        third: '#47579E',
        bg: '#F7FAFC',
        button: '#E5E8F5',

        dark: {
          primary: '#617AFA',
          secondary: '#8F99CC',
          third: '#21294A',
          four: '#171C36',
          five: '#0F1224',
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'ui-sans-serif', 'system-ui'],
      },
      fontSize: {
        'h1': ['48px', '56px'],
        'h2': ['36px', '44px'],
        'h3': ['22px', '28px'],
        'base': ['16px', '24px'],
        'small': ['14px', '20px'],
      },
      fontWeight: {
        extrabold: 800,
        bold: 700,
        medium: 500,
        regular: 400,
      }
    },
  },
}
