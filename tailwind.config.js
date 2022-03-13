module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      screens: {
        sm: '576px',
      },
      colors: {
        highlight: 'var(--color-highlight)',
        tertiary: 'var(--color-tertiary)',
      },
      textColor: {
        skin: {
          base: 'var(--color-text-base)',
          headline: 'var(--color-headline)',
          paragraph: 'var(--color-paragraph)',
          'button-text': 'var(--color-button-text)',
        },
      },
      backgroundColor: {
        skin: {
          primary: 'var(--color-bg-primary)',
          secondary: 'var(--color-bg-secondary)',
          highlight: 'var(--color-highlight)',
          tertiary: 'var(--color-tertiary)',
        },
      },
      fontSize: {
        'hidden-number': 'clamp(.75rem,5vw,1.5rem)',
      },
      animation: {
        toast: 'toast .5s linear',
      },
      keyframes: {
        toast: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
    },
  },
  plugins: [],
}
