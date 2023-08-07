/** @type {import('tailwindcss').Config} **/
module.exports = {
  darkMode: 'class',
  darkMode: ['class', '[data-mode="dark"]'],
  content: [
    
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

