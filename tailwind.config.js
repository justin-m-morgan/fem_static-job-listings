module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Spartan', 'sans-serif'],
      serif: ['serif']
    },
    extend: {
      backgroundImage: theme => ({
        'header-desktop': "url('/images/bg-header-desktop.svg')",
        'header-mobile': "url('/images/bg-header-mobile.svg')"
      }),
      colors: {
        primary: {
          dark: "hsl(180, 29%, 50%)"
        },
        neutral: {
          faint: "hsl(180, 31%, 95%)",
          light: "hsl(180, 52%, 96%)",
          medium:  "hsl(180, 8%, 52%)",
          dark: "hsl(180, 14%, 20%)"
        }
      },
      boxShadow: {
        primaryGlow: "0 10px 30px hsla(180, 29%, 50%, 0.5)"
      }
    },
  variants: {
    extend: {},
  },
  plugins: []
  }
}
