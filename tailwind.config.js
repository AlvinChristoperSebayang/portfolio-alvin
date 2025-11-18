module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: '#1B1919',
        orange: '#f7a026',
        primary: '#f7a026'
      },
      textColor: {
        dark: '#1B1919',
         orange: '#f7a026',
        primary: '#f7a026'
      },
      container: {
        center: true, 
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          md: '3rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
          '2xl': '1536px',
        },
      },
  },
  plugins: [],
}
}
