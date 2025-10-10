import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Fredoka', 'sans-serif'], // For h1-h6
        body: ['Poppins', 'sans-serif'],    // For p, span, buttons, etc.
        mono: ['Menlo', 'monospace'],      // Optional mono font
      },
      colors: {
        primary: {
          green: '#237C3F',
        },
        dark: {
          heading: '#20242C',
        },
        light: {
          background: '#Fafafa',
        },
        text: {
          color: '#6A7181',
        },
      },
    },
  },
  plugins: [],
};

export default config;
