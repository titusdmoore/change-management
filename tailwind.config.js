module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans': ['Mullish', 'sans-serif']
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2e55df',
          light: '#5075fa',
          dark: '#1a41cb',
          active: 'rgba(46, 85, 223, .25)',
        },
        header: '#ffffff',
        background: '#f4f4f4',
        body: '#aeb0b6',
        secondary: {
          DEFAULT: '#1a1e28',
          light: '#363d4b',
          dark: '#14171f'
        },
        footer: '#030407'
      },
      spacing: {
        "container": "10%"
      },
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant('child', '& > *');
      addVariant('child-hover', '& > *:hover');
    },
  ],
}