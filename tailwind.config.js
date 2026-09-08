/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        brand: {
          gold: '#B4A06E',
          surface: '#131313',
          dark: '#080808',
          grid: 'rgba(255, 255, 255, 0.05)',
          ghost: 'rgba(255, 255, 255, 0.08)',
        }
      },
      letterSpacing: {
        tighter: '-0.05em',
        extreme: '-0.07em',
      }
    }
  },
  plugins: [],
}
