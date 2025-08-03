// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  // Důležité: Rozšiřte 'content' tak, aby zahrnoval i 'mdx' soubory,
  // pokud používáte App Router v Next.js a máte layout.tsx/page.tsx
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}', // Přidáno 'mdx'
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}', // Jen pro jistotu, pokud byste měli pages router
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}', // Důležité pro App Router
  ],
  theme: {
    // Zachovejte definice fontů, pokud je explicitně nepotřebujete měnit
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
    },
    extend: {
      colors: {
        // ---- NAROSEL BAREVNÁ PALETA START ----
        // POUŽIJTE PŘESNÉ HEXADECIMÁLNÍ KÓDY Z LOGA!

        // Primární barva: Tmavě modrá z loga
        primary: {
          // Tyto odstíny můžete generovat online z vašeho hlavního odstínu (DEFAULT)
          // nebo je upravit ručně pro jemné varianty.
          50: '#F1F3F6', // Velmi světlá modrá
          100: '#E2E6ED',
          200: '#C0CADA',
          300: '#9DB3C6',
          400: '#7B8DAF',
          500: '#58679A',
          600: '#36407B',
          DEFAULT: '#1A2A47', // Vaše tmavě modrá z loga
          700: '#15223A',
          800: '#101A2E',
          900: '#0B1321',
        },
        // Sekundární/Akcentní barva: Červená z loga
        secondary: {
          // Opět, odstíny generujte nebo upravte ručně.
          50: '#FDEDE9', // Velmi světlá červená
          100: '#FCE0DA',
          200: '#F9BFB0',
          300: '#F69F85',
          400: '#F27F5B',
          500: '#EE5F31',
          600: '#E93F07',
          DEFAULT: '#E2372A', // Vaše červená z loga
          700: '#C02F23',
          800: '#9D261B',
          900: '#7B1D14',
        },
        // Šedé odstíny: Můžete je nechat, nebo je přizpůsobit tak,
        // aby lépe doplňovaly vaše nové primární barvy.
        // Nynější šedé jsou standardní Tailwindovské, což je obvykle v pořádku.
        gray: {
          100: '#f7fafc',
          200: '#edf2f7',
          300: '#e2e8f0',
          400: '#cbd5e0',
          500: '#a0aec0',
          600: '#718096',
          700: '#4a5568',
          800: '#2d3748',
          900: '#1a202c',
        },
        // ---- NAROSEL BAREVNÁ PALETA END ----
      },
      lineHeight: {
        hero: '4.5rem',
      },
    },
  },
  plugins: [],
};