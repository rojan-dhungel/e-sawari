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
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: {
          green: '#26D466',
        },
        dark: {
          heading: '#20242C',
        },
        light: {
          background: '#F9FEFB',
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