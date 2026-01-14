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
  heading: ['Baloo 2', 'cursive'], 
  body: ['Nunito', 'sans-serif'],
  mono: ['Menlo', 'monospace'],
},
      colors: {
  'primary-green': '#237C3F',
  'dark-heading': '#333333',
  'light-background': '#FAFAFA',
  'text-dark': '#666666',
  'text-light': '#FAFAFA',
},
    },
  },
  plugins: [],
};

export default config;


        // heading: ['Manrope', 'sans-serif'], 
        // body: ['Inter', 'sans-serif'],
