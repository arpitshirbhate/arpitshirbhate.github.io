/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: '#09090b', // zinc-950
        primary: {
          DEFAULT: '#10b981', // emerald-500
          light: '#34d399',   // emerald-400
          dark: '#059669',    // emerald-600
        },
        secondary: {
          DEFAULT: '#6366f1', // indigo-500
          light: '#818cf8',   // indigo-400
          dark: '#4f46e5',    // indigo-600
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Outfit', 'sans-serif'],
        mono: ['Fira Code', 'JetBrains Mono', 'monospace'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow-slow': 'glow 8s ease-in-out infinite alternate',
      },
      keyframes: {
        glow: {
          '0%': { transform: 'scale(1) translate(0px, 0px)', opacity: 0.3 },
          '50%': { transform: 'scale(1.1) translate(10px, -20px)', opacity: 0.5 },
          '100%': { transform: 'scale(0.9) translate(-10px, 20px)', opacity: 0.3 },
        }
      }
    },
  },
  plugins: [],
}
