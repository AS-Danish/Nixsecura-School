/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'float-fast': 'float 3s ease-in-out infinite',
        'spin-slow': 'spin 8s linear infinite',
        'spin-slower': 'spin 12s linear infinite',
        'slide-horizontal': 'slideX 4s ease-in-out infinite',
        'slide-vertical': 'slideY 4s ease-in-out infinite',
        'triangle-slide': 'triangleMove 5s ease-in-out infinite alternate', // Smooth back-and-forth animation for the triangle
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        slideX: {
          '0%, 100%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(50px)' },
        },
        slideY: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(50px)' },
        },
        triangleMove: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(100px)' },
        },
      },
    },
  },
  plugins: [],
};
