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
      "2xl": "1550px",
    },
    extend: {
      colors: {
        'primary': 'rgb(231, 234, 246)',
        'header': '#a2a8d3',
        'purple': '#6415FF',
        'purple1': '#5304EE',
        'purple2': '#4102bd',
        'gray': '#1a202c',
        'secondary': '#7c8ba1',
        'blue': '#2a4365',
        'dark2': '#1D1127',
        'dark3': '#130918',
        'dark1': '#2B1D38',
        'white1': 'rgb(207, 204, 204)',
        'backgroundGrey': '#030812',
        'sidebarGrey': '#2a2e38',
        'navBarGrey': '#0d131f',
        'historyMedGrey': '#282C34',
        'darkGrey': '#141f33',
      }
    },
  },
  plugins: [],
}