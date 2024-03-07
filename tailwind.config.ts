import type { Config } from 'tailwindcss'

export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  corePlugins: {
    // preflight: false
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
} satisfies Config

