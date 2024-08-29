/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        indigo: {
          50: "var(--color-indigo-50)",
          100: "var(--color-indigo-100)",
          200: "var(--color-indigo-200)",
          300: "var(--color-indigo-300)",
          400: "var(--color-indigo-400)",
          500: "var(--color-indigo-500)", // Default indigo color
          600: "var(--color-indigo-600)",
          700: "var(--color-indigo-700)",
          800: "var(--color-indigo-800)",
          900: "var(--color-indigo-900)",
        },
        white: "var(--color-white)", // White color
      },
    },
  },
  plugins: [],
};
