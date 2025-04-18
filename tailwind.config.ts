import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#3498db',  // Azul más claro
          DEFAULT: '#007BFF', // Azul principal
          dark: '#0056b3',   // Azul oscuro
        },
        secondary: {
          light: '#f8f9fa',  // Blanco humo
          DEFAULT: '#FFFFFF', // Blanco puro
          dark: '#e9ecef',   // Gris muy claro
        },
        accent: {
          green: '#28A745',   // Verde para éxito/confirmación
          yellow: '#FFC107',  // Amarillo para advertencias
          orange: '#FD7E14',  // Naranja para llamadas a la acción
          pink: '#E83E8C',    // Rosa para elementos destacados
        }
      },
    },
  },
  plugins: [],
}

export default config 