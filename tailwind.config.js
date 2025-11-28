/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        floatAround: {
          '0%': { transform: 'translate(0,0)' },
          '25%': { transform: 'translate(60vw, -10vh)' },
          '50%': { transform: 'translate(40vw, 50vh)' },
          '75%': { transform: 'translate(-10vw, 30vh)' },
          '100%': { transform: 'translate(0,0)' },
        },
        bob: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
      animation: {
        floatAround: 'floatAround 18s linear infinite',
        bob: 'bob 3s ease-in-out infinite',
      },
      fontFamily: {
        cute: ['"Baloo 2"', 'sans-serif'],
      }
    },
  },
  plugins: [],
};