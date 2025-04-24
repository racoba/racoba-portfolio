// tailwind.config.ts
import type { Config } from 'tailwindcss'

const config: Config = {
  theme: {
    extend: {
      colors: {
        customgray: {
          900: '#0A0A0A',
          800: '#1A1A1A',
          700: '#2C2C2C',
          600: '#3F3F3F',
          500: '#5A5A5A',
          400: '#7D7D7D',
          300: '#A0A0A0',
          200: '#D0D0D0',
          100: '#F0F0F0',
          0:   '#FFFFFF',
        }
      }
    }
  }
}

export default config
