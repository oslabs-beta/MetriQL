module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./client/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      "2xl": "1440px",
    },
    extend: {
      colors: {
        'primary': 'rgb(231, 234, 246)',
        'header': '#a2a8d3',
        'purple': '#6415FF',
        'gray': '#1a202c',
        'secondary': '#7c8ba1',
        'blue': '#2a4365' 
      }
    },
  },
  plugins: [],
}