import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        body:    ['"DM Sans"', 'sans-serif'],
      },
      colors: {
        gold: { DEFAULT: '#c9a84c', light: '#e8c97a' },
      },
    },
  },
} satisfies Config
