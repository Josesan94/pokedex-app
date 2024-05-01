import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        water: '#6890F0',
        grass: '#78C850',
        poison: '#A040A0',
        fire: '#F08030',
        bug: '#A8B820',
        dragon: 'linear-gradient(180deg, #53a4cf 50%, #f16e57 50%)',
        flying : '#3dc7ef',
        ground : '#ab9842',
        steel : '#9eb7b8',
        psychic: '#f366b9',
        ice : '#51c4e7',
        ghost: '#4d5b64',
        normal : '#a4acaf',
        rock: '#a38c21',
        electric : '#bba909',
        fighting: '#d56723',
        fairy : '#fdb9e9',
        dark: '#707070',
      }
    },
  },
  plugins: [],
};
export default config;
