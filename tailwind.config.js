/** @type {import('tailwindcss').Config} */

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        background: "#0a0a0a", // Near black
        surface: "#18181b",    // Zinc 900
        primary: {
          DEFAULT: "#D4AF37", // Gold
          hover: "#B5952F",
        },
        secondary: {
          DEFAULT: "#8b5cf6", // Violet
          hover: "#7c3aed",
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'slide-up': 'slideUp 0.5s ease-out forwards',
        'typewriter': 'typewriter 4s steps(40) 1s 1 normal both, blinkTextCursor 500ms steps(40) infinite normal',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        typewriter: {
          'from': { width: '0' },
          'to': { width: '100%' }
        },
        blinkTextCursor: {
          'from': { borderRightColor: 'rgba(255,255,255,.75)' },
          'to': { borderRightColor: 'transparent' }
        }
      }
    },
  },
  plugins: [],
};