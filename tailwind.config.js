module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      fontFamily: {
        sans: ["Nunito"],
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      colors: {
        primary: '#0f766e',
        danger: '#cf001d',
        info: '#9bb5c9',
        warning: '#e5b661',
        success: '#0a3930',
        secondary: '#e4e0c5',
        dark: '#0f172a',
        blue: '#9bb5c9',
        green: '#608162',
        rose: '#f86778',
        pink: '#fdc5ca',
        orange: '#fcaa47',
        purple: '#581c87',
        indigo: '#312e81',

        // sosmed color
        facebook: '#1877F2',
        instagram: '#E4405F',
        twitter: '#1DA1F2',
        linkedin: '#0A66C2'
      },

      screens: {
        '2xl': '1320px',
      }
    },
  },
  plugins: [
    require('flowbite/plugin'),
  ],
}