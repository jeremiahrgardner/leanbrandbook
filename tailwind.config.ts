/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ink: '#343434',
        'page-bg': '#f7f7f7',
        'mid-gray': '#e3e3e3',
        'soft-gray': '#D8D3CC',
        accent: '#efa24d',
        'accent-dark': '#eb8a1e',
        'nav-bg': '#f93',
      },
      fontFamily: {
        sans: ['Montserrat', 'Arial', 'sans-serif'],
        serif: ['Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
