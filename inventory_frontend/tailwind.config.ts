import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'off-white': '#FDFBF7',
        'burgundy': '#6B1D2F',
        'camel': '#C19A6B',
      },
    },
  },
  plugins: [],
}

export default config